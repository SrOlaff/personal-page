import React from "react";

interface ListItemProps {
  onClick: () => void;
  isSelected: boolean;
  title: string;
}

function ListItem({ title, isSelected, onClick }: ListItemProps) {
  return (
    <li
      className={`text-text hover:bg-surface flex flex-1 lg:flex-none lg:h-1/6 border-b lg:border-b-0 lg:border-r transition-all duration-200 ${
        isSelected && "bg-surface border-accent text-accent "
      } `}
    >
      <button
        type="button"
        className="flex flex-1 items-center justify-center px-2 font-medium text-lg xl:text-xl 2xl:text-2xl transition-all duration-200"
        onClick={onClick}
      >
        {title}
      </button>
    </li>
  );
}

export default ListItem;
