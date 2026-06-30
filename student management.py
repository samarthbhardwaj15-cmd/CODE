students = {}

while True:
    print("\n---Student managment System---")
    print("1.Add student")
    print("2.View Students")
    print("3.Search Student")
    print("4.Update Student")
    print("5.delete Student")
    print("6.Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        Roll = input("Enter Roll No:")
        Name = input("Enter Name")
        Marks = input("Enter Marks:")

        students[Roll] = {
            "Name": Name,
            "Marks": Marks 
        }

        print("Student Added Succesfully!")

    elif choice == "2":
        if not students:
            print("No Students Found!")

        else:
            print("\nStudent Records:")
            for roll, data in students.items():
                print(f"Roll No: {Roll}")
                print(f"Name: {data['Name']}")
                print(f"Marks: {data['Marks']}")
                print("-" * 20)

    elif choice == "3":
        roll = input("Enter Roll No:")
        if roll in students:
            print(students[roll])
        else:
            print("Student Not Found!") 

    elif choice == "4":
        roll = input("Enter Roll Number: ")
        if roll in students:
            name = input("Enter New Name: ")
            marks = input("Enter New Marks: ")

            students[roll]["Name"] = name
            students[roll]["marks"] = marks

            print("record Update!")
        else:
            print("Student Not Found!")

    elif choice == "5":
        roll = input("Enter Roll Number: ")
        if roll in students:
            del students[roll]
            print("record delete!")
        else:
            print("Student Not found!")

    elif choice == "6":
        print("Thank You!")

    else:
        print("Invalid Choice!1 ")                            


