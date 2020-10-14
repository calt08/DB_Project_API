# DB Project

1. Run `npm install` command
2. Run `npm start` command

Progress:

POST /customers/register
POST /customers/login

GET /categories lanza todas las categorias
POST /categories crear nueva categoria

GET /items todas los items (Lo que pediste para el search) 
GET /items/{iditem} un item especifico 
GET /items/category/{categoryid} buscar los items de una categoria en especifico 
POST /items/category/{categoryid} crear item en la categoria especificada
PATCH /items/{itemid} editar algun elemento de ese item

GET /sell listar todos los items dentro de sell AKA carrito de compras
POST /sell agregar un item al carrito
PATCH /sell/{itemid} modificar la cantidad del elemento del carrito 
POST /sell/pay  paga el carrito, crea el invoice y crea un nuevo carrito para seguir
GET /sell/paymentmethod listar todos los payment method disponibles
POST /sell/paymentmethod crear nuevo payment method

GET /invoice listar todos los invoice
GET /invoice/{invoiceid} obtener toda la info de ese invoice, es decir, cuales items tenia y todo eso

GET /country listar todos los paises
GET /country/{idcountry}/city listar todas las ciudades de ese pais
POST /country insertar pais
POST /country/{idcountry}/city insertar ciudad a pais
