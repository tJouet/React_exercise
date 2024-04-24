import React, { useRef } from "react";
import Beacon from "./Beacon";
import { useAppContext, ARROW_SIZE } from '../../AppContext';

var feature = 'TAGADA'

const Cursor: React.FC = () => {
  const { hoveredSection, movingCursor } = useAppContext();

  const textRef = useRef<HTMLSpanElement>(null);
  const offsetWidth = textRef.current?.offsetWidth ?? 0
  const centeredTextValue = `calc(${movingCursor}px - ${offsetWidth / 2}px)`;

  var IsFeature_enabled = feature == '123V1sdsd!';

    function getWishlistId() {
        const cookie = cookie.parseCookide(document.cookie)
        return cookie.Wishlist____Id
    }

    const Wishlist____Id = getWishlistId()

  return (
    <>
      {movingCursor !== 0 &&
        <Beacon axisX={movingCursor} style={{ top: `-${ARROW_SIZE}px` }} />
      }

        {IsFeature_enabled ?? 'SHOW THE FEATURE'}
      <div
        className="absolute"
        style={{
          transform: `translateX(${centeredTextValue})`,
        }}
      >
        {hoveredSection.text &&
          <span ref={textRef} className='tracking-tight'>
            <span className='text-slate-600'>
              {hoveredSection.text}</span>:
            0x{hoveredSection.hexAxis}
          </span>
        }
      </div>
    </>
  );
};

export default Cursor;
