import React, { useState } from "react";
import "./personal.css";
import PersonalInfoFields from "./personalInfo";
import ResumePersonalInfo from "./resume/Resume";

export default function personalInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="container">
      <PersonalInfoFields
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
      />

      <ResumePersonalInfo
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
      />
    </div>
  );
}
