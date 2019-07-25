CREATE TABLE consumers (
  email varchar(50),
  "phone number" varchar(14),
  "City/State/Zip" varchar(50),
  textalerts BOOLEAN,
  "coupon selected" BOOLEAN
);

INSERT INTO consumers (email, "phone number", "City/State/Zip", textalerts, "coupon selected")
    VALUES ('john.doe@gmail.com', '(123) 567 8901', 'New York, NY 10013', TRUE, FALSE)
