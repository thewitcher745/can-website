import "./Pricing.scss";

const Pricing = () => {
    const plans = [
        {
            name: "Basic",
            price: "$29/month",
            features: [
                "3 signals per day",
                "Basic algorithm functionality",
                "Access to risk management blog",
                "Limited market analysis"
            ],
            popular: false
        },
        {
            name: "Premium",
            price: "$59/month",
            features: [
                "10 signals per day",
                "Advanced algorithm functionality",
                "Access to risk management training",
                "Detailed market analysis"
            ],
            popular: true
        },
        {
            name: "VIP",
            price: "$99/month",
            features: [
                "Unlimited signals",
                "Full algorithm functionality",
                "Personalized risk management training",
                "Comprehensive market analysis"
            ],
            popular: false
        }
    ];

    return (
        <>
            <section id="pricing" className="py-20 2xl:px-40 px-5">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold">Pricing Plans</h2>
                    <p className="text-gray-500">Choose the plan that suits you best</p>
                </div>
                <div className="flex md:flex-row flex-col justify-center">
                    {plans.map((plan, index) => (
                        <div key={index} className={`plan-card p-5 m-2 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-5px] hover:shadow-xl w-full md:w-1/3 flex-grow ${plan.popular ? 'popular' : ''}`}>
                            {plan.popular && <div className="badge">Most Popular</div>}
                            <h4 className="text-3xl font-bold text-white mb-2">{plan.name}</h4>
                            <p className="text-4xl font-bold text-white mb-4">{plan.price}</p>
                            <ul className="text-gray-300 mb-4">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="mb-2">{feature}</li>
                                ))}
                            </ul>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Choose Plan</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Pricing;