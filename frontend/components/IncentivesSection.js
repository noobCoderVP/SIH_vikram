import React from 'react';

function IncentivesSection() {
    return (
        <section className="bg-gray-100 text-black py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">Our Incentives</h2>
                <p className="text-gray-600 mb-8">
                    Discover the benefits and rewards we offer to our valued customers.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                    {/* Incentive Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                        <p className="text-gray-600">
                            Get a free initial consultation with our legal experts.
                        </p>
                    </div>

                    {/* Incentive Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Discounted Services</h3>
                        <p className="text-gray-600">
                            Enjoy discounts on legal services for repeat clients.
                        </p>
                    </div>

                    {/* Incentive Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Referral Rewards</h3>
                        <p className="text-gray-600">
                            Refer friends and family to earn rewards and discounts.
                        </p>
                    </div>

                    {/* Incentive Card 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Membership Benefits</h3>
                        <p className="text-gray-600">
                            Exclusive perks and benefits for our loyal members.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IncentivesSection;
