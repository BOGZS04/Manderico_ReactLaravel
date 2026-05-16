interface Student {
  name: string;
  age: number;
  gradeLevel: "Grade 7" | "Grade 8" | "Grade 9";
  status: "Active" | "Inactive";
  score: number;
}

// Part 3: Function
function getRemarks(score: number): string {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Passed";
  } else {
    return "Failed";
  }
}

// Part 5: Student Object
let student1: Student = {
  name: "Edgar Manderic",
  age: 21,
  gradeLevel: "Grade 7",
  status: "Active",
  score: 74,
};

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Profile</h1>

      {/* Part 1 */}
      <h2>Basic Info</h2>
      <p>Name: {student1.name}</p>
      <p>Age: {student1.age}</p>
      <p>Active/Inactive: {student1.status}</p>

      {/* Part 2 */}
      <h2>School Info</h2>
      <p>Grade Level: {student1.gradeLevel}</p>

      {/* Score + Remark */}
      <h2>Performance</h2>
      <p>Score: {student1.score}</p>
      <p>Remark: {getRemarks(student1.score)}</p>
    </div>
  );
}

export default App;



