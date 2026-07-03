# =============================================
#Project 3: AI Recommendition System 
# Internship: Artifical Intelligence
#organisation: DecodeLabs
#Author: Samarth Bhardwaj
#=============================================

#Recommendation Data
recommendation = {
    "python": [
        "Python Crash Course"
        "Auto the Boring Stuff",
        "Python for Everyday"
    ],
    
    "ai": [
        "Machihne Learning with Python",
        "Deep Learning Basics",
        "Artifical Intelligence: A Modern Approach"
    ],
    
    "web development": [
        "Html & CSS",
        "JavaScript Guide",
        "React.js"
    ],
    "data science": [
        "Pandas",
        "Numpy",
        "Data Visualization with Matplotlib"
    ],
    "cyber security":[
        "Ethical Hacking",
        "Network Security",
        "Kali Linux Basics"
    ]
}

print("=" * 50)
print(" AI RECOMMENDATION SYSTEM")
print("=" * 50)

print("\nAvailable interests:")
for topic in recommendation:
    print("-", topic.title())
    
choice = input("\nEnter your interest: ").lower().strip()

if choice in recommendation:
    print("\nRecommended resources:\n")
    
    for item in recommendation[choice]:
        print("~", item)
        
else:
    print("\nSorry! No recommendations available")            

