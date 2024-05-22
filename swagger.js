const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Product Store Management",
        description: "This is a simple CRUD operations",
        version: "1.0.0"
      },
      servers: [
        {
          url: "http://localhost:5000",
          description: "Development server"
        }
      ],
      components: {
        schemas: {
          user: {
            type: "Object",
            properties: {
              username: {
                type: "String",
                description: "The name of the user"
              },
              email: {
                type: "String",
                description: "A valid email of the user"
              },
              password: {
                type: "String",
                description: "A very strong password of the user"
              }
            }
          },
          product: {
            type: "Object",
            properties: {
              productname: {
                type: "String",
                description: "The name of the product"
              },
              description: {
                type: "String",
                description: "A product details"
              },
              price: {
                type: "Number",
                description: "The price of the product"
              },
              categories: {
                type: "String",
                description: "The product (computer) category"
              },
              manufacturers: {
                type: "String",
                description: "The product (computer) manufacturer"
              }
            }
          },
          order: {
            type: "object",
            properties: {
              customer: {
                type: "string",
                description: "Customer ID"
              },
              products: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    productId: {
                      type: "string",
                      description: "Product ID"
                    },
                    quantity: {
                      type: "number",
                      description: "Quantity of the product"
                    }
                  }
                }
              },
              totalPrice: {
                type: "number",
                description: "Total price of the order"
              },
              orderId: {
                type: "string",
                description: "Order ID"
              },
              status: {
                type: "string",
                description: "Order status"
              }
        }
      }
    },
    securitySchemes:{
      bearerAuth:{
        type:"http",
        scheme: "bearer",
        bearerFormat:"JWT"
      }
    },
    security:[
      {
        bearerAuth:[]
      }
    ],
  }

    },
    apis: ["./controllers/user.js"]
  };
  
  module.exports = options;