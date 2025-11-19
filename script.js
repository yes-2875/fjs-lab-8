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