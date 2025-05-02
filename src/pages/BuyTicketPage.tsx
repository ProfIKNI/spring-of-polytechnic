import { useRef, useEffect } from "react";
import Ticket from "../assets/ticket.png";
import TicketBg from "../assets/buy-ticket-bg.png";
import Union from "../assets/union-black.png";

const BuyTicketPage = () => {
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
	
		textA.style.left = "0px";
		textB.style.left = `${-textWidth}px`;
	
		let animationFrameId: number;
		let xA = 0;
		let xB = -textWidth;
	
		const scroll = () => {
			const wrapperWidth = wrapper.offsetWidth;
	
			xA += speed;
			xB += speed;
	
			if (xA >= wrapperWidth) {
				xA = xB - textWidth;
			}
			if (xB >= wrapperWidth) {
				xB = xA - textWidth;
			}
	
			textA.style.left = `${xA}px`;
			textB.style.left = `${xB}px`;
	
			animationFrameId = requestAnimationFrame(scroll);
		};
	
		animationFrameId = requestAnimationFrame(scroll);
		return () => cancelAnimationFrame(animationFrameId);
	}, []);
	

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-fixed h-screen overflow-hidden"
      style={{ backgroundImage: `url(${TicketBg})` }}
    >
      <img
        src={Ticket}
        alt="Ticket"
        className="w-[95%] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />

      <div
        ref={wrapperRef}
        className="absolute top-1/2 ml-5 w-[90%] bg-white py-2 overflow-hidden z-20 h-12 relative"
      >
        <div
					ref={textARef}
					className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-black text-2xl font-extrabold"
					style={{ left: "0px" }}
				>
					<span>· ОСТАННІЙ ОМАН · ОСТАННІЙ ОМАН · ОСТАННІЙ ОМАН · </span>
				</div>

				<div
					ref={textBRef}
					className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-black text-2xl font-extrabold"
					style={{ left: "-100%" }}
				>
					<span className="flex justify-between">
						ОСТАННІЙ ОМАН · ОСТАННІЙ ОМАН · ОСТАННІЙ ОМАН
					</span>
				</div>
      </div>

      <div className="relative top-[60%] z-20 left-6">
        <button className="z-20 w-[88%] bg-white rounded-3xl h-18 flex justify-center items-center">
          <img src={Union} alt="Union" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default BuyTicketPage;
