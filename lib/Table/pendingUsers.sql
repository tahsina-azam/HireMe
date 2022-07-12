CREATE TABLE pendingUsers (
    userId INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    name varchar(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    nid varchar(255),
    createdAt DATETIME(6) DEFAULT(NOW())
);