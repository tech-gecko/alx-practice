interface DirectorInterface {
  workFromHome() : string;
  getCoffeeBreak() : string;
  workDirectorTasks() : string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have a break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if ((typeof(salary) === "number") && (salary < 500)) {
    return new Teacher;
  }

  return new Director;
}
console.log(createEmployee("$500"));

function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director; 
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log((employee as Director).workDirectorTasks());
  } else {
    console.log((employee as Teacher).workTeacherTasks());
  }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): void {
  if (todayClass === "Math") {
    console.log("Teaching Math");
  } else {
    console.log("Teaching History");
  }
}

teachClass("Math");
teachClass("History");
