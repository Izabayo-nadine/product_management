
const productSchema = require("../validators/validation2");
const express = require('express');
const router = express.Router();
const Product = require('../models/storedb');

/**
 * @swagger
 * tags:
 *   name: product(computer) management
 */
/**
 * @swagger
 * /products:
 *   post:
 *     summary: create new product
 *     tags: 
 *       - products
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       "200":
 *         description: product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 * 
 * /
/**
 * @swagger
 * /products/:
 *   get:
 *     summary: Get all products
 *     tags: [products]
 *     parameters:
 *       - in: path
 *         name: productname
 *         schema:
 *           type: string
 *         required: true
 *         description: getting all products
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       "404":
 *         description: products not found
 *       "500":
 *         description: Internal Server Error
 * 
 * /products/{id}:
 *   get:
 *     summary: Get a user by id
 *     tags: [products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: id
 *         required: true
 *         description: id of product to get
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       "404":
 *         description: product not found
 *       "500":
 *         description: Internal Server Error
 * 
 * 
 *   delete:
 *     summary: Delete a product by id
 *     tags: [products]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: Username of the user to delete
 *     responses:
 *       "204":
 *         description: product deleted successfully
 *       "404":
 *         description: product not found
 *       "500":
 *         description: Internal Server Error
 *
 *   put:
 *     summary: Update a user by id
 *     tags: [products]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       "200":
 *         description: product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       "404":
 *         description: product not found
 *       "500":
 *         description: Internal Server Error
 */
 








// Get all products
router.get('/prod', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error getting products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create a new product
router.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a single product by ID
router.get('/products/:id', async (req, res) => {
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
router.put('/products/:id', async (req, res) => {
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
router.delete('/products/:id', async (req, res) => {
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

module.exports = router;