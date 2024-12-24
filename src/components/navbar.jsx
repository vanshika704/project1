import { useState } from 'react';
 function Navbar(){
 const [isDarkMode, setIsDarkMode] = useState(false);

  // Inline styles for light and dark themes
  const lightTheme = {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    transition: 'background-color 0.3s, color 0.3s',
  
  };

  const darkTheme = {
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    transition: 'background-color 0.3s, color 0.3s',
  
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };


    return <><nav className="navbar navbar-expand-lg bg-body-tertiary"style={isDarkMode ? darkTheme : lightTheme}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        
      </div>
      
    </div>
    <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          backgroundColor: isDarkMode ? '#fff' : '#333',
          color: isDarkMode ? '#333' : '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      ></button>
  </nav></>
}
export default Navbar;
//gdg code 