interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Abebe',
  lastName: 'Bekila',
  age: 37,
  location: 'Addis Ababa',
};

const student2: Student = {
  firstName: 'Desaleng',
  lastName: 'Aregawi',
  age: 22,
  location: 'Darfur',
};

const studentList = Array<Student>();
studentList.push(student1, student2);

studentList.forEach((student) =>
  console.log(`${student.firstName} - ${student.location}`)
);
