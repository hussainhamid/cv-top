import "./personal.css";

export default function PersonalInfoFields({
  firstName,
  lastName,
  setFirstName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  return (
    <div className="personal-info">
      <h1>Personal info</h1>
      <label htmlFor="first-name">First Name: </label>
      <input
        className="inputs"
        id="first-name"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="last-name">Last Name: </label>
      <input
        className="inputs"
        id="last-name"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <label htmlFor="email">Email: </label>
      <input
        className="inputs"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone">Your phone number: </label>
      <input
        className="inputs"
        id="phone"
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
}
