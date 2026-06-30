# ==============================================
#project 1: Rule-Based AI Chatbot
#Internship: Artifical Intelligence
# ==============================================

print("AI Chatbot Startted!")
print("Type 'exit' to quit.\n")

while True:
    user = input("You: ").lower()
    
    if user in ["hi", "hello", "hey"]:
        print("Bot: Hello! Welcome to  Decode Labs AI Chatbot.")
        
    elif user == "how are you":
        print("Bot: I'm doing well, thank for asking!")
        
    elif user == "what is ai":
        print("Bot: AI stands for Artificial Intelligence.")
        
    elif user == "your name":
        print("Bot: I am a Rule-Based AI Chatbot.")    
    
    elif user in ["bye", "exit", "quit"]:
        print("Bot: Goodbye! Have a nice day!")
        break
    
    else:
        print("bot: sorry, I didn't understand that.")
