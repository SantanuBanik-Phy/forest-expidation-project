import logo from "../assets/sign.png"
const AboutUs = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">About Forest Expeditions</h1>

            <div className="hero bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={logo} className="max-w-sm rounded-lg shadow-2xl" alt="Team or adventure scene" />
                    <div className="ml-4 p-4">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="mb-4">
                            At Eco-Adventure Experiences, we're passionate about connecting people with nature in a responsible and sustainable way. We believe that travel can be a powerful force for good, and we're committed to offering eco-friendly adventures that minimize environmental impact and benefit local communities.
                        </p>
                        <p className="mb-4">
                            We curate a diverse selection of adventures, from mountain treks and ocean dives to wildlife encounters and cultural immersions. Our goal is to provide unforgettable experiences that inspire a love for our planet and promote conservation efforts.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold text-center mb-6">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-xl hover:bg-green-500">
                        <div className="card-body text-center">
                            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                            <p>We prioritize eco-friendly practices and partnerships to minimize our footprint and support conservation.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl hover:bg-green-500">
                        <div className="card-body text-center">
                            <h3 className="text-xl font-bold mb-2">Community</h3>
                            <p>We work closely with local communities to ensure our adventures benefit their economies and cultures.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl hover:bg-green-500">
                        <div className="card-body text-center">
                            <h3 className="text-xl font-bold mb-2">Experience</h3>
                            <p>We strive to provide unique and unforgettable adventures that foster a deep connection with nature.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                <p>info@ecoadventure.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Address</h3>
                                <p>123 Adventure Street, Cityville, CA 90210</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;