CREATE DATABASE yes;
USE yes;

CREATE TABLE output(
empid INT PRIMARY KEY,
name VARCHAR(50),
salary INT NOT NULL,
departmentid INT NOT NULL
);

INSERT INTO output(empid, name, salary, departmentid)
VALUES
(1,"nikil",100000,"201"),  
(2,"niki",10000,"202"),  
(3,"nikl",1000,"203"),  
(4,"niil",100,"204");

SELECT * FROM output;

CREATE TABLE utp(
departmentid INT NOT NULL,
departname VARCHAR(60)
);

INSERT INTO utp(departmentid,departname)
VALUES
("201","nikil"),  
("202","niki"),  
("203","nikl"),  
("204","niil");

SELECT * FROM utp;

SELECT *
FROM output
WHERE salary > 5000;

SELECT DISTINCT departmentid
FROM output;

SELECT departmentid
FROM output
GROUP BY department;

SELECT SUM(salary) AS totalsalary
FROM output;

SELECT departmentid, SUM(salary) AS deapartmenttotal
FROM output
GROUP BY departmentid;

SELECT *
FROM output
WHERE name LIKE '%a';

SELECT
   o.empid,
   o.name,
   o.salary,
   u.deptname
FROM output o
INNER JOIN utp u
   ON o.departmentid = u.departmentid;
   
SELECT
   departmentid,
   MAX(salary) AS highestsalary
FROM output
GROUP BY departmentid;

SELECT AVG(salary) AS Avgsalary
FROM output;

SELECT *
FROM output
WHERE salary > (SELECT AVG(salary) FROM output);

SELECT * 
FROM output
ORDER BY salary ASC
LIMIT 3;

SELECT
   o.empid,
   o.name,
   o.salary,
   o.departmentid
FROM output o
LEFT JOIN utp u
   ON o.departmentid = u.departmentid
   WHERE d.department IS NULL;
   
SELECT 
   name,
   salary,
   RANK() OVER (PARTITION BY departmentid ORDER BY salary DESC) AS salaryRank
FROM output; 
   
SELECT *
FROM output
WHERE salary = (
   SELECT MAX(salary)
   FROM output
   WHERE salary < (SELECT MAX(salary) FROM output)
);   
   
   

 

 
