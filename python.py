# print("Hello World!")
# #calculater
# num1 = float(input("Enter first number:"))
# op =  input("Enter operator (+,-,*,/):")
# num2 = float(input("Enter second number:"))

# if op == "+":
#     print(num1 + num2)
# elif op == "-":
#      print(num1 - num2)
# elif op == "*":
#      print(num1 * num2)
# elif op == "/":
#    if num2 != 0:
#        print("Answer =", num1 / num2)
#    else:
#        print("Cannot divide by zero")
# else:
#     print("Invalid operator")       

# #Even or Odd
# num = int(input("Enter a number:"))
# if num % 2 == 0:
#     print(num, "is an evne number")
# else:
#     print(num, "is an odd number")
    
# #largest of three numbers
# a = float(input("Enter first number:"))
# b = float(input("Enter second number:"))
# c = float(input("Enter third number:"))

# if a >= b and a >= c:
#     print(a, "is the largest number")
# elif b >= a and b >= c:
#     print(b, "is the largest number")
# else:
#     print(c, "is the largest number")
    
# #Number Guessing Game
# import random
# print("welcome to the number guessing game!")
# print("guess a number between 1 and 10")

# secret = random.randint(1,10)
# attempts = 0

# while True:
#     guess = int(input("Enter your guess:"))
#     attempts += 1
    
#     if guess < secret_number:
#         print("Too low! Try again:")
#     elif guess > secret_number:
#         print("too high ! try again:")
#     else:
#         print("Congratulations! you guessed the number in", attempts, "attempts.")
#         break

# Blog
# from flask import Flask, render_template, request, redirect
# app = Flask(__name__)
# posts = []
# @app.route("/")
# def home():
#     return render_template("index.html", posts=posts)

# @app.route("/add", methods=["GET","POST"])
# def add_post():
#     if request.method == "POSt":
#         title = request.form["title"]
#         content = request.form["content"]
        
#         posts.append({
#             "title": title,
#             "content": content
#         })
        
#         return redirect("/")
#     return render_template("add_post.html")

# if __name__ == "__main__":
#     app.run(debug=True)]


# -----------------hospital managment system-----------------------
# import sqlite3

# #Connect Database
# conn = sqlite3.connect("hospital.db")
# cursor = conn.cursor()

# #Create Table
# cursor.execute("""
# CREATE TABLE IF NOT EXISTS patients(
# id INTEGER PRIMARY KEY AUTOINCREMENT,
# name TEXT,
# age INTEGER,
# gender TEXT,
# disease TEXT    
# )        
# """)
# conn.commit()

# def add_patient():
#     name = input("Enter Name: ")
#     age = int(input("Enter age: "))
#     gender = input("Enter Gender: ")
#     disease = input("Enter disease: ")
    
#     cursor.execute(
#         "INSERT INTO patients(name,age,gender,disease) VALUES(?,?,?,?)",
#         (name, age, gender, disease),
#     )
#     conn.commit()
#     print("Patient Added successfully!")
    
# def view_patients():
#     cursor.execute("SELECT * FROM patients")
#     data = cursor.fetchall()
    
#     print("\nID\tName\tGender\tDisease")
#     print("-" * 50)
    
#     for row in data:
#         print(row[0], row[1], row[2], row[3], row[4], sep="t")  
        
# def search_patient():
#     pid = input("Enter Patient ID: ")
#     cursor.execute("SELECT * FROM patients WHERE id=?", (pid))
#     row = cursor.fetchone
    
#     if row:
#         print(row)
#     else:
#         print("patient not found") 
        
# def delete_patient():
#     pid = input("Enter patient ID: ")
#     cursor.execute("DELETE FROM patinets WHERE id=?", (pid,))
#     conn.commit()
#     print("Patient Deleted")
    
# while True:
#     print("\n==== HOSPITAL MANAGEMENT SYSTEM ====") 
#     print("1. Add Patient")
#     print("2. View Patient")
#     print("3. Search Patient")
#     print("4. Delete Patient")
#     print("5. Exit")          
    
#     choice = input("Enter Choice: ")
    
#     if choice == "1":
#         add_patient()
#     elif choice  == "2":
#         view_patients()
        
#     elif choice == "3":
#         search_patient()
        
#     elif choice == "4":
#         delete_patient()
        
#     elif choice == "5":
#         print("Thank  you")
#         break
#     else:
#         print("Invalid Choice")
        
# conn.close() 

           
# -------------------------------Food Delivery----------------------------      

#database.py
# import sqlite3

