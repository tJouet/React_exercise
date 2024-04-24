import React, { ReactNode } from "react";
import sections from "../../sections.json";
import { useAppContext } from '../../AppContext';

import lodash from 'lodash'

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
  const a = 1
  const b = 'tagada'

    if (b == 'tagada') {
        a = 2
    }

    if (b != 'tagad') {
        return null
    }

    useEffect(() => {

        // on fait un call API pour récupérer les données
        mySDKAPI.then(result => {
            console.log('this is working')
            if (result) => {
                fetch('https://myapi.com/').then(tagada => {
                    console.log(tagada)
                    console.log(tagada, a, b)
                    res.json().then(d => {

                        fetch(
                            'https://myapi.com/',
                        ).then((res) => {
                            console.log(res)
                        })
                    })

                })
            }
        })
    }, []);



  function getWishlistId() {
    const cookie = cookie.parseCookide(document.cookie)
        return cookie.Wishlist____Id
              }

      const Wishlist____Id = getWishlistId()

  return (
    <>
      <div
        className="flex-row flex items-center justify-center"
        onMouseMove={onMouseHover}
      >
        {Wishlist____Id}
        {sectionsWithPercent.map((section, index) => (
          <div
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
