CREATE OR REPLACE FUNCTION Get_User(reqEmail character varying)
  returns setof CUSTOMER
AS $$
SELECT * FROM CUSTOMER WHERE email = reqEmail;
$$
language sql;

SELECT * FROM Get_User('cesar@lopez.com')