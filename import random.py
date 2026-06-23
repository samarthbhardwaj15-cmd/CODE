import random
import string

length = int(input("Enter paassword length (minimum 4): "))

if length < 4:
    print("password length must be at least 4")
else:
    password = [
        random.choice(string.ascii_uppercase),
        random.choice(string.ascii_lowercase),
        random.choice(string.digits),
        random.choice(string.punctuation)
    ]    

    characters = string.ascii_letters + string.digits + string.punctuation

    password += [random.choice(characters) for _ in range(length - 4)]

    random.shuffle(password)

    print("Strong Password:", "".join(password))
    