CREATE TABLE users(
userId varchar(50),
name varchar(50),
email varchar(50) NOT NULL,
password varchar(255) NOT NULL,
role varchar(255),
nid varchar(255),
PRIMARY KEY(userId)
);