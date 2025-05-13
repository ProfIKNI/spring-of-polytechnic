import { useEffect, useRef, useState } from 'react';

const RunningRow = ({ text = '' }) => {
    const textRef = useRef<HTMLSpanElement>(null);
    const [repeatCount, setRepeatCount] = useState(1);
    const duration = innerWidth < 480 ? 10 : 20;

    useEffect(() => {
        if (textRef.current) {
            const width = textRef.current.offsetWidth;
            const screenWidth = window.innerWidth;
            const count = Math.ceil(screenWidth / width) + 6;
            setRepeatCount(count);
        }
    }, [text]);

    const repeatedText = Array.from({ length: repeatCount }, (_, i) => (
        <span key={i} className="pb-2 mx-4 inline-block font-pixelify font-bold text-[32px]" ref={i === 0 ? textRef : null}
              style={{ fontFamily: '"Pixelify Sans", sans-serif', fontWeight: 700,
                  textShadow: `
                                -1px -1px 0 black,
                                 1px -1px 0 black,
                                -1px  1px 0 black,
                                 1px  1px 0 black,
                              `
              }}
        >
            {text}
        </span>
    ));


    return (
        <div className="overflow-hidden whitespace-nowrap w-full bg-[#374498] text-white shadow-[0px_8px_20px_0px_rgba(255,255,255,0.55)]">
            <div
                className="flex animate-marquee"
                style={{
                    animationDuration: `${duration}s`,
                    willChange: 'transform',
                }}
            >
                <div className="flex">{repeatedText}</div>
                <div className="flex">{repeatedText}</div>
            </div>
        </div>
    );
};

export default RunningRow;
