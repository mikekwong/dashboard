CREATE TABLE consumers (
  id serial,
  email varchar(50),
  phone_number varchar(14),
  city_state_zip varchar(50),
  textalerts varchar(3)
);

INSERT INTO consumers (email, phone_number, city_state_zip, textalerts)
    VALUES ('john.doe@gmail.com', '(123) 567 8901', 'New York, NY 10013', 'yes');
