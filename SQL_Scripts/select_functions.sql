CREATE OR REPLACE FUNCTION Get_User(reqEmail character varying)
  returns setof CUSTOMER
AS $$
SELECT * FROM CUSTOMER WHERE email = reqEmail;
$$
language sql;

CREATE OR REPLACE FUNCTION Get_Cat()
  returns setof ITEMCATEGORY
AS $$
SELECT * FROM ITEMCATEGORY;
$$
language sql;

CREATE OR REPLACE FUNCTION Get_items_cat(iditemcat int)
  returns setof ITEM
AS $$
SELECT * FROM ITEM WHERE iditemcat = iditemcategory;
$$
language sql;

CREATE OR REPLACE FUNCTION Get_allitems()
  returns setof ITEM
AS $$
SELECT * FROM ITEM WHERE quantity > 0;
$$
language sql;

CREATE OR REPLACE FUNCTION Get_sell(idcust int)
  returns setof SELL
AS $$
SELECT * FROM SELL WHERE idcustomer = idcust ORDER BY idsell desc LIMIT 1
$$
language sql;

CREATE OR REPLACE FUNCTION get_item(idit int)
  returns setof ITEM
AS $$
SELECT * FROM ITEM WHERE iditem = idit
$$
language sql;

CREATE OR REPLACE FUNCTION items_in_sell(idsel int)
  returns TABLE(
	  idselldetails integer,
	  idsell integer,
	  iditem integer,
	  itemname varchar(100),
	  quantity integer,
	  photo bytea,
	  price NUMERIC(9,2),
	  tax NUMERIC(4,2)
  )
AS $$
SELECT idselldetails, SELL.idsell, item.iditem, itemname, selldetails.quantity, photo, price, tax FROM SELLDETAILS 
INNER JOIN SELL ON SELLDETAILS.IDSELL = SELL.IDSELL 
INNER JOIN ITEM ON SELLDETAILS.iditem = item.iditem
WHERE SELL.IDSELL = idsel
$$
language sql;


CREATE OR REPLACE FUNCTION all_invoices(idcust int)
  returns TABLE(
	  idinvoice integer,
	  idsell integer,
      idpaymentmethod integer,
	  total NUMERIC(10,2)
  )
AS $$
SELECT idinvoice, invoice.idsell, invoice.idpaymentmethod, SUM(item.price * sellDetails.quantity) Total FROM INVOICE
INNER JOIN SELL ON INVOICE.IDSELL = SELL.IDSELL
INNER JOIN SELLDETAILS ON SELLDETAILS.IDSELL = SELL.IDSELL 
INNER JOIN ITEM ON SELLDETAILS.iditem = item.iditem
WHERE sell.idcustomer = idcust
GROUP BY idinvoice
$$
language sql;
