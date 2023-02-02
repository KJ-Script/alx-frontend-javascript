export default function getStudentIdsSum(arr) {
  return arr.reduce((prev, cur) => prev + cur.id, 0);
}
