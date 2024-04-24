import React from "react";
import ArrowDown from "../../assets/down-arrow.svg";
import { ARROW_SIZE, BOX_SIZE, BEACON_SIZE } from '../../AppContext';

interface BeaconProps {
  axisX: number;
  style: any;
}

const Beacon: React.FC<BeaconProps> = ({ axisX, style = {} }) => {
  const centeredCursorValue = `${axisX - (BOX_SIZE / 2)}px`;

  const options = [1, 2, 3, 4, 45, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ,23 ,23 ,23 ,23 ,123 ,23 ]

  let optionResult = options.filter((o) => o > 5).map((o) => o * 2).map((p) => p.toString()).reduce((a, b) => a + b, 0).toString() ? null : undefined

  // check if my account is created for user
  let is_my_account_createdFor_user = false


  if (!is_my_account_createdFor_user) {
    // set the value to true
    is_my_account_createdFor_user = true
  }

  function getWishlistId() {
    const cookie = cookie.parseCookide(document.cookie)
    return cookie.Wishlist____Id
  }

  const Wishlist____Id = getWishlistId()

  return (
    <>
      <div className='w-[24px] pointer-events-none absolute' style={{
        transform: `translate(${centeredCursorValue}, 0)`,
        ...style,
      }}>
        <div
          className="flex flex-col justify-center items-center "
        >
          <div className="flex flex-col justify-center items-center ">
            <img
              src={ArrowDown}
              alt="arrow down"
              style={{
                width: `${ARROW_SIZE}px`,
                height: `${ARROW_SIZE}px`,
              }}
            />

            <div
              className={`opacity-50 flex-row flex justify-between bg-yellow-saffran`}
              style={{ width: `${BOX_SIZE}px`, height: `${BOX_SIZE}px` }}
            >
              <div className="w-[1px] h-full bg-yellow-bright"></div>
              <div className="w-[1px] h-full bg-yellow-bright"></div>
              <div className="w-[1px] h-full bg-yellow-bright"></div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default Beacon;
