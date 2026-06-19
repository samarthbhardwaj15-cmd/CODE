tasks = []
while True:
    print("\n=== TO-DO-LIST===")
    print("1. Add Task")
    print("2. View Tasks")
    print("3. Remove Task")
    print("4. Exit")
    
    choice = input("Enter your choice (1-4):")
    
    if choice == "1":
        task = input("Enter a new task: ")
        tasks.append(task)
        print("task added successfully!")
        
    elif choice == "2":
        if not tasks:
            print("No Tasks available.")
        else:
            print("\nYour Tasks:")
            for i, task in enumerate(tasks,start=1):
                print(f"{i}. {task}")
                
    elif choice == "3":
        if not tasks:1
            print("No Tasks to remove.")
        else:
            for i, task in enumerate(tasks, start=1):
                print(f"{i}. {task}")
            
            try:
                task_num = int(input("Enter task nuumber to remove:"))
                removed_task = tasks.pop(task_num - 1)
                print(f"Removed: {removed_task}")
            except (ValueError, IndexError):
                print("Invalid task number!")
                
    elif choice == "4":
        print("Thank you for using To-Do List  App!")
        break
    
    else:
        print("Invalid choice, please try again")                      
                                    
                
        