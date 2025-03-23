from collections import defaultdict

students = {
    "Alice": 'A',
    "Bob": 'B',
    "Charlie": 'A',
    "Diana": 'C',
    "Eve": 'B'
}

# Initialize the gradeGroups dictionary with default values as empty lists
gradeGroups = defaultdict(list)

# Populate the gradeGroups dictionary
for student, grade in students.items():
    gradeGroups[grade].append(student)

# Print the gradeGroups
for grade, group in gradeGroups.items():
    print(f"{grade}: ", end="")
    for student in group:
        print(f"{student}, ", end="")
    print()
