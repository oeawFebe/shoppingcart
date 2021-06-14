const express=require('express');
const routerAddProduct=require('./routes/admin');
const routerIndex=require('./routes/shop');
app=express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const errorController=require('./controllers/error');

app.use(express.urlencoded({extended:false}));//why necessary
app.use('/admin',routerAddProduct);
app.get('/',routerIndex);
app.use(errorController.get404);

app.listen(3000);

