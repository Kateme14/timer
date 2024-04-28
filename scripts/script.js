'use strict'
// С ниже приведенным объектом решить следующие задачи:
// 1. Создать строку из названий предметов написанных через запятую
// 2. Подсчитать общее количество студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех предметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на
// факультете от большего к меньшему
// ```javascript
// const subjects = {
// mathematics: {
// students: 200,
// teachers: 6
// },
// biology: {
// students: 120,
// teachers: 6
// },
// geography: {
// students: 60,
// teachers: 2
// },
// chemistry: {
// students: 100,
// teachers: 3
// }
// }
// 

const subjects = {
  mathematics: { students: 200, teachers: 6 },
  biology: { students: 120, teachers: 6 },
  geography: { students: 60, teachers: 2 },
  chemistry: { students: 100, teachers: 3 }
}

const subjectNames = Object.keys(subjects).join(", ")
console.log(subjectNames)

let totalStudents = 0
let totalTeachers = 0

for (const subject in subjects) {
  totalStudents += subjects[subject].students
  totalTeachers += subjects[subject].teachers
}

console.log("Total Students:", totalStudents)
console.log("Total Teachers:", totalTeachers)

const subjectCount = Object.keys(subjects).length
const averageStudents = totalStudents / subjectCount
console.log("Average Students per Subject:", averageStudents)

const subjectArray = Object.entries(subjects).map(([subject, { students, teachers }]) => ({ subject, students, teachers }))
console.log(subjectArray)

const sortedSubjects = Object.entries(subjects)
  .sort(([, { teachers: a }], [, { teachers: b }]) => b - a)
  .map(([subject, { students, teachers }]) => ({ subject, students, teachers }))

console.log(sortedSubjects)
