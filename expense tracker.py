import os

FILE_NAME = "expenses.txt"

if not os.path.exists(FILE_NAME):
    open(FILE_NAME, "w").close()

def add_exepense():
    category = input("Enter Category (Food, Travel, shooping): ")
    amount = float(input("Enter Amount: "))
    date = input("Enter Date (DD-MM-YYYY): ")

    with open(FILE_NAME, "a") as file:
        file.write(f"{category},{amount},{date}\n")

    print("Expense Added Successfully!\n")

def view_expenses():
    print("\n--- Expense List ---")

    with open(FILE_NAME, "r") as file:
        data = file.readlines()

    if not data:
        print("No Expenses Found.\n")
        return

    total = 0

    for i, line in enumerate(data,start=1):
        category, amount, date = line.strip().split(",")
        total += float(amount)
        print(f"{i}. {category} | ${amount} | {date}")

    print("-----------------------")
    print(f"Total Expense = ${total}\n")

def search_category():
    search = input("Enter Category: ").lower()

    Found = False

    with open(FILE_NAME, "r") as file:
        for line in file:
            category,amount,date = line.strip().split(",")

            if category.lower() == search:
                print(f"{category} | ${amount} | {date}")
                Found = True

            if not Found:
                print("No Record Found.\n")

def delete_expense():
    with open(FILE_NAME, "r") as file:
        data = file.readlines()

    if not data:
        print("No Expenses Available.\n")
        return

    view_expenses()

    num = int(input("Enter Expense Number to Delete: "))

    if 1 <= num <= len(data):
        del data[num - 1]

        with open(FILE_NAME, "w") as file:
            file.writelines(data)

        print("Expense Deleted Successfully!\n")
    else:
        print("Invalid Number.\n")

while True:
    print("===== EXPENSE TRACKER =====")
    print("1. Add Expense")
    print("2 View Expenses")
    print("3 Search by category")
    print("4. Delete Expense")
    print("5. Exit")

    choice = input("Enter Choice: ")

    if choice == "1":
        add_exepense()
    elif choice == "2":
        view_expenses()
    elif choice == "3":
        search_category()
    elif choice == "4":
        delete_expense()
    elif choice == "5":
        print("Thank You!")
        break
    else:
        print("Invalid Choice!\n")             





