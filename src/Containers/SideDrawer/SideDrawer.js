import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';

const sideDrawer = (props) => {
  let drawerClasses = ['side-drawer'];
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        {props.navClass.map((item) => {
          return (
            <li key={item.link}>
              <Link
                to={item.link}
                className={`nav-option ${item.isSelected === true ? 'active' : ''}`}
                onClick={() => props.bacDrawer(item)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default sideDrawer;
