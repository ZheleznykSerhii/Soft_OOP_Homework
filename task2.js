/*Create a Person class that has a constructor that takes name and surname parameters and contains a showFullName() method that displays the person's first and last names.
From the Person class, the Student class is inherited, the constructor of which, in addition to name and surname, takes the parameter year (the year of entering the university).
In the Student class, you need to override the showFullName(midleName) method to display not only the first and last name, but also the middle name (midleName) of the student.
Also, in the Student class, you need to implement the showCourse() method, which will display the student's current course (from 1 to 6). The value of the course will be determined as the difference between the current year (to determine independently) and the year of admission to the university year.

*/

class Person {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }

  showFullName() {
    return ` ${this.surname} ${this.name}`
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname)
    this.year = year
  }

  showFullName(midleName) {
    return `${super.showFullName()} ${midleName}`
  }
  showCourse() {
    let yearsFromAdmission = new Date().getFullYear() - this.year
    return yearsFromAdmission <= 6 && yearsFromAdmission >= 1
      ? yearsFromAdmission
      : alert(
          `the current course has to be from 1 to 6. The entered year of admission to the university is "${this.year}" and according to this "the current course is ${yearsFromAdmission}" please check 3rd parameter`
        )
  }
}

// Result example:

const stud1 = new Student('Petro', 'Petrenko', 2017)
console.log(stud1.showFullName('Petrovych')) // Petrenko Petro Petrovych
console.log('Current course: ' + stud1.showCourse()) //Current course: 4
