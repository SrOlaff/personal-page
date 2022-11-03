import React from "react";

interface SkillPillProps {
  name: string;
}

function SkillPill({ name }: SkillPillProps) {
  return (
    <div className="w-full py-2 text-center text-sm text-accent border border-accent rounded-full hover:text-text  hover:bg-accent transition-colors duration-200">
      <p className="font-semibold">{name}</p>
    </div>
  );
}

export default SkillPill;
