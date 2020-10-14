CALL create_country('Republica Dominicana');
CALL create_country('Estados Unidos');
CALL create_country('Mexico');
CALL create_country('Italia');
CALL create_country('Brasil');

CALL create_city(1, 'Santo Domingo');
CALL create_city(2, 'New York');
CALL create_city(3, 'Orlando');
CALL create_city(4, 'Miami');
CALL create_city(5, 'La Romana');

CALL create_paymentmethod('Visa');
CALL create_paymentmethod('Master Card');


CALL create_customer(1, 'pedroherrera@hotmail.com', 'lalala123', 'Pedro', 'Herrera', 'Calle 13 #4',  TRUE);
CALL create_customer(2, 'caballodepiedra@hotmail.com', 'sacaprendesorprende69', 'Luis', 'Jiminian', 'Calle Los Laureles #7',  FALSE);
CALL create_customer(3, 'sanquipanqui1984@hotmail.com', 'sacapie952', 'Samuel', 'Paredes', '123 Main Street',  FALSE);
CALL create_customer(4, 'bushdid911@hotmail.com', 'elsuciodan09', 'Anette', 'Lora', 'Avenida Abraham Lincoln #5',  FALSE);
CALL create_customer(5, 'antitrump2020@hotmail.com', 'feri031chuky73', 'Perla', 'Febles', 'Avenida 27 de Febrero #45', TRUE);

CALL create_itemcategory('Calzado');
CALL create_itemcategory('Pantalones');
CALL create_itemcategory('T-Shirt');
CALL create_itemcategory('Camisa');
CALL create_itemcategory('Ropa interior');

CALL create_item(3, 'Hoodie Galaxia Supreme', 499.99, 3.00, pg_read_file(NULL)::bytea, 'Abrigo con capucha tema galaxia', 1);
CALL create_item(1, 'Converse All Stars', 59.99, 3.00, pg_read_file(NULL)::bytea, 'Calzado urbano', 1);
CALL create_item(3, 'T-Shirt Logo Supreme', 499.99, 3.00, pg_read_file(NULL)::bytea, 'T-Shirt que alante dice Supreme', 1);
CALL create_item(4, 'Camisa Blanca Polo', 499.99, 3.00, pg_read_file(NULL)::bytea, 'Camisa de botones manga larga', 1);
CALL create_item(2, 'Jeans High-Waist Pull&Bear', 49.99, 3.00, pg_read_file(NULL)::bytea, 'Jeans cintura alta de tight fit', 1);
CALL create_item(1, 'Mocasines Nautica', 99.99, 3.00, pg_read_file(NULL)::bytea, 'Calzado formal', 1);
CALL create_item(1, 'Botas Timberland', 59.99, 3.00, pg_read_file(NULL)::bytea, 'Calzado heavy duty', 1);
CALL create_item(1, 'Crocs diseño tradicional', 49.99, 3.00, pg_read_file(NULL)::bytea, 'Calzado Playero de goma', 1);
CALL create_item(1, 'Sandalias Platform Marca Guess', 49.99, 3.00, pg_read_file(NULL)::bytea, 'Sandalias de suela alta', 1);
CALL create_item(5, 'Sport Bra Calvin Klein', 49.99, 3.00, pg_read_file(NULL)::bytea, 'La debilidad de todo aquel al que le atraigan las mujeres. Mala mia Cesar, lo tenia que hacer, arregla eso', 1);

CALL create_sell(1);
CALL create_sell(2);
CALL create_sell(3);
CALL create_sell(4);
CALL create_sell(5);

CALL create_selldetails(1,1,1);
CALL create_selldetails(1,2,5);
CALL create_selldetails(1,3,1);
CALL create_selldetails(2,4,1);
CALL create_selldetails(2,5,1);

-- CALL create_invoice(1, 1, TRUE);
-- CALL create_invoice(2, 2, TRUE);
-- CALL create_invoice(3, 2, TRUE);
-- CALL create_invoice(4, 1, TRUE);
-- CALL create_invoice(5, 1, TRUE);