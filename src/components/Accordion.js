import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const handleClick = (index) => {
      if (index === expandedIndex) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(index);
      }
    };

    const isExpanded = index === expandedIndex;
    if (isExpanded) {
      console.log("expanded");
    } else {
      console.log("collapsed");
    }

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="boder-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
