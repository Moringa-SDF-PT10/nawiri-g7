function PlaceholderProfile() {
  return (
    <div className="fill-profile">
      <form>
        <h2>Hello New Student, Tell us more about yourself</h2>
        <input type="number" placeholder="ID Number" />
        <input type="date" name="" placeholder="Date of Birth" />
        <input type="text" placeholder="Why do you want to join us?" />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default PlaceholderProfile;
