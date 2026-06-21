print("AI Chatbot Started!")
print("Type 'Exit' top quit.\n")

while True:
    user = input("you: ").lower()
    
    if user in ["hi", "hello", "hey"]:
        print("Bot: Hello Welecome to DecodeLabs AI Chatbot.")
        
    elif user == "how are you":
        print("Bot: I am doing great. Thanks for Asking! ")
    
    elif user == "What is ai":
        print("Bot: AI stands for Artifical Intelligence.")
        
    elif user == "your name":
        print("Bot: I am a Rule-Based AI Chatbot.")
        
    elif user in["bye", "exit", "quit"]:
        print("Bot: Goodbye! Have a nice day.")
        break
    else:
        print("Bot: Sorry, I don't undwrstand that.")            
             
    