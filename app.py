# import pandas as pd
# read
# df = pd.read_csv("data.csv", encoding="latin1")
# df = pd.read_excel("data.xlsx")
# df = pd.read_json("data.json")

# df.to_json("data.json", index=False)

# data = {
#     "Name": ['Ram', 'Shyam', 'Hari'],
#     "Age": [15, 20, 25],
#     "City": ['Kathmandu', 'Bhaktapur', 'Lalitpur']
# }
# df = pd.DataFrame(data)
# print(df)

# df.to_csv("output.csv", index=False)
# df.to_excel("output.xlsx", index=False)
# df.to_json("output.json", index=False)

# Row
# print('Display 10 rows of first')
# print(df.head(10))

# print('Display 10 rows of last')
# print(df.tail())

# import pandas as pd

# data = {
#     "Name": ['Ram', 'Shyam', 'Hari'],
#     "Age": [15, 20, 25],
#     "City": ['Kathmandu', 'Bhaktapur', 'Lalitpur']
# }
# df = pd.DataFrame(data)

# print('Display the info of the data set')
# print(df.info())

# import pandas as pd 
# data = {
    # "Name": ['Ram', 'Shyam', 'Hari'],
    # "Age": [15, 20, 25],
    # "City": ['Kathmandu', 'Bhaktapur', 'Lalitpur']
# }
# df = pd.DataFrame(data)
# print(f'Shape: {df.shape}')
# print(f'Columns: {df.columns}')

# import pandas as pd

# data = {
#     "Name": ['Ram', 'Shyam', 'Hari'],
#     "Age": [15, 20, 25],
#     "Salary": [50000, 60000, 70000],
#     "Performance": [85, 90, 95]
# }
# df = pd.DataFrame(data)
# print(df)
# print(f'Shape: {df.shape}')
# print(f'Column Names:{df.columns}') 

import pandas as pd 

data = {
     "Name": ['Ram', 'Shyam', 'Hari'],
     "Age": [15, 20, 25],
     "Salary": [50000, 60000, 70000],
     "Performance": [85, 90, 95]
} 
df = pd.DataFrame(data)
print("DataFrame")
print(df)
print("Names (Single column return)")