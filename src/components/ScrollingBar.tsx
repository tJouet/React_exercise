import React from 'react';
import Bar from './atoms/Bar';
import Beacon from './atoms/Beacon';
import Cursor from './atoms/Cursor';
import { useAppContext, ARROW_SIZE } from '../AppContext';

const ScrollingBar = () => {
  const { onClick, savedCursorX, movingCursor } = useAppContext();

  return (
    <>
      <div className='w-full h-6 mt-6 '>
        <div onClick={onClick} className="relative">
          <Bar>
            {savedCursorX !== 0 &&
              <Beacon
                axisX={savedCursorX}
                style={{ top: `-${ARROW_SIZE}px` }} />
            }
            <Cursor axisX={movingCursor} />
          </Bar>
        </div>
      </div>
    </>
  )
}


export default ScrollingBar;
