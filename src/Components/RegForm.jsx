import { useState } from "react";

export default function RegisterForm({ onRegister }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    phone: "",
    email: "",
    academicYear: "",
    college: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
    setFormData({
      firstName: "",
      lastName: "",
      studentId: "",
      phone: "",
      email: "",
      academicYear: "",
      college: "",
      department: "",
    });
  };

  return (
    <section id="register" className="register">
      <h3>Student Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          placeholder="Student ID"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="academicYear"
          value={formData.academicYear}
          onChange={handleChange}
          placeholder="Academic Year"
        />
        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleChange}
          placeholder="College"
        />
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Department"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
