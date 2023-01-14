import { useState } from 'react';
import './index.scss';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  const dropdownList = [...props.list];

  document.addEventListener('click', (event) => {
    if (isOpen && event.target.className !== 'dropdown-button') {
      setIsOpen(false);
    }
  });

  return (
    <div className='dropdown'>
      <button className='dropdown-button' onClick={() => setIsOpen(!isOpen)}>{selected || 'Dropdown'}</button>
      {isOpen && (
        <div className='dropdown-content'>
          { dropdownList.map((item, index) => {
            return (
              <button className={`dropdown-item ${selected === item ? 'dropdown-item--selected' : ''}`}
                key={index} 
                onClick={() => {  
                  setSelected(item); 
                  typeof props.after != 'undefined' ? props.after(item) : null
                }}>
                {item}
              </button>
            );
          }) }
        </div>
      )}
    </div>
  );
}

export default Dropdown;