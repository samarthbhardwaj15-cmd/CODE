# ==========================================
# Project 3: AI Recommendation System
# Internship: Artificial Intelligence
# Organization: DecodeLabs
# Author: Samarth Bhardwaj
# ==========================================

# Recommendation Data
recommendations = {
    "python": [
        "Python Crash Course",
        "Automate the Boring Stuff",
        "Python for Everybody"
    ],

    "ai": [
        "Machine Learning with Python",
        "Deep Learning Basics",
        "Artificial Intelligence: A Modern Approach"
    ],

    "web development": [
        "HTML & CSS",
        "JavaScript Guide",
        "React.js"
    ],

    "data science": [
        "Pandas",
        "NumPy",
        "Data Visualization with Matplotlib"
    ],

    "cyber security": [
        "Ethical Hacking",
        "Network Security",
        "Kali Linux Basics"
    ]
}

print("=" * 50)
print("        AI RECOMMENDATION SYSTEM")
print("=" * 50)

print("\nAvailable Interests:")
for topic in recommendations:
    print("-", topic.title())

choice = input("\nEnter your interest: ").lower().strip()

if choice in recommendations:
    print("\nRecommended Resources:\n")

    for item in recommendations[choice]:
        print("✔", item)

else:
    print("\nSorry! No recommendations available.")