# conn = sqlite3.connect("database.db")
# cursor = conn.cursor()
# cursor.execute("""
# CREATE TABLE IF NOT EXISTS menu(
# id INTEGER PRIMARY KEY AUTOINCREMENT,
# name TEXT,
# price INTEGER    
# )              
# """)

# cursor.execute("""
# CREATE TABLE IF NOT EXISTS orders(
# id INTEGER PRIMARY KEY AUTOINCREMENT,
# food TEXT,
# quantity INTEGER,
# total INTEGER    
# )               
# """)

# conn.commit()
# conn.close()
# print("Database Created Sucessfully")

# #menu.py
# import sqlite3

# def add_food(name, price):
#     conn = sqlite3.connect("distance.db")
#     cur = conn,cursor()
    
#     cur.execute("INSERT INTO menu(name,price) VALUES(?,?)",(name,price))
    
#     conn.commit()
#     conn.close()
    
# def show_menu():
#     conn = sqlite3.connect("database.db")
#     cur  = conn.cursor()
    
#     cur.execute("SELECT * FROM menu")
    
#     foods = cur.fetchall()
    
#     print("\n----- MENU -----")
    
#     for food in foods:
#         print(food)
    
#     conn.close()    
    
# # order.py
# import sqlite3
# def place_order(food, quantity):
            
#     conn = sqlite3.connect("database.db")
#     cur = conn.cursor()
    
#     cur.execute("SELECT price FROM menu WHERE name=?", (food,))
#     result = cur.fetchone()
    
#     if result:
        
#         price = result[0]
#         total = price *  quantity
        
#         cur.execute(
#             "INSERT INTO orders(food,quantity,total) VALUES(?,?,?)",
#             (food, quantity, total)
#         )
        
#         conn.commit()
        
#         print("Order Succesful")
#         print("Total Bill =", total)
        
#     else:
#         print("Food Not Available")
        
#     conn.close() 
    
# #app.py
# from menu import *
# from order import *

# while True:
#     print("\nFood Delivery App:")
#     print("1. Add Food")
#     print("2. Show Menu")
#     print("3. Place Order")
#     print("4. Exit")
    
#     choice = input("Enter Choice :")
    
#     if choice == "1":
#         name = input("Food Name :")
#         price = int(input("price :"))   
        
#         add_food(name, price)
#     elif choice == "2":
#         show_menu()
        
#     elif choice == "3":
#         food = input("Food Name : ")
#         quantity = int(input("Qunatity :"))
        
#         place_order(Food, quantity)
        
#     elif choice == "4":
#         print("Thankyou")
#         break
    
#     else:
#         print("Invalid Choice")

# def add(a, b):
#     return a + b

# def subtract(a, b):
#     return a - b

# def multiply(a, b):
#     return a * b

# def divide(a, b):
#     if b == 0:
#         return "Error! Division by zero is not allowed."
#     return a / b

# while True:
#     print("\n===== PYTHON CALCULATER ====")
#     print("1. Add(+)")
#     print("2. Sub")
#     print("3. Mutltipl")
#     print("4. Division")
    
#     choice = input("Enter your choice (1-5)")
    
#      if choice == "5":
#         print("Thank you for using the calculator!")
#         break

#     if choice in ["1", "2", "3", "4"]:
#         try:
#             num1 = float(input("Enter first number: "))
#             num2 = float(input("Enter second number: "))

#             if choice == "1":
#                 print("Result =", add(num1, num2))
#             elif choice == "2":
#                 print("Result =", subtract(num1, num2))
#             elif choice == "3":
#                 print("Result =", multiply(num1, num2))
#             elif choice == "4":
#                 print("Result =", divide(num1, num2))

#         except ValueError:
#             print("Invalid input! Please enter numbers only.")

#     else:
#         print("Invalid choice! Please select between 1 and 5.")             
    
# from PyPDF2 import PdfMerger
# import os

# def merge_pdfs(pdf_files, output_file):
#     merger = PdfMerger()
    
#     try:
#         for pdf in pdf_files:
#             if os.path.exists(pdf):
#                 merger.append(pdf)
#                 print(f"Added: {pdf}")
#             else:
#                 print(f"file not found: {pdf}")
                
#         merger.write(output_file)
#         merger.close()
        
#         print(f"\nPDFs merged succesfully!")
#         print(f"Saved as: {output_file}")   
        
#     except Exception as e:
#         print("Error:", e)
        
