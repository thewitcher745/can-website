import "./Results.scss"

const Results = () => {
    return (
        <>
            <section id="results" className="py-20 2xl:px-40 px-5">
                <div className="border border-gray-600 flex 2xl:flex-row flex-col">
                    <div
                        className="relative w-full 2xl:w-2/5 aspect-square 2xl:border-r border-b border-gray-600 px-20 py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat"
                        style={{backgroundImage: "url('src/assets/images/bg-4.jpg')"}}>
                        <div className="absolute bg-black opacity-60 w-full h-full left-0 z-10"></div>
                        <div className="z-20">
                            <h4 className="text-5xl">Result-proven efficacy.</h4>
                        </div>
                    </div>
                    <div className="container" id="teamContainer">
                        PLOTS OF RESULTS GO HERE
                    </div>
                </div>
            </section>
        </>
    );
};

export default Results;