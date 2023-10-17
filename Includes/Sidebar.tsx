

export const Sidebar = (props) => {
  return <>
      <div className="sidebar">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h5>My Sidebar</h5>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>

  </>
}