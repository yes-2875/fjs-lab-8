// Part 1: Understanding and Creating Objects
// Create Student object using constructor method
function Student(name, age, enrolled, courses) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.courses = courses;
    
    this.displayInfo = function() {
        return `Student Name: ${this.name}\nAge: ${this.age} years old\nIs enrolled: ${this.enrolled}\nCourses: ${this.courses}`;
    }
}

// Create an instance of Student object from its constructor
const student = new Student(
    "Mirza",
    18,
    true,
    ["CPAN 111", "CPAN 116", "CPAN 133", "CPAN 113", "CPAN 134", "WRIT 120"]
);

// Output student properties and methods to the console
console.log("student.name: " + student.name);
console.log("student.age: " + student.age);
console.log(student.displayInfo());

// Part 2: Working with JSON
// Convert student into a JSON string using JSON.stringify();
const stringified = JSON.stringify(student);
// Output the JSON of student
console.log("Stringified student: " + stringified);

// Convert student back into an object using JSON.parse();
const newStudent = JSON.parse(stringified);

// Output the parsed JSON and original student object for comparison
console.log("Both student objects (original and parsed):");
console.log(student);
console.log(newStudent);