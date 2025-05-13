
import Background from "../../assets/bg5.png";
import BackgroundMobile from "../../assets/bg-mobile2.png";
import useIsMobile from "../../hooks/useMobile.tsx";


const PlanetsPage = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="m-0 p-0 w-full min-h-screen z-0 bg-repeat">
    <img
      src={BackgroundMobile}
      alt="Background"
      className="w-full"
    />
    
  </div>
    );
  }

  return (
  <div className="m-0 p-0 w-full min-h-screen z-0 bg-repeat">
    <img
      src={Background}
      alt="Background"
      className="w-full"
    />
    
  </div>
);



};

export default PlanetsPage;