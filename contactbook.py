contacts = {}

while True:
    print("\n==== CONTACT BOOK ====")
    print("1. Add Contact:")
    print("2. View Contact:")
    print("3 Search Contact:")
    print("4 Delete Contact:")
    print("5 Exit:")
    
    choice = input("Enter Choice: ")
    
    if choice ==  "1":
        name = input("Name: ")
        phone = input("Phone: ")
        contacts[name] = phone
        
    elif choice == "2":
        for name, phone in contacts.items():
            print(name, ":", phone)
            
    elif choice == "3":
        name = input("search Name: ")
        if name in contacts:
            print("phone", contacts[name])
        else:
            print("not found")
            
    elif choice == "4":
        name = input("Delete Name: ")
        if name in contacts:
            del contacts[name]
            print("Deleted!")        
            
    elif choice == "5":
        break                          