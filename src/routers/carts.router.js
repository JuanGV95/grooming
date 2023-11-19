import { Router } from 'express';

const router = Router();

import CartManager from '../dao/carts.manager.js';

router.get('/carts/:cid', async (req, res)=>{
    const{ cid } = req.params;
    const cart = await CartManager.getById(cid);
    if(!cart){
        res.json({ error: 'Carrito no encontrado.' });
    } else {
        res.status(201).json(cart);
    }
});

router.post('/carts', async (req, res)=>{
    const { body } = req;
    try {
        const newCart = await CartManager.create(body);
        res.status(201).json(newCart);
        console.log(newCart);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/carts/:cid/product/:pid', async (req, res) => {
    const { params } = req;
    const { cid, pid } = params;
    
    try {
        const newProductInCart = await CartManager.addProductInCart(cid, pid);
        res.status(201).json(newProductInCart);
        console.log(newProductInCart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
export default router