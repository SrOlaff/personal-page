import React from "react";

interface ListItemProps {
  onClick: () => void;
  isSelected: boolean;
  title: string;
}

function ListItem({ title, isSelected, onClick }: ListItemProps) {
  return (
    <li
      className={`flex flex-1 border-b text-text transition-all duration-200 hover:bg-surface lg:h-1/6 lg:flex-none lg:border-b-0 lg:border-r ${
        isSelected && "border-accent bg-surface text-accent "
      } `}
    >
      <button
        type="button"
        className="flex flex-1 items-center justify-center px-2 text-lg font-medium transition-all duration-200 xl:text-xl 2xl:text-2xl"
        onClick={onClick}
      >
        {title}
      </button>
    </li>
  );
}

export default ListItem;
