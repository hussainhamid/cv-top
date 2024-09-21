import { useState } from "react";
import "./personal.css";
import PersonalInfoFields from "./personalInfo";
import ResumeInfo from "./resume/Resume";
import EducationInfo from "./educationInfoField";
import Summary from "./summary";

export default function personalInfo() {
  const [firstName, setFirstName] = useState("your first name");
  const [lastName, setLastName] = useState("your last name");
  const [email, setEmail] = useState("your email");
  const [phone, setPhone] = useState("your phone number");

  const [institute, setInstitute] = useState("institute name");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [summary, setSummary] = useState("your intro");

  return (
    <div className="container">
      <div className="input-div">
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

        <Summary summary={summary} setSummary={setSummary} />

        <EducationInfo
          institute={institute}
          setInstitute={setInstitute}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
        />
      </div>

      <ResumeInfo
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        institute={institute}
        from={from}
        to={to}
        summary={summary}
        setSummary={setSummary}
      />
    </div>
  );
}
