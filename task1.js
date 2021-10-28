/* Task 1 
Implement the Student class, the constructor of which accepts 2 parameters fullName - the name and surname of the student, direction - the direction in which he studies.
Create a showFullName() method that returns the student's first and last name.
Create a nameIncludes(data) method that, using the showFullName() method, checks for the text data argument in the student’s name and returns true if a match is found or false if not found.
Create a static studentBuilder() method that returns a new instance of the class named ‘Ihor Kohut’ and the direction ‘qc’.
Create a getter and setter direction() to read and specify the direction field.
Create an instance of class stud1 named 'Ivan Petrenko' and direction 'web'.
Create an instance of class stud2 named 'Sergiy Koval' and direction 'python'.
Create an instance of the stud3 class named ‘Ihor Kohut’ and the direction ‘qc’ using the static studentBuilder() method. */

class Student {
  constructor(fullName, direction) {
    this.fullName = fullName
    this._direction = direction
  }

  showFullName() {
    return this.fullName
  }
  nameIncludes(data) {
    return this.showFullName().includes(data)
  }
  static studentBuilder() {
    return new Student('Ihor Kohut', 'qc')
  }
  get direction() {
    return this._direction
  }
  set direction(value) {
    if (value.length < 1) {
      alert('The length of direction has to be at least 1')
      return
    }
    this._direction
  }
}

console.log('task 1')

const stud1 = new Student('Ivan Petrenko', 'web')
const stud2 = new Student('Sergiy Koval', 'python')
const stud3 = Student.studentBuilder()

// Usage example:

console.log(stud1)
console.log(stud2)
console.log(stud3)
console.log(stud1.nameIncludes('Ivan')) // true
console.log(stud1.nameIncludes('Denysenko')) // false
