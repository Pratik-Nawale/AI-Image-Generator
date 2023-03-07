import React from "react";

const FormField = ({
  lableName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex item-centre gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {lableName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
      </div>

          <input type={type} 
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:ring-[#64649ff] focus:border-[#4649ff] outline-none block w-full p-3"
          />

    </div>
  );
};

export default FormField;
