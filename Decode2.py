# ==========================================
# Project 2: Data Classification Using AI
# Internship: Artificial Intelligence
# Organization: DecodeLabs
# Author: Samarth Bhardwaj
# ==========================================

# Import Libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, classification_report

# Step 1: Load Dataset
iris = load_iris()
X = iris.data
y = iris.target

print("Dataset Loaded Successfully!")
print("Total Samples:", len(X))

# Step 2: Split Dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42
)

print("Training Samples:", len(X_train))
print("Testing Samples:", len(X_test))

# Step 3: Create AI Model
model = DecisionTreeClassifier()

# Step 4: Train Model
model.fit(X_train, y_train)

# Step 5: Make Predictions
predictions = model.predict(X_test)

# Step 6: Calculate Accuracy
accuracy = accuracy_score(y_test, predictions)

print("\nModel Accuracy:", round(accuracy * 100, 2), "%")

# Step 7: Classification Report
print("\nClassification Report:")
print(classification_report(y_test, predictions))

# Step 8: Test Custom Data
sample = [[5.1, 3.5, 1.4, 0.2]]
prediction = model.predict(sample)

print("\nPrediction for Sample Flower:")
print("Predicted Class:", iris.target_names[prediction][0])