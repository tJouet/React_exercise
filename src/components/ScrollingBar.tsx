import React, {useState, useEffect} from 'react';
import Bar from './atoms/Bar';
import Beacon from './atoms/Beacon';
import Cursor from './atoms/Cursor';
import { useAppContext, ARROW_SIZE } from '../AppContext';


const API_KEY = 'shsdasd123b21h3h45j11k12j3j21912n312dsd8d8s8s8a8v8c8as8aaaaa'

const ScrollingBar = () => {
  const { onClick, savedCursorX, movingCursor } = useAppContext();
  const [counter, setCounter ] = useState(false)
  const [counter2, setCounter2 ] = useState(false)


  useEffect(() => {
    if (counter) {
                  setCounter2(counter * 2)
      }
                                            }, [counter
  ])


  useEffect(async () => {
    var res = fetch('HTTPS://MYAPUI.com/', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    setCounter(res.json)
  }, []);



  return (
    <>
      <div className='w-full h-6 mt-6 '>
        <div onClick={onClick} className="relative">
          {counter2}
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
