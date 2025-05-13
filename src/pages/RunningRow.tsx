import { useRef, useEffect } from 'react';
import useIsMobile from "../hooks/useMobile.tsx";

const RunningRow = ({ text = '' }) => {
    const isMobile = useIsMobile();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const textARef = useRef<HTMLDivElement>(null);
    const textBRef = useRef<HTMLDivElement>(null);
    const speed = 1;

    useEffect(() => {
        const textA = textARef.current;
        const textB = textBRef.current;
        const wrapper = wrapperRef.current;

        if (!textA || !textB || !wrapper) return;

        const textWidth = textA.offsetWidth;

        textA.style.left = '0px';
        textB.style.left = `${-textWidth}px`;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let animationFrameId: any;

        const scroll = () => {
            const wrapperWidth = wrapper.offsetWidth;

            textA.style.left = `${parseInt(textA.style.left) + speed}px`;
            textB.style.left = `${parseInt(textB.style.left) + speed}px`;

            if (parseInt(textA.style.left) >= wrapperWidth) {
                textA.style.left = `${parseInt(textB.style.left) - textWidth}px`;
            }

            if (parseInt(textB.style.left) >= wrapperWidth) {
                textB.style.left = `${parseInt(textA.style.left) - textWidth}px`;
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [text]);

    return (
        <div
            ref={wrapperRef}
            className={`relative overflow-hidden w-full bg-[#374498] text-white shadow-[0px_8px_20px_0px_rgba(255,255,255,0.55)] ${!isMobile ? "h-[50px]" : "h-[40px]"}`}
        >
            <div className="absolute top-0 left-0 flex whitespace-nowrap">
                <div
                    ref={textARef}
                    className={`font-bold font-pixelify ${!isMobile ? "text-[32px]" : "text-[28px]"}`}
                    style={{
                        fontFamily: '"Pixelify Sans", sans-serif',
                        textShadow: `-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black`,
                        position: 'absolute',
                    }}
                >
                    {text}
                </div>

                <div
                    ref={textBRef}
                    className={`font-bold font-pixelify ${!isMobile ? "text-[32px]" : "text-[28px]"}`}
                    style={{
                        fontFamily: '"Pixelify Sans", sans-serif',
                        textShadow: `-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black`,
                        position: 'absolute',
                        left: `${-text.length * 20}px`,
                    }}
                >
                    {text}
                </div>
            </div>
        </div>
    );
};

export default RunningRow;
