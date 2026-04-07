import "./Activity.css";

const Activity = () => {
  const users = [
    "Michel",
    "Cristano",
    "Brahim",
    "John Wick",
    "Abhilash",
  ];

  return (
    <div className="activity">
      <h3 className="activity__title">Recent Activity</h3>

      {users.map((user, index) => (
        <div className="activity__item" key={index}>
          <p className="activity__text">
            {user} followed you
          </p>
          <button className="activity__button">
            Follow Back
          </button>
        </div>
      ))}
    </div>
  );
};

export default Activity;