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
#         title = request.from["title"]
#         content = request.from["content"]
        
#         posts.append({
#             "title": title,
#             "content": content
#         })
        
#         return redirect("/")
#     return render_template("add_post.html")

# if __name__ == "__main__":
#     app.run(debug=True)