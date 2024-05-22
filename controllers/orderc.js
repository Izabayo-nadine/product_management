const express=require("express");
 const debug = require('debug');
 const bcrypt = require('bcrypt');
 const jwt = require("jsonwebtoken");
 const bodyparser=require("body-parser");
  
 const productSchema = require("../validators/validation2");
 const {signupSchema}= require("../validators/validation");
 const Product = require('../models/storedb');
 const signup=require("../models/signup");
 const Order = require('../models/order');

 const router=express.Router();