# if __name___ == "__main__":
#     pdf_list = [
#         "file1.pdf",
#         "file2.pdf"
#     ]
    
#     output_pdf = "merged.pdf"
#     merge_pdfs(pdf_list, output_pdf)           

#calculator

# num1 = float(input("Enter First :"));
# operator = input("Enter your choice(+,-,*,/):")
# num2 = float(input("Enter Senond :"));
# 2
# if operator == "+":
#     print("result =", (num1 + num2))
# elif operator == "-":
#     print("result =", (num1 - num2))          
# elif operator == "*":
#     print("result =", (num1 * num2))
# elif operator == "/":
#     if num2 != 0:
#         print("result =", (num1 / num2))   
# else:
#     print("invalid input :")

# import random

# print("welcome to number guess game!")
# print("guess a number between 1 and 10")

# secret = random.randint(1, 10)
# attempts = 0
 
# while True:
#     guess = int(input("Enter your guess: "))
#     attempts += 1
    
#     if guess < secret:
#         print("too low")
#     elif guess > secret:
#         print("too high")
#     else:
#         print(f"Congrautlation in {attempts} attempts.")
#         break    

# import sqlite3

# conn = sqlite3.connect("hospital.db")
# cursor = conn.cursor()

# cursor.execute("""
# CREATE TABLE IF NOT EXISTS patients(
# id INTEGER PRIMARY KEY AUTOINCREMENT,
# name TEXT,
# age INTEGER,
# gender TEXT,
# disease TEXT
# )               
# """)
# conn.commit()

# def add_patient():
#     name = input("Enter Name :")
#     age = int(input("Enter Age :"))
#     gender = input("Enter Gender :")
#     disease = input("Enter Disease :")
    
#     cursor.execute(
#         "INSERT INTO patients(name,age,gender,disease) VALUES(?,?,?,?)",
#         (name, age, gender, disease),
#     )
#     conn.commit()
#     print("Patient Added Successfully!")
    
# def view_patients():
#     cursor.execute("SELECT * FROM patients")
#     data = cursor.fetchall()
    
#     print("\nID\tName\tAge\tGender\tDisease")
#     print("-" * 50)
#     for row in data:
#         print(row[0],row[1],row[2],row[3],row[4], sep="\t")
        
# def search_patient():
#     pid = input("Enter Patient ID: ")
#     cursor.execute("SELECT * FROM patients WHERE id=?", (pid,))
#     row = cursor..fetchone()
    
#     if row:
#         print(row)
#     else:
#         print("Patient Not Found")
        
# def delete_patient():
#     pid = input("Enter Patient ID :")
#     cursor.execute("DELETE FROM patients WHERE id=?", (pid,))
#     conn.commit()
#     print("Patient Deleted")
    
# while True:
#     print("\n==== HOSPITAL MANAGMENT SYSTEM ====")
#     print("1. Add Patients")
#     print("2. View Patients")
#     print("3. Search Patients")
#     print("4. Delete Patients")
#     print("5. Exit")
    
#     choice = input("Enter Choice :")
    
#     if choice == "1":
#         add_patient()
#     elif choice == "2":
#         view_patients()  
#     elif choice == "3":
#         search_patient()
#     elif choice == "4":
#         delete_patient()
#     elif choice == "5":
#         print("Thank you")
#         break
#     else:
#         print("Invalid Choice")
# conn.close()

# # --------------NEW-------------------------------      

# # import random 
# # import string

# # length = int(input("Enter password length: "))
# # characters = string.ascii_letters + string.digits + string.punctuation

# # password = ""

# # for i in range(length):
# #     password += random.choice(characters)
    
# # print("Generated Password :")
# # print(password)

# # num = int(input("Enter a number:"))

# # fact = 1

# # for i in range(1, num + 1):
# #     fact *= i
    
# # print("factorial =", fact)

# num = int(input("Enter a number:"))

# if num < 0:
#     for i in range(2, num):
#         if num % i == 0:
#             print(num, "is not  a prime")
#             break
#     else:
#         print("Prime")
# else:
#     print("Not Prime")
    
# tasks = []

# while True:
#     print("\n==== TO-DO-LIST ====")
#     print("1. Add Task")
#     print("2. View Tasks")
#     print("3. Delete Task")
#     print("4. Exit")
    
#     choice = input("Enter choice :")
    
#     if choice == "1":
#         task = input("Enter Task :")
#         tasks.append(task)
#     elif choice == "2":
#         print("\nTASKS:")
#         for i, task in enumerate(tasks, start = 1):
#             print(i, task)
#     elif choice == "3":
#         print("Good bye!")
#         break
    
#     else:
#         print("Invalid Choice")
        
# balance = 10000

# while True:
#     print("\n===== BANKING SYSTEM ====")
#     print("1. Check Balance")
#     print("2. Deposit")
#     print("3. Withdraw")
#     print("4. Exit")   
    
#     choice = input("Enter Choice :")
    
#     if Choice == "1":
#         print("Current Balance =", balance)
        
#     elif choice == "2":
#         amount = float(input("Enter Amount: "))
#         balance += amount
#         print("Money Deposited!")
    
#     elif choice == "3":
#         amount = float(input("Enter Amount: "))
#         if amount <= balance:
#             balance -= amount
#             print("Please collect your cash")
#         else:
#             print("Insufficieent Balance")
            
#     elif choice == "4":
#         break 
    
               
# while True:
#     print("\n===== UNIT CONVERTER ====") 
#     print("1. KM to MIles")
#     print("2. Miles to KM")
#     print("3. Celsius to Fahrenheit")
#     print("4. Fahrenheit to Celsius")

# choice = input("Enter your choice (1-4):")

# if choice == "1":
#     km = float(input("Enter distance in kilometers:"))
#     print("miles =", km * 0.621371)
    
# elif choice == "2":
#     miles = float(input("Enter distance in miles:"))
#     print("KM =", miles * 1.60934)
    
# elif choice == "3":
#     c = float(input("Enter temperature in Celsius:"))
#     print("Fahrenheit =", (c * 9/5) + 32)
    
# elif choice == "4":
#     f = float(input("Enter temperature in Fahrenheit:"))
#     print("Celsius =", (f - 32) * 5/9)
      
# import socket
# import threading

# HOST = "127.0.0.1"
# PORT = 5000

# server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# server.bind((HOST, PORT))
# server.listen()

# clients = []
# names = []

# print("Server started...")
# print(f"Listening on {HOST}:{PORT}")

# def broadcast(message):
#     for client in clients:
#         client.send(message)
        
# def handle(client):
#     while True:
#         try:
#             message = client.recv(1024)
#             bradcast(message)
#         except:
#             if client in clients:
#                 index = clients.index(client)
#                 clients.remove(client)
#                 client.close()
#                 name = names.pop(index)
#                 broadcast(f"{name} left the caht!".encode())
#             break
        
# def receive():
#     while True:
#         clinet, address = server.accept()
        
#         print(f"Connected with {str(address)}")
        
#         client.send("NAME". encode())
#         print(f"Connected with {address}")

#         client.send("NAME".encode())
#         name = client.recv(1024).decode()

#         names.append(name)
#         clients.append(client)

#         print(f"{name} joined.")

#         broadcast(f"{name} joined the chat.".encode())

#         thread = threading.Thread(target=handle, args=(client,))
#         thread.start()


# receive()    

# text = "python"

# reversed_text = text[::-1]
# print(reversed_text)                         
  
# t = "python"
# rev_t = ""
# for char in t:
#     rev_t = char + rev_t
# print(rev_t)    

# t = "python"
# rev_t = "".join(reversed(t))
# print(rev_t)

# t = "python"
# i = len(text) - 1
# while i >= 0:
#     print(text[i], end="")
#     i -= 1

# def reverse_string(text):
#     return text[::-1]

# string = input("Enter a string")
# print("reversed string:", rev_str(str))

# def factorial(n):
#     if n == 1:
#         return 1
#     return n * factorial(n-1)
# print(factorial(5))

# def details(**kwargs):
#     print(kwargs)
    
# details(name="samarth", age=20)    

# def add(*args):
#     print(sum(args))
# add(1,2,3,4)    

# add = lambda a,b: a+b
# print(add(5,3))

# square = lambda x: x*x/
# print(square(50))

# def greet(name):
#     return "Hello " + name

# print(greet("Samarth"))

# nums = [1,2,3]
# print(2 in nums)

# class Student:
#     name = "Samarth"
# Student1 = Student()    

# class Student:
#     def __init__(self, name):
#         self.name = name
# s1 = Student("Samarth")

# class Animal:
#     def speak(self):
#         print("Animal speaks")
        
# class Dog(Animal):
#     pass        
               
# class Dog:
#     def sound(self):
#         print("Bark")
        
# class Cat:
#     def sound(self):
#         print("Meow")            
        
# class Student:
#     def __init__(self):
#         self.__marks = 90                   
     
# age = 15

