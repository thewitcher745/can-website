import './HomePage.scss';
import Landing from "./sections/Landing/Landing.tsx";
import Services from "./sections/Services/Services.tsx";
import Results from "./sections/Results/Results.tsx";
import Pricing from "./sections/Pricing/Pricing.tsx";

const HomePage = () => {
    return (
        <>
            <Landing/>
            <Services/>
            <Results/>
            <Pricing/>
        </>
    );
};

export default HomePage;