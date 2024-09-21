import "../personal.css";

export default function ResumeInfo({
  firstName,
  lastName,
  email,
  phone,
  institute,
  from,
  to,
  summary,
}) {
  return (
    <div className="resume">
      <h1>{`${firstName} ${lastName}`}</h1>
      <h3>{`${email} \u00A0\u00A0  ${phone}`}</h3>
      {email && phone && <hr className="hr" size="1" />}

      <br />

      <h1>your short intro</h1>

      <p>{summary}</p>

      <hr size="1" className="hr" />

      <h1 className="edu">Education</h1>

      <h2 className="edu">{institute}</h2>
      <h3 className="edu">From: {from}</h3>
      <h3 className="edu">To: {to}</h3>

      <hr size="1" className="hr" />

      <p className="explanation">
        i did'nt focus that much on this project, because my highschool exams
        were going on.{" "}
      </p>
    </div>
  );
}
