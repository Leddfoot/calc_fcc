import Display from "./Display";
import FccExplanation from "./FccExplanation";
import ButtonArray from "./ButtonArray";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    
    <>
    <FccExplanation />
      <div className="main-container">
        <Display />
        <ButtonArray />
        <Footer />
      </div>
    </>
  );
};

export default MainContainer;
