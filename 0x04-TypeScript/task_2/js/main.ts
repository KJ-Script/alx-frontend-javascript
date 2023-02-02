interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

const createEmployee = (salary: any): Teacher | Director => {
  return typeof salary === 'number' && salary < 500
    ? new Teacher()
    : new Director();
};

console.log(createEmployee(200)); // Teacher;

console.log(createEmployee(1000)); // Director

console.log(createEmployee('$500')); // Director

const isDirector = (employee: any): boolean => {
  return employee.constructor.name === 'Director' ? true : false;
};
const executeWork = (employee: any): string => {
  console.log(employee);
  return employee.constructor.name === 'Director'
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
};

console.log(executeWork(createEmployee(200)));
// Getting to work
console.log(executeWork(createEmployee(1000)));
// Getting to director tasks

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects) =>
  todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';

console.log(teachClass('Math'));
// Teaching Math
console.log(teachClass('History'));
// Teaching History
