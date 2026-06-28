print("Hello World!")
#calculater
num1 = float(input("Enter first number:"))
op =  input("Enter operator"(+,-,*,/):")
num2 = float(input("Enter second number:"))

if op == "+":
    print(num1 + num2)
elif op == "-":
     print(mum1 - num2)
elif op == "*":
   print(num1)* num2)
elif op == "/":
   if num2 != 0:
       print("Answer =", num1 / num2)
   else:
       print("coannot divide by zero")
else:
    print("Invalid operater")       
