import React, { useState } from 'react';

const AppContext = React.createContext();

export const ARROW_SIZE = 8;
export const BOX_SIZE = 24;
export const BEACON_SIZE = BOX_SIZE + ARROW_SIZE;


export const AppContextProvider = ({ children }) => {
  const [movingCursor, setMovingCursorX] = useState(0); // on hover
  const [savedCursorX, setSavedCursorX] = useState(0) // on click

  const [hoveredSection, setHoveredSection] = useState({
    text: '',
    hexAxis: '',
  })

  const onMouseHover = (e: React.MouseEvent<HTMLElement>) => {
    setMovingCursorX(e.clientX)
  };

  const onClick = () => {
    setSavedCursorX(movingCursor)
  }

  const syncSection = (name: string, vma: string) => {
    const hexAxis = vma.toString(16);
    setHoveredSection({
      text: name,
      hexAxis: hexAxis,
    })
  }

  const resetSection = () => {
    setHoveredSection({
      text: '',
      hexAxis: '',
    })
  }

  return (
    <AppContext.Provider
      value={{
        movingCursor,
        savedCursorX,
        hoveredSection,
        syncSection,
        onClick,
        onMouseHover,
        resetSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return React.useContext(AppContext);
}