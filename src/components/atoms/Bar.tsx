import React, { ReactNode } from "react";
import sections from "../../sections.json";
import { useAppContext } from '../../AppContext';

const getSectionsVMA = () => {
  return sections.sort((a, b) => a.vma - b.vma);
};
const sortedSections = getSectionsVMA();

const getSectionsWidth = () => {
  let totalSize = 0;
  for (let i = 0; i < sortedSections.length; i++) {
    totalSize += sortedSections[i].size;
  }
  return sortedSections.map((section) => ({
    ...section,
    percentage: (section.size / totalSize) * 100,
  }));
};

const sectionsWithPercent = getSectionsWidth();

interface BarProps {
  children: ReactNode
}

const Bar: React.FC<BarProps> = ({
  children
}) => {
  const { syncSection, onMouseHover, resetSection } = useAppContext()

  return (
    <>
      <div
        className="flex-row flex items-center justify-center"
        onMouseMove={onMouseHover}
      >
        {sectionsWithPercent.map((section, index) => (
          <div
            key={index}
            className=" flex items-center justify-center border-r border-white h-6  "
            style={{
              width:
                section.percentage < 0.2 ? "0.3%" : `${section.percentage}%`,
              backgroundColor: section.type == "code" ? "#1E90FF" : "#FF4500",
            }}
            onMouseEnter={() => syncSection(section.name, section.vma)}
            onMouseLeave={resetSection}
          ></div>
        ))}
      </div>
      {children}
    </>
  );
};

export default Bar;
