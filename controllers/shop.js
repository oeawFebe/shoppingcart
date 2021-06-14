const Product=require('../models/product');
const p='C:\\Users\\Owner\\Desktop\\bookreview\\addProduct.html';

exports.postAddProduct=(req,res)=>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
};
exports.getProducts=(req,res)=>{
    const products=Product.fetchAll(products=>{
        res.render('shop/product-list',{
            prods:products,
            pageTitle:'Shop',
            path:'/products',
            hasProducts:products.length>0,
            activeShop:true,
            productCSS:true
        });
    
    });
};

exports.getIndex=(req,res)=>{
    const products=Product.fetchAll(products=>{
        res.render('shop/product-list',{
            prods:products,
            pageTitle:'Shop',
            path:'/',
            hasProducts:products.length>0,
            activeShop:true,
            productCSS:true
        });
    
    });
};

exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
        path:'/cart',
        pageTitle:'Your Cart',
    });
};
exports.getCheckout=(req,res,next)=>{
    res.render('shop/checkout',{
        path:'/checkout',
        pageTitle:'Checkout',
    });
};
