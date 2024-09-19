import "../personal.css";

export default function ResumePersonalInfo({
  firstName,
  lastName,
  email,
  phone,
}) {
  return (
    <div className="resume">
      <h1>{`${firstName} ${lastName}`}</h1>
      <h3>{`${email} \u00A0\u00A0  ${phone}`}</h3>
      {email && phone && <hr className="hr" />}
    </div>
  );
}
