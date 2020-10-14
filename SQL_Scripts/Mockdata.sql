CALL create_country('Republica Dominicana');
CALL create_country('Puerto Rico');

CALL create_city(1, 'Santo Domingo');
CALL create_city(1, 'Santiago');
CALL create_city(1, 'Orlando');
CALL create_city(2, 'Ponce');
CALL create_city(2, 'San Juan');

CALL create_paymentmethod('Visa');
CALL create_paymentmethod('Master Card');


CALL create_customer(1, 'pedroherrera@hotmail.com', 'lalala123', 'Pedro', 'Herrera', 'Calle 13 #4',  TRUE);
CALL create_customer(2, 'caballodepiedra@hotmail.com', 'sacaprendesorprende69', 'Luis', 'Jiminian', 'Calle Los Laureles #7',  FALSE);
CALL create_customer(3, 'sanquipanqui1984@hotmail.com', 'sacapie952', 'Samuel', 'Paredes', '123 Main Street',  FALSE);
CALL create_customer(4, 'bushdid911@hotmail.com', 'elsuciodan09', 'Anette', 'Lora', 'Avenida Abraham Lincoln #5',  FALSE);
CALL create_customer(5, 'antitrump2020@hotmail.com', 'feri031chuky73', 'Perla', 'Febles', 'Avenida 27 de Febrero #45', TRUE);

CALL create_sell(1);
CALL create_sell(2);
CALL create_sell(3);
CALL create_sell(4);
CALL create_sell(5);

CALL create_itemcategory('Brushs');
CALL create_itemcategory('Scissors');
CALL create_itemcategory('Seats');
CALL create_itemcategory('Sets');
CALL create_itemcategory('Dryers');

CALL create_item(1, 'Cepillo de peluqueria', 499.99, 100.00, pg_read_file(NULL)::bytea, 'Cepillo de pelo profesional de peluqueria, cepillo de pelo de corte suave', 100);
CALL create_item(1, 'Cepillo de pelo de cerca de jabali', 700.99, 125.00, pg_read_file(NULL)::bytea, 'Cepillo de pelo de cerca de jabali. Paleta de madera ovalada para  mujer', 100);
CALL create_item(2 'Missum - Tijera profesionales', 1499.99, 200.00, pg_read_file(NULL)::bytea, 'Missum - Tijeras profesionales de corte de pelo de acero inoxidable japonés, 6.5 in, color azul', 100);
CALL create_item(2, 'Tijeras profesionales Equinox ', 799.99, 100.00, pg_read_file(NULL)::bytea, 'Tijeras profesionales Equinox con soporte para dedos e inserciones de dedo, tijeras de corte de pelo de peluquería templadas con hielo, 6.5",', 100);
CALL create_item(2, 'ULG Tijeras de corte de pelor', 600.99, 100.00, pg_read_file(NULL)::bytea, 'ULG Tijeras de corte de pelo, tijeras de barberi corte profesional, tijeras de peluqueria', 100);
CALL create_item(3, 'Salon Barber - Cojín para infantes', 5000.99, 400.00, pg_read_file(NULL)::bytea, 'Salon Barber - Cojín para silla infantil, color negro', 100);
CALL create_item(3, 'Silla Artist Hand multiusos', 20000.99, 5000.00, pg_read_file(NULL)::bytea, 'Silla Artist Hand multiusos hidráulica y reclinable para champú, peluquería, salón de belleza, 1 unidad, Negro', 100);
CALL create_item(4, 'Juego de tijeras de corte de pelo', 1000.99, 700.00, pg_read_file(NULL)::bytea, 'Juego de tijeras de corte de pelo profesional, tijeras de corte de pelo, tijeras de adelgazamiento, tijeras de peluquería, set de peluquería, juego de tijeras de corte de pelo (negro)', 100);
CALL create_item(4, 'Wahl - Juego de rasuradora', 1200.99, 500.00, pg_read_file(NULL)::bytea, 'Juego de rasuradora de cabello completo Wahl Color Pro con accesorios extra (N.° 79300-1001)', 100);
CALL create_item(5, 'Secador profesional de turmalina', 2000.99, 300.00, pg_read_file(NULL)::bytea, 'Secador profesional de turmalina con peine, 1875 W, secador de pelo iónico negativo con difusor para cabello rizado, motor de CA, silencioso, secado rápido con concentrador, color negro', 100);

CALL create_selldetails(1,1,1);
CALL create_selldetails(1,2,5);
CALL create_selldetails(1,3,1);
CALL create_selldetails(1,4,2);
CALL create_selldetails(1,5,5);

-- CALL create_invoice(1, 1, TRUE);
-- CALL create_invoice(2, 2, TRUE);
-- CALL create_invoice(3, 2, TRUE);
-- CALL create_invoice(4, 1, TRUE);
-- CALL create_invoice(5, 1, TRUE);