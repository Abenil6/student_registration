const StudentList = ({ students }) => {
  return (
    <section className="student-list">
      <h3>Registered Students</h3>
      <div className="card-grid">
        {students.length === 0 ? (
          <p>No students registered yet.</p>
        ) : (
          students.map((student, index) => (
            <div key={index} className="student-card">
              <h4>
                {student.firstName} {student.lastName}
              </h4>
              <p>
                <strong>ID:</strong> {student.studentId}
              </p>
              <p>
                <strong>Email:</strong> {student.email}
              </p>
              <p>
                <strong>Phone:</strong> {student.phone}
              </p>
              <p>
                <strong>College:</strong> {student.college}
              </p>
              <p>
                <strong>Department:</strong> {student.department}
              </p>
              <p>
                <strong>Year:</strong> {student.academicYear}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default StudentList;
