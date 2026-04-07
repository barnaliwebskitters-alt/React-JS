const Activity = () => {
  const users = ["Michel", "Cristano", "Brahim", "John Wick"];

  return (
    <div className="activity">
      <h3>Recent Activity</h3>

      {users.map((user, index) => (
        <div key={index} className="activity-item">
          <p>{user} followed you</p>
          <button>Follow Back</button>
        </div>
      ))}
    </div>
  );
};

export default Activity;