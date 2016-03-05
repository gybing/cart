module.exports = function(app){
    app.get('/cart',function(req,res){
        var Cart = global.dbHelper.getModel('cart');
        if(!req.session.error){
            req.session.error = "用户已过期，请重新登录";
            res.redirect('/login');
        }else {
            Cart.find({"uId":req.session.user._id,"cStatus":false},function(err,docs){
                res.render('cart',{carts:docs});
            });
        }
    })
    //添加购物车商品
    app.get('/addToCart/:id',function(req,res){
        if(!req.session.user){
            req.session.error = "用户已过期，请重新登录";
            res.redirect('/login');
        }else {
            var Commodity = global.dbHelper.getModel('commodity'),
                Cart = global.dbHelper.getModel('cart');
            Cart.findOne({"uId":req.session.user._id,"cId":req.params.id},function(err,doc){
                //商品已存在 +1
                if(doc){
                    Cart.update({"uId":req.session.user._id,"cId":req.params.id},{$set:{cQuantity:doc.cQuantity+1}},function(err,doc){
                        //成功返回1 失败返回0
                        if(doc>0){
                            res.redirect('/home');
                        }
                    });
                //商品未存在，添加
                }else {
                    Commodity.findOne({"_id":req.params.id},function(err,doc){
                        if(doc){
                            Cart.create({
                                uId:req.session.user._id,
                                cId:req.params.id,
                                cName:doc.name,
                                cPrice: doc.price,
                                cImgSrc: doc.imgSrc,
                                cQuantity : 1
                            },function(err,doc){
                                if(doc){
                                    res.redirect('/home');
                                }
                            })
                        }
                    })
                }
            })
        }
    })

    //删除购物车商品
    app.get('/delFromCart/:id',function(req,res){
        //req.params.id 获取商品id
        var Cart = global.dbHelper.getModel('cart');
        Cart.remove({"_id":req.params.id},function(err,doc){
            //成功返回1 失败0
            if(doc > 0){
                res.redirect('/cart');
            }
        })
    });
    //购物车结算
    app.post('/cart/clearing',function(req,res){
        var Cart = global.dbHelper.getModel('cart');
        Cart.update({"_id":req.body.cid},{$set:{cQuantity:req.body.cnum,cStatus:true}},function(err,doc){
            if(doc>0){
                res.send(200);
            }
        })
    })
}