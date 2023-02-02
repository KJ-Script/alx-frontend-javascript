export default function updateStudentGradeByCity(
  studentList,
  city,
  newGrades,
) {
  const cityStudents = studentList.filter(
    (student) => student.location === city,
  );
  // return cityStudents.map((student) => return {...student,
  // newGrades.filter((grade) => grade.studentId === student.id)));
  const studentsWithGrade = cityStudents.map((student) => ({
    ...student,
    grade: newGrades.filter((grade) => grade.studentId === student.id)[0],
  }));

  return studentsWithGrade.map((student) => {
    if (student.grade === undefined) {
      return { ...student, grade: 'N/A' };
    }
    return { ...student, grade: student.grade.grade };
  });
}
