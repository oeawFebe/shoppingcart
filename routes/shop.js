const shopController=require('../controllers/shop.js');

const router=require('express').Router();

router.get('/',shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);


module.exports=router;
