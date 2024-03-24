import React, { useState, ReactNode } from 'react';


interface AppContextProps {
  onMouseHover: (e: React.MouseEvent<HTMLDivElement>) => void,
  onClick: () => void,
  syncSection: (sectionName: string, vma: string) => void,
  resetSection: () => void,
  savedCursorX: number,
  movingCursor: number,
  hoveredSection: { text: string, hexAxis: string },
  children?: ReactNode
}

const AppContext = React.createContext<AppContextProps>({
  onMouseHover: () => { },
  onClick: () => { },
  syncSection: () => { },
  resetSection: () => { },
  savedCursorX: 0,
  movingCursor: 0,
  hoveredSection: { text: '', hexAxis: '' },
});;

export const ARROW_SIZE = 8;
export const BOX_SIZE = 24;
export const BEACON_SIZE = BOX_SIZE + ARROW_SIZE;


export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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