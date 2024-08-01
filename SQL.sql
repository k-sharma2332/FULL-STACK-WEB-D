
CREATE TABLE user (
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT CHECK (age >=13),
PRIMARY KEY (id)
);

INSERT INTO user 
(id , age , name , email , followers , following)
VALUES
(1,14,"adam","adam@aho.in",123,145),
(2,15,"bob","bob123@gmail.com",233,433),
(3,16,"casey","casey@gmail.com",2334,451),
(4,17,"donldo","donald@gmail.com",659,877);

INSERT INTO user 
(id , age , name , email , followers , following)
VALUES
(5,17,"adm","adm@aho.in",923,147),
(6,15,"bb","bb123@gmail.com",833,33);

-- SELECT name , age , email
-- FROM user 
-- LIMIT 3;

-- SELECT name , age  , followers , email
-- FROM user
-- WHERE email IN ("adam@aho.in","bob123@gmail.com","donald@gmail.com");

-- SELECT name , age , followers
-- FROM user
-- ORDER BY followers asc;

-- SELECT max(age)
-- FROM user ;

-- SELECT count(age)
-- FROM user 
-- WHERE age = 14;
-- SELECT count(id)
-- FROM user
-- GROUP BY age;
SELECT age , max(followers)
FROM user
GROUP BY age
HAVING max(followers)>200
ORDER BY age DESC;


CREATE TABLE post (
    id INT PRIMARY KEY,
    cotent VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id)
        REFERENCES user (id)
);
