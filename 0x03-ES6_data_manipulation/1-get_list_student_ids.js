export default function getListStudentIds(arr = []) {
  return arr && arr.constructor.name === 'Array'
    ? arr.map((item) => item.id)
    : [];
}
