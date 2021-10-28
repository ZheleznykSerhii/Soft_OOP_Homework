/* Create a Worker class that will have a constructor that accepts the following properties: fullName (first and last name), dayRate (rate per day of work), workingDays (number of days worked).
1) the class must have a showSalary() method that will display the employee's salary. Salary is the product of the dayRate by the number of days worked workingDays.
2) add a private experience field and assign it a value of 1.2 and use it as an additional multiplier when determining the salary - create the showSalaryWithExperience() method. Print the salary value with this coefficient.
3) add getters and setters for the experience field. Set experience = 1.5 and display it.
4) Derive salary value with new experience.
5) Create multiple instances of the class (workers) with different salaries as shown in the example below. Sort the salaries of the most experienced workers by growth and display the result in the format: worker_fullName: salary_value */

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName
    this.dayRate = dayRate
    this.workingDays = workingDays
  }

  showSalary() {
    return ` ${this.fullName} salary: ${this.dayRate * this.workingDays}`
  }
  #showExp = 1.2
  showSalaryWithExperience() {
    return ` ${this.fullName} salary: ${
      this.dayRate * this.workingDays * this.#showExp
    }`
  }
  get showExp() {
    return this.#showExp
  }
  set setExp(value) {
    this.#showExp = value
  }
  // for last task, the same as showSalaryWithExperience, but without any text
  onlyTheSalary() {
    return `${this.dayRate * this.workingDays * this.#showExp}`
  }
}

// Example usage:
const worker1 = new Worker('John Johnson', 20, 23)
console.log(worker1.fullName)
console.log(worker1.showSalary())
console.log('New experience: ' + worker1.showExp)
console.log(worker1.showSalaryWithExperience())
worker1.setExp = 1.5
console.log('New experience: ' + worker1.showExp)
console.log(worker1.showSalaryWithExperience())

const worker2 = new Worker('Tom Tomson', 48, 22)
// added setExp for last task
worker2.setExp = 1.5

//. . . . . .
const worker3 = new Worker('Andy Ander', 29, 23)
worker3.setExp = 1.5

//. . . . . .

let arr = [
  { worker: worker1.fullName, salary: Number(worker1.onlyTheSalary()) },
  { worker: worker2.fullName, salary: Number(worker2.onlyTheSalary()) },
  { worker: worker3.fullName, salary: Number(worker3.onlyTheSalary()) },
]

arr.sort(function (a, b) {
  if (a.salary > b.salary) {
    return 1
  }
  if (a.salary < b.salary) {
    return -1
  }
  return 0
})

console.log('Sorted array')
console.log(arr.map((o) => Object.values(o).join(': ')).join(', '))

console.log('or')

console.log(Object.values(arr[0]).join(': '))
console.log(Object.values(arr[1]).join(': '))
console.log(Object.values(arr[2]).join(': '))

// Output example:

/*
John Johnson
John Johnson salary: 460
New experience: 1.2
John Johnson salary: 552
New experience: 1.5
John Johnson salary: 690

Tom Tomson
Tom Tomson salary: 1056
. . . . . .

Andy Ander
Andy Ander salary: 667
. . . . . .

Sorted salary:
John Johnson: 690
Andy Ander: 1000.5
Tom Tomson: 1584
*/
