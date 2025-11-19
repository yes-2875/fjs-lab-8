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
console.log("They're not the same anymore because student was created from the Student constructor.");


// Part 3: Using Destructuring Assignment
// Use destructuring to extract name and courses from student object.
const {name, courses} = student;

// Create an array of scores, then destructure the first two scores from it.
const scores = [29, 63, 91, 95, 82, 67];
const [first, second] = scores;
console.log("first two scores: " + first + ", " + second);

// Part 4: The Spread Operator
// Use spread operator (...) to clone student object
// Add new property in the cloned student object and output that to console
let clonedStudent = {...student, graduationYear: 2028};
console.log("clonedStudent.graduationYear: " + clonedStudent.graduationYear);

// Merge student.courses with another array of courses using spread operator
const newCourses = ["CPAN 112", "CPAN 121", "CPAN 131", "CPAN 144", "GNED 101", "WRIT 220"];
student.courses = [...student.courses, ...newCourses];

// Print out student.courses again
console.log("merged student.courses: " + student.courses);