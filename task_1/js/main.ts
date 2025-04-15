class Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  // Index signature allows for additional string properties of any type.
  [key: string]: any;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.yearsOfExperience = yearsOfExperience;
  }
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false
};
console.log(teacher3);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher("John", "Doe"));

interface StudentInterface {
  firstName: string;
  lastName: string;

  workOnHomework(): string;
  displayName(): string;
}

interface ConstructorArgs {
  firstName: string;
  lastName: string;
}

class Student implements StudentInterface{
  firstName;
  lastName;

  constructor (data: ConstructorArgs) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }

  workOnHomework() {
    return "Currently working...";
  }

  displayName() {
    return this.firstName;
  }
}

const student1: Student = new Student({ firstName: "Thanos!", lastName: "Rings" });
console.log(student1.workOnHomework());
console.log(student1.displayName());
