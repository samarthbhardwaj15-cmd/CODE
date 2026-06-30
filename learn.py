library = []

while True:
    print("\n==== Library Managment System =====")
    print("1. Add book")
    print("2. view book")
    print("3. Search book")
    print("4. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        book = input("Enter book name:")
        library.append(book)
        print("book added successfully!")

    elif choice == "2":
        if len(library) == 0:
            print("No books available")
        else:
            print("\nbooks in library:")
            for i, book in enumerate(library,start=1):
                print(f"{i}.{book}")

    elif choice == "3":
        search = input("Enter book name to search:")
        if search in library:
            print("book found!")
        else:
            print("book not found.")