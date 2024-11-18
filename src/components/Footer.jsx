import logo from "../assets/sign.png"
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-10 bg-slate-900 text-base-100">
            {/* Logo and Company Name */}
            <div className="text-center mb-6">
                <img
                    src={logo}
                    alt="Company Logo"
                    className="w-16 h-16 mx-auto"
                />
                <h1 className="text-2xl font-bold mt-2">Eco-Adventure</h1>
            </div>

            {/* Links Section */}
            <div className="text-center mb-6">
                <div className="flex flex-wrap justify-center gap-4">
                    <a className="link link-hover text-sm">About Us</a>
                    <a className="link link-hover text-sm">Contact</a>
                   
                </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-gray-700 my-4"></div>

            {/* Social Media Links */}
            <div className="text-center mb-4">
                <div className="flex justify-center gap-4">
                    <a
                        href="https://www.facebook.com/santanu.banik.779"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltip tooltip-bottom"
                        data-tip="Facebook"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current hover:text-blue-500"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com/your-twitter-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltip tooltip-bottom"
                        data-tip="Twitter"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current hover:text-sky-400"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/your-instagram-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltip tooltip-bottom"
                        data-tip="Instagram"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current hover:text-pink-500"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.242 1.314 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.252-3.608 1.314-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.242-1.314-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.314-3.608.975-.975 2.242-1.252 3.608-1.314 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.67.013-4.947.072-1.509.07-2.854.334-3.847 1.327-.993.993-1.257 2.338-1.327 3.847-.059 1.277-.072 1.688-.072 4.947s.013 3.67.072 4.947c.07 1.509.334 2.854 1.327 3.847.993.993 2.338 1.257 3.847 1.327 1.277.059 1.688.072 4.947.072s3.67-.013 4.947-.072c1.509-.07 2.854-.334 3.847-1.327.993-.993 1.257-2.338 1.327-3.847.059-1.277.072-1.688.072-4.947s-.013-3.67-.072-4.947c-.07-1.509-.334-2.854-1.327-3.847-.993-.993-2.338-1.257-3.847-1.327-1.277-.059-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.297 0-4.162-1.865-4.162-4.162s1.865-4.162 4.162-4.162 4.162 1.865 4.162 4.162-1.865 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z"></path>
                        </svg>
                    </a>
                    <a
                        href="https://github.com/SantanuBanik-Phy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltip tooltip-bottom"
                        data-tip="GitHub"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current hover:text-gray-500"
                        >
                            <path d="M12 2c-5.527 0-10 4.473-10 10 0 4.418 2.865 8.165 6.839 9.489.5.091.682-.216.682-.481 0-.237-.008-.868-.012-1.703-2.781.605-3.369-1.344-3.369-1.344-.455-1.155-1.112-1.463-1.112-1.463-.909-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.893 1.531 2.341 1.089 2.91.833.091-.647.349-1.089.635-1.339-2.22-.252-4.555-1.112-4.555-4.946 0-1.093.39-1.988 1.03-2.687-.103-.252-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025a9.564 9.564 0 012.5-.337c.848.004 1.702.115 2.5.337 1.91-1.294 2.75-1.025 2.75-1.025.546 1.376.203 2.394.1 2.646.641.699 1.03 1.594 1.03 2.687 0 3.842-2.338 4.688-4.567 4.936.359.309.678.919.678 1.851 0 1.335-.012 2.415-.012 2.742 0 .268.181.576.687.479 3.973-1.325 6.837-5.071 6.837-9.489 0-5.527-4.473-10-10-10z"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-4 text-sm">
                <p>Copyright © {currentYear} - All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
