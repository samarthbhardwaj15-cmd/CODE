CREATE DATABASE uraj;
USE uraj;

CREATE TABLE hee(
  studentID INT PRIMARY KEY,
  name VARCHAR(50),
  department VARCHAR(20),
  age INT NOT NULL
);

INSERT INTO hee(studentid, name, department,age)
VALUES
(1, "harshit", "css", 35),
(2, "harsh", "html", 17),
(3, "arsh", "css", 3),
(4, "harsit", "dbms", 5);

SELECT * FROM hee; 

CREATE TABLE amr(
  studentID INT PRIMARY KEY,
  course VARCHAR(50)
);

INSERT INTO amr(studentid, course)
VALUES
(5, "harshit"),
(6, "harsh"),
(7, "arsh"),
(8, " ");

SELECT * FROM amr; 

SELECT name
FROM hee
WHERE age > 20;

SELECT name
FROM hee
ORDER BY age DESC;

SELECT department, COUNT(*) AS heecount
FROM hee
GROUP BY department;

SELECT DISTINCT age
FROM hee
ORDER BY age DESC
LIMIT 1 OFFSET 1;

UPDATE hee
SET department = "jok"
WHERE studentid = 3;


/DELETE FROM hee
WHERE age > 18;

SELECT *
FROM hee
WHERE name LIKE 'A%';

SELECT 
    h.studentid,
    h.name,
    h.department,
    h.age,
    a.course,
    a.studentid
FROM
    hee h
INNER JOIN
     amr a
ON
  h.studentid = a.studentid;
  
SELECT department, AVG(age) AS Average_age
FROM hee
GROUP BY department; 

SELECT *
FROM hee
ORDER BY age DESC
LIMIT 3;

/SELECT h.studentid, h.name, h.department
FROM amr a
LEFT JOIN amr a
  ON h.studentid = a.studentid
WHERE a.studentid IS NULL;

SELECT studentid, name, department, age
FROM hee
WHERE age > (SELECT AVG(age) FROM hee);

SELECT studentid, name, department, age,
DENSE_RANK() OVER (ORDER BY age DESC) AS agedenserank
FROM hee;
