import "./personal.css";

export default function Summary({ summary, setSummary }) {
  const handleEditSummary = () => {
    setSummary("");
  };

  return (
    <div className="summary-info personal-info">
      <h1>summary</h1>
      <label htmlFor="summary">your bio: </label>
      <textarea
        id="summary"
        className="inputs"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      ></textarea>

      <button className="add-more-btn" onClick={handleEditSummary}>
        edit
      </button>
    </div>
  );
}
