const router=require('express').Router();
const adminController=require('../controllers/admin');
// /admin/add-product=>GET
router.get('/add-product',adminController.getAddProduct);
router.get('/products',adminController.getProducts);

router.post('/add-product',adminController.postAddProduct);
module.exports=router;
