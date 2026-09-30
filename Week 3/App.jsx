import { useState } from "react";
import "./App.css";

const initialStudents = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    major: "Cybersecurity",
    grade: 92,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    major: "Computer Science",
    grade: 85,
  },
  {
    id: 3,
    name: "Charlie Lee",
    email: "charlie@example.com",
    major: "Information Technology",
    grade: 78,
  },
  {
    id: 4,
    name: "Diana Wang",
    email: "diana@example.com",
    major: "Cybersecurity",
    grade: 96,
  },
];

// ------------------------------------
// StudentCard Component
// ------------------------------------
function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <div className="student-info">
        <h3>{student.name}</h3>
        <p>{student.email}</p>
        <p>
          <strong>Major:</strong> {student.major}
        </p>
        <p>
          <strong>Grade:</strong> {student.grade}
        </p>
      </div>

      <button
        className="delete-button"
        onClick={() => onDelete(student.id)}
      >
        Delete
      </button>
    </div>
  );
}

// ------------------------------------
// Main App Component
// ------------------------------------
function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");

  // Add a new student
  function addStudent(event) {
    event.preventDefault();

    if (name.trim() === "" || major.trim() === "") {
      alert("Please enter both name and major.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      email: `${name.toLowerCase().replaceAll(" ", ".")}@example.com`,
      major: major,
      grade: 0,
    };

    setStudents([...students, newStudent]);

    // Clear form
    setName("");
    setMajor("");
  }

  // Delete a student
  function deleteStudent(id) {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  }

  // Filter students
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>🎓 Student Management</h1>
        <p>ReactJS + Vite Teaching Example</p>
      </header>

      <main>

        {/* --------------------------------
            ADD STUDENT
        -------------------------------- */}
        <section className="panel">
          <h2>Add Student</h2>

          <form onSubmit={addStudent}>
            <input
              type="text"
              placeholder="Student name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <input
              type="text"
              placeholder="Major"
              value={major}
              onChange={(event) => setMajor(event.target.value)}
            />

            <button type="submit">
              Add Student
            </button>
          </form>
        </section>

        {/* --------------------------------
            SEARCH
        -------------------------------- */}
        <section className="panel">
          <h2>Search Students</h2>

          <input
            className="search"
            type="text"
            placeholder="Search by student name..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </section>

        {/* --------------------------------
            STUDENT LIST
        -------------------------------- */}
        <section className="panel">
          <div className="list-header">
            <h2>Students</h2>

            <span>
              {filteredStudents.length} student(s)
            </span>
          </div>

          {filteredStudents.length === 0 ? (
            <p className="empty">
              No students found.
            </p>
          ) : (
            <div>
              {filteredStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onDelete={deleteStudent}
                />
              ))}
            </div>
          )}
        </section>

      </main>

      <footer>
        ReactJS Teaching Example
      </footer>
    </div>
  );
}

export default App;