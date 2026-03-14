const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(totoalScore ,students) {
  // Start coding here
  return totoalScore + students.score
}

let averageScore = students.reduce(getAverageStudentScore,0)/students.length
console.log(averageScore)// Output: 87.5