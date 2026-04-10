function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-semibold">{name}</span>
        <span className="text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 h-3">
        <div
          className="bg-[#4a4a7a] h-3 transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillBar;