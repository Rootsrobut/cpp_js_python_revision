
const students = {
    "Alice": 'A',
    "Bob": 'B',
    "Charlie": 'A',
    "Diana": 'C',
    "Eve": 'B'
};

// Create an object to hold arrays of students grouped by their grades
const gradeGroups = {};

// Populate the gradeGroups object
for (const [student, grade] of Object.entries(students)) {
    if (!gradeGroups[grade]) {
        gradeGroups[grade] = [];
    }
    gradeGroups[grade].push(student);
}

// Print the grouped students by their grades
for (const [grade, group] of Object.entries(gradeGroups)) {
    process.stdout.write(`${grade}: `);
    for (const student of group) {
        process.stdout.write(`${student}, `);
    }
    console.log();
}
