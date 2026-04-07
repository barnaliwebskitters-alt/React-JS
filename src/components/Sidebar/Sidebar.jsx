import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* PROFILE */}
      <div className="profile-card">
        <img
          src="/profile.jpg"
          alt="profile"
          className="profile-card__image"
        />
        <h3 className="profile-card__name">Elviz Dizzouza</h3>
        <p className="profile-card__username">@elvizoodem</p>
        <p className="profile-card__bio">
          UI/UX Designer. Open to new projects.
        </p>
        <button className="profile-card__button">My Profile</button>
      </div>

      {/* SKILLS */}
      <div className="skills">
        <h4 className="skills__title">Skills</h4>
        <div className="skills__list">
          <span className="skills__item">UX Designer</span>
          <span className="skills__item">Frontend</span>
          <span className="skills__item">JS</span>
        </div>
      </div>

      {/* COMMUNITIES */}
      <div className="communities">
        <h4 className="communities__title">Communities</h4>

        <div className="community-item">
          <img src="/c1.jpg" className="community-item__image" />
          <div className="community-item__info">
            UX Designers
          </div>
        </div>

        <div className="community-item">
          <img src="/c2.jpg" className="community-item__image" />
          <div className="community-item__info">
            Frontend Devs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;