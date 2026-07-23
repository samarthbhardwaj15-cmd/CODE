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

num1 = float(input("Enter First :"));
operator = input("Enter your choice(+,-,*,/):")
num2 = float(input("Enter Senond :"));
2
if operator == "+":
    print("result =", (num1 + num2))
elif operator == "-":
    print("result =", (num1 - num2))          
elif operator == "*":
    print("result =", (num1 * num2))
elif operator == "/":
    if num2 != 0:
        print("result =", (num1 / num2))   
else:
    print("invalid input :")

import random

print("welcome to number guess game!")
print("guess a number between 1 and 10")

secret = random.randint(1, 10)
attempts = 0
 
while True:
    guess = int(input("Enter your guess: "))
    attempts += 1
    
    if guess < secret:
        print("too low")
    elif guess > secret:
        print("too high")
    else:
        print(f"Congrautlation in {attempts} attempts.")
        break    

import sqlite3

conn = sqlite3.connect("hospital.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS patients(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
age INTEGER,
gender TEXT,
disease TEXT
)               
""")
conn.commit()
