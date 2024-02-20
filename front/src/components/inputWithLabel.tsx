import React from 'react'

interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement>{
  inputValue: string;
  setInputValue: (value: string) => void;
  label: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = (props) => {
  const { inputValue, setInputValue, label, id, ...rest } = props;
  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          id={id}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...rest}
        />
      </div>
    </>
  )
}

export default InputWithLabel
