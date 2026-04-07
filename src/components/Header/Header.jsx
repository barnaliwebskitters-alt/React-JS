import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <input
        type="text"
        placeholder="#Explore"
        className="header__search"
      />

      <div className="header__icons">
        <span>🔔</span>
        <span>💬</span>
        <span>⚙️</span>
      </div>
    </div>
  );
};

export default Header;