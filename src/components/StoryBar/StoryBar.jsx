import "./StoryBar.css";

const users = ["Sinan", "Jhon", "Rishal", "Fredrik", "David"];

const StoryBar = () => {
  return (
    <div className="story-bar">
      {users.map((user, index) => (
        <div className="story" key={index}>
          <img
            src="/user.jpg"
            alt="user"
            className="story__image"
          />
          <p className="story__name">{user}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryBar;