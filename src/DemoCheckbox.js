import { useState } from "react";

export default function DemoCheckbox(props) {
  const choices = [
    {
      id: 1,
      value: "Java",
    },
    {
      id: 2,
      value: "Javascript",
    },
    {
      id: 3,
      value: "Python",
    },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) => {
      if (selectedItems.includes(id)) {
        console.log("uncheck ", id);
        return prev.filter((itemId) => itemId !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <div>
      {choices.map(({ id, value }) => {
        return (
          <div key={id}>
            <input
              type="checkbox"
              checked={selectedItems.includes(id)}
              onChange={() => handleCheckboxChange(id)}
            />
            {value}
          </div>
        );
      })}
      <hr />
    </div>
  );
}
