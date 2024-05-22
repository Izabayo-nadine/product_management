
const express=require("express");
 const debug = require('debug')('Output');
 const bcrypt = require('bcrypt');
 const jwt = require("jsonwebtoken");
 const bodyparser=require("body-parser");
 const  authenticateToken2= require("../token2");
 const productSchema = require("../validators/validation2");
 const {signupSchema}= require("../validators/validation");
 const Product = require('../models/storedb');
 const signup=require("../models/signup");
 const Order = require('../models/order');

 const router=express.Router();
 const auth=require("../token");


/**
 * @swagger
 * tags:
 *   name: Users
 */

/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Signup to be given privileges
 *     tags: 
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       "200":
 *         description: Successful signup
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login to be given privileges
 *     tags: 
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       "200":
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 */

/**
 * @swagger
 * /user/users/{username}:
 *   get:
 *     summary: Get a user by username
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: Username of the user to get
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       "404":
 *         description: User not found
 *       "500":
 *         description: Internal Server Error
 * 
 *   delete:
 *     summary: Delete a user by username
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: Username of the user to delete
 *     responses:
 *       "204":
 *         description: User deleted successfully
 *       "404":
 *         description: User not found
 *       "500":
 *         description: Internal Server Error
 * 
 *   put:
 *     summary: Update a user by username
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: Username of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       "200":
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       "404":
 *         description: User not found
 *       "500":
 *         description: Internal Server Error
 */








/**
 * @swagger
 * tags:
 *   name: Products
 */

/**
 * @swagger
 * /user/products:
 *   post:
 *     summary: Create a new product
 *     tags: 
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/product'
 *     responses:
 *       "200":
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product'
 */

 /**
 * @swagger
 * /user/products:
 *   get:
 *     summary: Get all products
 *     tags: 
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product'
 *       "404":
 *         description: Products not found
 *       "500":
 *         description: Internal Server Error
 */
/** 
 * @swagger
 * /user/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to get
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product'
 *       "404":
 *         description: Product not found
 *       "500":
 *         description: Internal Server Error
 * 
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to delete
 *     responses:
 *       "204":
 *         description: Product deleted successfully
 *       "404":
 *         description: Product not found
 *       "500":
 *         description: Internal Server Error
 * 
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/product'
 *     responses:
 *       "200":
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product'
 *       "404":
 *         description: Product not found
 *       "500":
 *         description: Internal Server Error
 */



/**
 * @swagger
 * tags:
 *   name: Orders
 */

/**
 * @swagger
 * /user/orders:
 *   post:
 *     summary: Create a new order
 *     tags: 
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/order'
 *     responses:
 *       "200":
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/order'
 */

/**
 * @swagger
 * /user/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/order'
 *       "404":
 *         description: Orders not found
 *       "500":
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the order to get
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/order'
 *       "404":
 *         description: Order not found
 *       "500":
 *         description: Internal Server Error
 * 
 *   delete:
 *     summary: Delete an order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the order to delete
 *     responses:
 *       "204":
 *         description: Order deleted successfully
 *       "404":
 *         description: Order not found
 *       "500":
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/orders/{id}/status:
 *   patch:
 *     summary: Update an order status by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the order to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/order'
 *     responses:
 *       "200":
 *         description: Order updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/order'
 *       "404":
 *         description: Order not found
 *       "500":
 *         description: Internal Server Error
 */

 router.post("/signup", async (req, res) => {
    try {
        const validationResult = signupSchema.validate(req.body);
        if (validationResult.error) {
          return res.status(400).json({ error: validationResult.error.details[0].message });
      }
 
      //hashing users password.
 
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;

       // Debug statement for creating a new user
        
       
        const user=await signup.create(req.body); 
        const newUser=await user.save();
        res.send(newUser);

       //  console.log(newUser);
        
    } catch (error) {
        console.error('Error during sign up:', error);
        res.status(500).send('Internal Server Error');
    }
 });

 router.post("/login", async (req, res) => {
    const data={
       username:req.body.username,
       password:req.body.password
    }
   const exists=await signup.findOne({username:data.username});
   if(!exists){
    console.log("The user does not exist");
    res.send("The user does not exist");
   }else{
    const payload={
       "username":req.body.username,
       "password":req.body.password,
     }
      const token = jwt.sign(payload,process.env.SECRET_KEY);
      res.json({ token });

   }
 });
 router.get("/users/:username",auth, async (req, res) => {
    try {
        const user = await signup.findOne({ username: req.params.username });
        if (user) {
            res.json(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).send('Internal Server Error');
    }
 });

 router.delete("/users/:username",auth, async (req, res) => {
    try {
        const deletedUser = await signup.findOneAndDelete({ username: req.params.username });
        if (deletedUser) {
            res.status(204).send(); // No content to send after successful deletion
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Internal Server Error');
    }
 });



 router.put("/users/:username",auth, async (req, res) => {
    try {
        const updatedUser = await signup.findOneAndUpdate(
            { username: req.params.username },
            req.body,
            { new: true } // Return the updated document
        );
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Internal Server Error');
    }
 });

// Get all products
router.get('/products',auth, async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        console.error('Error getting products:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create a new product
router.post('/products',auth, async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a single product by ID
router.get('/products/:id',auth, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error getting product by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a product by ID
router.put('/products/:id',auth, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a product by ID
router.delete('/products/:id',auth, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

 //about order management
 

 // Create a new order
 router.post('/orders',auth, async (req, res) => {
    try {
      const { customer, products, totalPrice, orderId } = req.body;
  
      // Validate the request body
      if (!customer || !products || !totalPrice || !orderId) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      // Create and save the new order
      const order = new Order({
        customer,
        products,
        totalPrice,
        orderId
      });
      await order.save();
  
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Get all orders
  router.get('/orders',auth, async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
//get order by id
  router.get('/orders/:id', async (req,res)=>{
    try{
      const { id }=req.params;
      const order = await Order.findById(id)
      if (!order) {
        return res.status(404).json({ message: 'Order not found'});
      }
      res.json(order)
    }catch(error){
   res.status(400).json({message: error.message})
    }
  })
  
  // Update order status
 router.patch('/orders/:id/status',auth, async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Delete an order
  router.delete('/orders/:id',auth, async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findByIdAndDelete(id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
 

  

 module.exports=router;


  