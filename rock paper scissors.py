import random

choices = ["rock", "paper", "scissors"]

print("Rock Paper Scissors Game")

while True:
    user = input("Choose Rock, Paper or Scissor: ").lower()
    computer = random.choice(choices)
    
    print("Computer choose:", computer)
    
    if user == computer:
        print("It,s a tie!")
    elif (user == "rock" and computer == "scissors") or \
         (user == "paper" and computer == "rock") or \
         (user == "scissors" and computer == "paper"):
         print("you win!")
    else:
        print("computer Wins!")
        
    again = input("play Again? (yes/no): ").lower()
    if again != "yes":
        break                     
    