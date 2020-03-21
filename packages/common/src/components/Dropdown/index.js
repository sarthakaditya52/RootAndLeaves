import React, { useState, useEffect } from 'react';
import {
  DropdownMenuWrapper,
  DropdownMenuItemsWrapper,
  DropdownMenuItemWrapper,
} from './dropdown.style';
import { Link } from 'react-router-dom';

let astyle = {
  border: 'solid black',
  borderWidth: '0 1px 1px 0',
  display: 'inline-block',
  padding: '3px',
  transform: 'rotate(45deg)',
  marginLeft: '10px',
  marginBottom: '5px',
  //-webkit-transform: 'rotate(45deg)',
};

const DropdownMenu = props => {
  const [menuState, setMenuState] = useState({
    show: false,
  });

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  });

  const handleToggle = () => {
    setMenuState(prevState => ({
      ...menuState,
      show: !prevState.show,
    }));
  };
  const handleDocumentClick = () => {
    if (menuState.show) {
      handleToggle();
    }
  };

  const { content, dropdownItems, dropdownDirection, className } = props;
  return (
    <DropdownMenuWrapper onClick={e => e.stopPropagation()}>
      <span onClick={handleToggle}>
        {content}
        <i style={astyle} className="arrow down" />
      </span>
      {menuState.show && (
        <DropdownMenuItemsWrapper
          className={className}
          dropdownDirection={dropdownDirection}
        >
          {dropdownItems &&
            dropdownItems.map((item, index) => (
              <DropdownMenuItemWrapper key={index} onClick={handleToggle}>
                <span to={item.path}>{item.label}</span>
              </DropdownMenuItemWrapper>
            ))}
        </DropdownMenuItemsWrapper>
      )}
    </DropdownMenuWrapper>
  );
};

export default DropdownMenu;