# if age < 18:
#     raise ValueError("Age must be 18  or above")

# file = open("data.txt", "r")

# file = open("data.txt", "r")
# data = file.read()
# print(data)
# file.close()     

# file = open("data.txt", "w")
# file.write("Hello Python")
# file.close()

# with open("data.txt", "r") as file:
#     data = file.read()
#     print(data)
         
# import math
# print(math.sqrt(25))

# s = "python"
# reverse = s[::-1]
# print(reverse)

# s = "madam"
# if s == s[::-1]:
#     print("palindrome")
# else:
#     print("No Palindrome")
       
# numbers = [10,25,7,40,15]

# largest = numbers[0]       

# for num in numbers:
#     if num > largest:
#         largets = num
# print(largest)      
# print(max(numbers))  
                 
# a = 0
# b = 1

# for i in range(10):
#     print(a, end=" ")
#     a, b = b, a+b              

# n = 17
# if num < 2:
#     print("Not Prime")  
# else:
#     for i in range(2, n):
#         if n % i == 0:
#             print("Not Prime")
#             break 
#     else:
#         print("prime")            

# n = 5
# factorial = 1

# for i  in range(1, n + 1):
#     factorial *= i
# print(factorial)                 

# a = 10
# b = 20

# a,b = b,a 
# print(a)
# print(b)

# sentence = "Python is Easy to learn"
# words = sentence.split()
# print(len(words))

# list1 = [1, 2, 3]
# list2 = [4, 5, 6]
# result = list1 + list2
# print(result)

# numbers = [5, 2, 8, 1, 3]
# numbers.sort()
# print(numbers)

# numbers = [5, 2, 8, 1, 3]
# numbers.sort(reverse=True)
# print(numbers)

# s = "hello"
# frequency = {}
# for char in s:
#     frequency[char] = frequency.get(char, 0) + 1
# print(frequency)

# numbers = [10, 25, 7, 40, 15]
# numbers = list(set(numbers))
# numbers.sort()
# print(numbers[-2])    

# num = [10, 25, 7, 40, 15]
# largest = second = float("-inf")

# for num in num:
#     if num > largest:
#         second = largest
#         largest = num
#     elif num > second and num != largest:
#         second = num
        
# print(second)        

# num = [1, 2, 2, 3, 4, 4, 5]
# unique = list(set(num))
# print(unique)

# num = [1, 2, 2, 3, 4, 4,5]
# unique = []
# for num in num:
#     if num not in unique:
#         unique.append(num)
# print(unique)        

# s = "hello python"
# count = 0
# for char in s.lower():
#     if char in  "aeiou":
#         count += 1
# print(count)        

# n = 5
# factorial = 1
# for i in range(1, n + 1):
#     factorial *= i
# print(factorial)    

# a = 0 
# b = 1
# for i in range(10):
#     print(a, end=" ")
#     a, b = b, a+b
    
# num = [10, 25, 7, 40, 15]
# largest = num[0]
# for num in num:
#     if num > largest:
#         largest = num
# print(largest)            

# numbers = []
# for i in range(5):
#     numbers.append(i)
# print(numbers)    


# numbers = [i for i in range(5)]
# print(numbers)

# def numbers():
#     for i in range(5):
#         yield i
# for n in numbers():
#     print(n)        
    
# numbers = [10, 20, 30]
# it = iter(numbers)
# print(next(it))
# print(next(it))
# print(next(it))    

# def decorator(func):
#     def wrapper():
#         print("Before function")
#         func()
#         print("After function")
#     return wrapper
# @decorator
# def hello():
#     print("Hello")
# hello()

# numbers = [1, 2, 3, 4]
# result = list(map(lambda x: x * 2, numbers))
# print(result)        

# numbers = [1, 2, 3, 4, 5, 6]
# result = list(filter(lambda x : x % 2 == 0, numbers))
# print(result)

# deep = copy.deepcopy(original)
# deep[0][0] = 500
# print(original)
# print(deep)

# shallow = copy.copy(original)
# shallow[0][0] = 100

# from functools import reduce
# numbers = [1, 2, 3, 4]
# result = reduc(lambda x, y: x + y, numbers)
# print(result)

s = "python"
print(s[::-1])

s = "madam"
print(s == s[::-1])

a, b = 0, 1
for i in range(10):
    print(a, end=" ")
    a, b = b, a + b
    
n = 3
for i in range(2, n):
    if n % i == 0:
        print("Not Prime")
        break
else:
    print("prime")    

x = [1, 2, 3]
x = None        

 