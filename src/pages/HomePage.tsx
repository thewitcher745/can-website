import './HomePage.scss';
import Landing from "./sections/Landing/Landing.tsx";
import Services from "./sections/Services/Services.tsx";

const HomePage = () => {
    return (
        <>
            <Landing/>
            <Services/>
        </>
    );
};

export default HomePage;