import React, { useEffect } from 'react'
import './datalist.css';

interface DataListProps {
  id: string;
  options: string[];
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  className?: string;
}

const DataList: React.FC<DataListProps> = ({ id, options, inputValue, setInputValue, className }) => {
  useEffect(() => {
    console.log('useEffect');
    const inputElement = document.getElementById(id) as HTMLInputElement;
    const datalistElement = inputElement.nextElementSibling as HTMLDataListElement;

    const handleClick = () => {
      let hide = true;

      for (const option of datalistElement.options) {
        if (window.getComputedStyle(option as Element, null).display === 'block') hide = false;
      }

      if (datalistElement.style.display === 'block' || hide) {
        datalistElement.style.display = 'none';
      } else {
        datalistElement.style.display = 'block';
      }
    };

    const handleDocumentClick = (e: MouseEvent) => {
      if ((e.target as Element).tagName === 'OPTION') {
        setInputValue((e.target as HTMLOptionElement).value);
      }

      if ((e.target as Element).tagName !== 'DATALIST' && (e.target as Element).tagName !== 'INPUT') {
        datalistElement.style.display = 'none';
      }
    };

    inputElement.addEventListener('click', handleClick);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      inputElement.removeEventListener('click', handleClick);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [id, setInputValue]);

  return (
    <div className='datalist-container'>
      <input
        className={className}
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <datalist id="mylist" style={{ display: options.length ? 'block' : 'none' }}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default DataList
