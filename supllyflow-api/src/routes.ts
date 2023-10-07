import { Response, Router, Request } from 'express'
import { UserController } from './controller/UserController'
import { AuthController } from './controller/AuthController';
import { AuthMiddleware } from './middlewares/AuthMiddleware';
import { SupplierController } from './controller/SupplierController';
import { ProductController } from './controller/ProductController';

export const router = Router();

const userController = new UserController();
const authController = new AuthController();
const supplierController = new SupplierController();
const productController = new ProductController();

router.get("/", (req: Request, res: Response) => {
    res.json({ msg: "hello" });
});

router.post("/user", userController.store);
router.post("/auth", authController.authenticate);

router.post("/supplier", AuthMiddleware, supplierController.create);
router.get("/supplier", AuthMiddleware, supplierController.findSuppliersUser);

router.post("/product", AuthMiddleware, productController.create);
router.get("/product", AuthMiddleware, productController.findProductUser);

// rota protegida de exemplo 
router.get("/users", AuthMiddleware, userController.index);
