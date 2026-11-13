CREATE TABLE Emp (
    emp_id INT PRIMARY KEY,
	name VARCHAR(50),
	depatment VARCHAR(50),
	salary INT
);

INSERT INTO Emp (emp_id, name, depatment, salary)
VALUES (1, 'RAHUL', 'IT', 5000),
       (2, 'RAHL', 'IIT', 500),
	   (3, 'RHUL', 'CSE', 6000),
	   (4, 'RSAHUL', 'IT', 5000),
	   (5, 'RAHUL', 'DE', 100);

SELECT * FROM Emp;	   

SELECT name, salary
FROM Emp;

SELECT name
FROM Emp
WHERE salary > 4000;

SELECT name
FROM Emp
WHERE depatment = 'IT';

SELECT *
FROM Emp
ORDER BY salary DESC;

SELECT emp_id
FROM Emp
WHERE salary BETWEEN 3000 AND 5000;

SELECT *
FROM Emp
WHERE name LIKE 'A%';

SELECT COUNT(*) AS total_emp
FROM Emp;

SELECT MAX(salary) AS max_salary
FROM Emp;

SELECT AVG(salary) AS Avg_salary
FROM Emp;

SELECT MAX(salary) AS second_highest_salary
FROM Emp
WHERE salary < (
    SELECT MAX(salary)
	FROM Emp
);

SELECT DISTINCT salary
FROM Emp
ORDER BY salary DESC
LIMIT 1 OFFSET 2;

SELECT depatment, MAX(salary) AS highest_salary
FROM Emp
GROUP BY depatment;

SELECT depatment, COUNT(*) AS Total_emp
FROM Emp
GROUP  by depatment;

SELECT depatment, COUNT(*) AS More_emp
FROM Emp
GROUP BY depatment
HAVING COUNT(*) >= 2;

SELECT *
FROM Emp
WHERE salary > (
     SELECT AVG(salary)
	 FROM Emp
);

SELECT name, COUNT(*) AS total
FROM Emp
GROUP BY name
HAVING COUNT(*) > 1;

SELECT *
FROM Emp
WHERE salary = (
    SELECT MAX(salary)
	FROM Emp
);

SELECT * 
FROM Emp
ORDER BY salary DESC
LIMIT 3;

SELECT *
FROM Emp
WHERE YEAR(joining_date) = 2025;

-- WHERE joining_date >= '2025-01-01'
--   AND joining_date < '2026-01-01';

SELECT 
    MAX(salary) - MIN(salary) AS salary_difference
FROM Emp;	

SELECT *
FROM Emp
WHERE depatment != 'IT'; 
-- WHERE depatment <> 'IT'; 

SELECT 
    depatment,
	AVG(salary) AS average_salary
FROM Emp
GROUP BY depatment
HAVING AVG(salary) > 4000;

SELECT
    depatment,
    SUM(salary) AS total_salary
FROM Emp
GROUP BY depatment;

SELECT 
FROM Emp
WHERE name LIKE '%A%';

CREATE TABLE Dep(
    salary INT PRIMARY KEY,
	work VARCHAR(50)
);

INSERT INTO Dep (salary, work)
VALUES ('500', 'GOOGLE'),
       ('6000', 'PAN'),
	   ('100', 'FLIP');

SELECT FROM Dep;

DROP TABLE Dep;


SELECT
    e.name,
    d.work
FROM Emp e
INNER JOIN Dep d
    ON e.salary = d.salary;

SELECT *
FROM Emp e
INNER JOIN Dep d
ON e.salary = d.salary;

SELECT 
    e.name,
	d.work
FROM Emp e
LEFT JOIN Dep d
-- RIGHT JOIN Dep d
ON e.salary = d.salary;

SELECT 
    e.name
FROM Emp e
LEFT JOIN Dep d
ON e.salary = d.salary
WHERE  d.salary IS NULL;

SELECT
     d.work
FROM Dep d
LEFT JOIN Emp e
ON d.salary = e.salary
WHERE e.emp_id IS NULL;

SELECT 
    e.name
FROM Emp e
-- LEFT JOIN Dep d
INNER JOIN Dep d
ON e.salary = d.salary
-- WHERE d.work LIKE '%PAN%';
WHERE d.work = 'GOOGLE';

CREATE TABLE SALE(
     salary INT PRIMARY KEY,
	 City VARCHAR(50) 
)
INSERT INTO SALE(salary, City)	
VALUES ('500','PUNE'),
       ('6000','DELHI'),
	   ('100','PUNE');

SELECT * FROM SALE;	   

SELECT 
    e.name,
	d.work,
	s.City
FROM Emp e
INNER JOIN Dep d
   ON e.salary = d.salary
INNER JOIN SALE s
   ON e.salary = s.salary;


