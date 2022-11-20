import React from "react";

interface SkillPillProps {
  name: string;
}

function SkillPill({ name }: SkillPillProps) {
  return (
    <div className="w-full rounded-full border border-accent py-2 text-center text-xs text-accent transition-colors duration-200  hover:bg-accent hover:text-text md:text-sm">
      <p className="font-semibold">{name}</p>
    </div>
  );
}

export default SkillPill;
