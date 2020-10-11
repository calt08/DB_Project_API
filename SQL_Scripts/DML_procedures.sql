CREATE OR REPLACE PROCEDURE public.create_city(
	numcountry integer,
	namep character varying)
LANGUAGE 'sql'
AS $$
INSERT INTO city(idcountry,cityname) VALUES (numcountry,namep);
$$;

CREATE OR REPLACE PROCEDURE public.create_country(
	namec character varying)
LANGUAGE 'sql'
AS $$
INSERT INTO country(countryname) VALUES (namec);
$$;


CREATE OR REPLACE PROCEDURE public.create_customer(
	idcity integer,
	email character varying,
	passwordc character varying,
	namec character varying,
	lastname character varying,
	address character varying,
    admin boolean DEFAULT FALSE)
LANGUAGE 'sql'
AS $$
INSERT INTO customer(idcity, email, password, name, lastname, address, is_admin)
    VALUES(idcity, email, passwordc, namec,lastname,address, admin);
$$;



CREATE OR REPLACE PROCEDURE public.create_invoice(
	idsell integer,
	idpaymentmethod integer,
	approved boolean)
LANGUAGE 'sql'
AS $$
INSERT INTO invoice(idsell, idpaymentmethod, approved)
    VALUES(idsell, idpaymentmethod, approved);
$$;


CREATE OR REPLACE PROCEDURE public.create_item(
	idcat integer,
	itemnam character varying,
	pric numeric,
	tx numeric,
	phot bytea,
	descrip character varying,
	quant integer)
LANGUAGE 'sql'
AS $$
INSERT INTO item(iditemcategory, itemname, price, tax, photo, description, quantity) VALUES (idcat, itemnam,pric,tx,phot,descrip,quant);
$$;

CREATE OR REPLACE PROCEDURE public.create_itemcategory(
	namecat character varying)
LANGUAGE 'sql'
AS $$
INSERT INTO itemcategory(namecategory) VALUES (namecat);
$$;



CREATE OR REPLACE PROCEDURE public.create_paymentmethod(
	paymentname character varying)
LANGUAGE 'sql'
AS $$
INSERT INTO paymentmethod(paymentmethodname) VALUES (paymentname);
$$;


CREATE OR REPLACE PROCEDURE public.create_sell(
	idc integer)
LANGUAGE 'sql'
AS $$
INSERT INTO sell(idcustomer)
VALUES (idc)
$$;



CREATE OR REPLACE PROCEDURE public.create_selldetails(
	idsel integer,
	idtem integer,
	quant integer)
LANGUAGE 'sql'
AS $$
INSERT INTO selldetails(idsell, iditem, quantity)
VALUES (idsel, idtem,quant)
$$;

