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
