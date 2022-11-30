import React from "react";

interface ListItemProps {
  onClick: () => void;
  isSelected: boolean;
  title: string;
}

function ListItem({ title, isSelected, onClick }: ListItemProps) {
  return (
    <li
      className={`w-[66vw] shrink-0 cursor-pointer list-none border-b border-accent py-5 text-center text-lg font-medium transition-all duration-200 md:w-[55vw] xl:h-[10vh] xl:w-full xl:border-b-0 xl:p-0 xl:text-xl 2xl:text-2xl
      ${isSelected ? " bg-accent" : "bg-surface"}`}
    >
      <button
        type="button"
        className="flex h-full w-full items-center justify-center px-2 text-lg font-medium xl:text-xl"
        onClick={onClick}
      >
        {title}
      </button>
    </li>
  );
}

export default ListItem;
