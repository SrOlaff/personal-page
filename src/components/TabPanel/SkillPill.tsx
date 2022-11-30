import React from "react";

interface SkillPillProps {
  name: string;
}

function SkillPill({ name }: SkillPillProps) {
  return (
    <div className="w-full rounded-full bg-accent py-2 text-center text-xs text-text transition-colors duration-200 md:text-sm xl:py-3">
      <p className="font-semibold text-[#FDE2D8]">{name}</p>
    </div>
  );
}

export default SkillPill;
