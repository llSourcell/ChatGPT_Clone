const SideMenu = ({
  clearChat,
  currentModel,
  setCurrentModel,
  models,
  setTemperature,
  temperature,
}) => (
  <aside className="sidemenu">
    <div className="side-menu-button" onClick={clearChat}>
      click here to reset chat
    </div>
  </aside>
);

const Button = ({ onClick, text }) => (
  <div className="button-picker" onClick={onClick}>
    {text}
  </div>
);

export default SideMenu;
