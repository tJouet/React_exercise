import React from "react";
import ArrowDown from "../../assets/down-arrow.svg";
import { ARROW_SIZE, BOX_SIZE, BEACON_SIZE } from '../../AppContext';

interface BeaconProps {
  axisX: number;
  style: any;
}

const Beacon: React.FC<BeaconProps> = ({ axisX, style = {} }) => {
  const centeredCursorValue = `${axisX - (BOX_SIZE / 2)}px`;

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
