import SectionDivider from "../../../../components/SectionDivider/SectionDivider.tsx";
import "./Services.scss"

const Services = () => {
    return (
        <>
            <SectionDivider/>
            <section id="services" className="py-20 2xl:px-40 px-5">
                <div className="border border-gray-600 flex 2xl:flex-row flex-col">
                    <div
                        className="relative w-full 2xl:w-2/5 aspect-square 2xl:border-r border-b border-gray-600 px-20 py-20 flex items-center bg-cover bg-center bg-no-repeat"
                        style={{backgroundImage: "url('src/assets/images/bg-3.jpg')"}}>
                        <div className="absolute bg-black opacity-60 w-full h-full left-0 z-10"></div>
                        <div className="z-20">
                            <h4 className="text-5xl">Let experience drive your profit.</h4>
                            <br/>
                            <p>
                                Our trading company offers services to empower traders of all levels. We provide
                                real-time trading signals for informed decisions, advanced algorithmic trading for
                                precise and speedy execution, and detailed liquidation heatmaps for market insights. Our
                                risk management training equips you with strategies to manage and mitigate risks
                                effectively. Whether you're a novice or experienced trader, our services enhance your
                                trading success.
                            </p>
                        </div>
                    </div>
                    <div className="container" id="teamContainer">
                        <article className="article">
                            <a href="#" className="article-content">
                                <h1 className="article-title">Real-Time Trading Signals</h1>
                                <span className="article-description">Make informed decisions with our real-time signals.</span>
                            </a>
                            <img
                                className="article-image" alt="service"
                                src="https://images.unsplash.com/photo-1683009427666-340595e57e43?q=80&w=1920&auto=format&fit=crop"
                            />
                        </article>
                        <article className="article">
                            <a href="#" className="article-content">
                                <h1 className="article-title">Algorithmic Trading</h1>
                                <span className="article-description">Execute trades with precision and speed.</span>
                            </a>
                            <img
                                className="article-image" alt="service"
                                src="https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?q=80&w=1000&auto=format&fit=crop"
                            />
                        </article>
                        <article className="article">
                            <a href="#" className="article-content">
                                <h1 className="article-title">Liquidation Heatmaps</h1>
                                <span className="article-description">Gain insights into market liquidity.</span>
                            </a>
                            <img
                                className="article-image" alt="service"
                                src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05?q=80&w=1000&auto=format&fit=crop"
                            />
                        </article>
                        <article className="article">
                            <a href="#" className="article-content">
                                <h1 className="article-title">Risk Management Training</h1>
                                <span
                                    className="article-description">Learn strategies to manage and mitigate risks.</span>
                            </a>
                            <img
                                className="article-image" alt="service"
                                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000&auto=format&fit=crop"
                            />
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;