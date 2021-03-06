import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../DrawerToggle/DrawerToggleButton';
import 'font-awesome/css/font-awesome.min.css';
import './Toolbar.css';

const navbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar_toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            {props.navClass.map((item) => {
              return (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className={`nav-option ${item.isSelected === true ? 'active' : ''}`}
                    onClick={() => props.addClass(item)}>
                    <i className={item.icon} style={{ margin: '4px' }}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
