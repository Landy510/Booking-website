import React, { useLayoutEffect, useRef, useState } from 'react';

interface ToolTipProps {
  children?: React.ReactNode;
  pos: { x: number, y: number };
  isShow: boolean;
}

function ToolTip({ children, pos = { x: 0, y: 0 }, isShow = false }: ToolTipProps) {
  const [translatePos, setTranslatePos] = useState({ x: 0, y: 0 });
  const toolTipRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let shiftDistance = 0;
    if (toolTipRef.current) {
      shiftDistance = Math.round(toolTipRef.current.getBoundingClientRect().width / 2);
    }
    setTranslatePos({
      x: pos.x - shiftDistance,
      y: pos.y,
    });
  }, [pos]);

  return (
    <div
      className={[
        'absolute top-0 left-0',
        isShow ? 'block' : 'hidden',
      ].join(' ')}
      style={{
        transform: `translate(${translatePos.x}px, ${translatePos.y}px)`,
      }}
      ref={toolTipRef}
    >
      <div className="relative min-w-[5rem] rounded-[0.5rem] shadow-[0_0_0.25rem_0_rgba(0,0,0,0.3)]">
        <span className="bg-white block w-[1rem] h-[1rem] rotate-[45deg] absolute z-[1] top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0.25rem_0_rgba(0,0,0,0.3)]" />
        <div className="relative z-[1] rounded-[0.5rem] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ToolTip;
