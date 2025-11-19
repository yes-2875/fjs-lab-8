// Part 1: Understanding and Creating Objects
function Student(name, age, enrolled, courses) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.courses = courses;
    
    this.displayInfo = function() {
        return `Student Name: ${this.name}\nAge: ${this.age} years old\nIs enrolled: ${this.enrolled}\nCourses: ${this.courses}`;
    }
}

const student = new Student(
    "Mirza",
    18,
    true,
    ["CPAN 111", "CPAN 116", "CPAN 133", "CPAN 113", "CPAN 134", "WRIT 120"]
);

console.log("student.name: " + student.name);
console.log("student.age: " + student.age);
console.log(student.displayInfo());