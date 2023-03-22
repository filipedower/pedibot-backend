import { Router } from 'express'
import { CategoryController } from './controllers/CategoryController'
import { ConsumerController } from './controllers/ConsumerController'
import { ProductController } from './controllers/ProductController'
import { SizeController } from './controllers/SizeController'
import { UserAdminController } from './controllers/UserAdminController'
import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.post('/login', new UserAdminController().login)
routes.get('/products', new ProductController().listProducts)
routes.get('/product/:productId', new ProductController().productById)
routes.post('/validate', new UserAdminController().validateToken)
routes.get('/drinks', new CategoryController().getDrinks)

routes.post('/admin', new UserAdminController().create)

routes.use(authMiddleware)

//All routes for category table
routes.post('/category', new CategoryController().create)
routes.get('/category', new CategoryController().getCategories)

//All routes for size table
routes.post('/size', new SizeController().create)
routes.get('/size', new SizeController().getSizes)

//All routes for products table
routes.post('/product', new ProductController().create)

//All routes for consumers table
routes.post('/consumer', new ConsumerController().create)
routes.get('/consumer', new ConsumerController().lisConsumers)

//All routes for user admin table
routes.get('/profile', new UserAdminController().getProfile)

export default routes