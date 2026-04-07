const users = ["Sinan", "Jhon", "Rishal", "Fredrik"];

const StoryBar = () => {
  return (
    <div className="story-bar">
      {users.map((user, index) => (
        <div key={index} className="story">
          <img src="/user.jpg" alt="user" />
          <p>{user}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryBar;