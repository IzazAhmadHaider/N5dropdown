import React, { useState } from 'react';

const ColorForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState("");
  const [inputValueSize, setInputValueSize] = useState("");


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmission = (value) => {
    setInputValue("Colors: " + value);
  };
  const handleSubmission2 = (value) => {
    setInputValueSize("Sizes: " + value);
  };

  return (
    <div className="p-4">
      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700 mb-2">
        Varients:
      </label>
      <select
        id="dropdown"
        onChange={handleSelectChange}
        value={selectedOption}
        className="block w-[50%] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
      >
        <option value="">Select Option</option>
        <option value="Color">Color</option>
        <option value="Size">Size</option>
      </select>

      {selectedOption === 'Color' && <ColorForm2 onSubmit={handleSubmission} />}
      {selectedOption === 'Size' && <Size onSubmit={handleSubmission2} />}

      <div className="mt-6">
  {inputValue && (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
      <p className="font-bold">Colors:</p>
      <p>{inputValue}</p>
    </div>
  )}

  {inputValueSize && (
    <div className="mt-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
      <p className="font-bold">Sizes:</p>
      <p>{inputValueSize}</p>
    </div>
  )}
</div>

    </div>
  );
};

export default ColorForm;


// <-----------------------------------------------------Color_Component-------------------->





const ColorForm2 = ({ onSubmit }) => {
  const initialColorFields = [{ value: '' }];
  const [colorFields, setColorFields] = useState(initialColorFields);
  const [badgeValues, setBadgeValues] = useState([]);
  const [showBadges, setShowBadges] = useState(false);

  const handleInputChange = (index, value) => {
    const updatedFields = [...colorFields];
    updatedFields[index].value = value;

    if (value.trim() !== '' && index === updatedFields.length - 1) {
      updatedFields.push({ value: '' });
    }

    setColorFields(updatedFields);
  };

  const handleDelete = (index) => {
    const updatedFields = [...colorFields];
    updatedFields.splice(index, 1);
    setColorFields(updatedFields);
  };

  const handleSubmit = () => {
    const values = colorFields.map((field) => field.value);
    setBadgeValues(values);
    onSubmit(values);
    setColorFields(initialColorFields);
    setShowBadges(true);
  };

  const handleReset = () => {
    setBadgeValues([]);
    setShowBadges(false);
    setColorFields(initialColorFields);
  };

  return (
    <div className="my-8">
      <form>
        {showBadges
          ? null
          : colorFields.map((field, index) => (
              <div key={index} className="mb-4 flex items-center">
                <label htmlFor={`color-${index}`} className="mr-2 font-medium text-gray-700">
                  Color:
                </label>
                <input
                  type="text"
                  id={`color-${index}`}
                  placeholder="Type a color"
                  value={field.value}
                  onInput={(e) => handleInputChange(index, e.target.value)}
                  onBlur={(e) => handleInputChange(index, e.target.value)}
                  className="border rounded p-2"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
        {showBadges ? null : (
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        )}
        {showBadges && (
          <button
            type="button"
            onClick={handleReset}
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        )}
      </form>
    </div>
  );
};












// <-----------------------------------------------------Size_Component-------------------->





const Size = ({ onSubmit }) => {
  const initialSizeFields = [{ value: '' }];
  const [sizeFields, setSizeFields] = useState(initialSizeFields);
  const [badgeValues, setBadgeValues] = useState([]);
  const [showBadges, setShowBadges] = useState(false);

  const handleInputChange = (index, value) => {
    const updatedFields = [...sizeFields];
    updatedFields[index].value = value;

    if (value.trim() !== '' && index === updatedFields.length - 1) {
      updatedFields.push({ value: '' });
    }

    setSizeFields(updatedFields);
  };

  const handleDelete = (index) => {
    const updatedFields = [...sizeFields];
    updatedFields.splice(index, 1);
    setSizeFields(updatedFields);
  };

  const handleSubmit = () => {
    const values = sizeFields.map((field) => field.value);
    setBadgeValues(values);
    onSubmit(values);
    setSizeFields(initialSizeFields);
    setShowBadges(true);
  };

  const handleReset = () => {
    setBadgeValues([]);
    setShowBadges(false);
    setSizeFields(initialSizeFields);
  };

  return (
    <div className="my-8">
      <form>
        {showBadges
          ? null
          : sizeFields.map((field, index) => (
              <div key={index} className="mb-4 flex items-center">
                <label htmlFor={`size-${index}`} className="mr-2 font-medium text-gray-700">
                  Size:
                </label>
                <input
                  type="text"
                  id={`size-${index}`}
                  placeholder="Type a Size"
                  value={field.value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="border rounded p-2"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
        {showBadges ? null : (
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        )}
        {showBadges && (
          <button
            type="button"
            onClick={handleReset}
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        )}
      </form>
    </div>
  );
};

