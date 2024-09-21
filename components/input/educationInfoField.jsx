import "./personal.css";

export default function EducationInfo({
  institute,
  setInstitute,
  from,
  setFrom,
  to,
  setTo,
}) {
  const handleEditEducation = () => {
    setInstitute("");
    setFrom("");
    setTo("");
  };

  return (
    <div className="education-info personal-info">
      <h1>Education</h1>
      <label htmlFor="institute-name">Institute name: </label>
      <input
        id="institute-name"
        className="inputs"
        type="text"
        value={institute}
        onChange={(e) => setInstitute(e.target.value)}
      />

      <label htmlFor="from-date">From: </label>
      <input
        id="from-date"
        className="inputs"
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <label htmlFor="to-date">To: </label>
      <input
        id="to-date"
        className="inputs"
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <button className="add-more-btn" onClick={handleEditEducation}>
        Edit
      </button>
    </div>
  );
}
