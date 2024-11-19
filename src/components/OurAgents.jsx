import React from "react";
import 'animate.css';



const consultantsData = [
  {
    id: 1,
    name: "Mike Bochs",
    description: "Expert in mountaineering and wilderness survival, Mike will plan your next thrilling adventure.",
    image: "https://i.ibb.co.com/XxGBKWV/pngtree-formal-dress-for-passport-photo-mens-business-suit-and-shirt-png-image-11536504.png",
    socials: {
      twitter: "https://twitter.com/mikebochs",
      facebook: "https://facebook.com/mikebochs",
      instagram: "https://instagram.com/mikebochs"
    }
  },
  {
    id: 2,
    name: "Jessica Moore",
    description: "A globe-trotter specializing in cultural expeditions and eco-tourism.",
    image: "https://i.ibb.co.com/wRz21Hn/istockphoto-1163294201-612x612.jpg",
    socials: {
      twitter: "https://twitter.com/jessicamoore",
      facebook: "https://facebook.com/jessicamoore",
      instagram: "https://instagram.com/jessicamoore"
    }
  },
  {
    id: 3,
    name: "Sarah Geronimo",
    description: "Adventure travel consultant with a focus on luxury safaris and beach retreats.",
    image: "https://i.ibb.co.com/1Zzf8dv/360-F-617571490-Lagtv4fr-Ko0-T4zo-El-Zsld-Duzzn-AATG10.jpg",
    socials: {
      twitter: "https://twitter.com/sarahgeronimo",
      facebook: "https://facebook.com/sarahgeronimo",
      instagram: "https://instagram.com/sarahgeronimo"
    }
  },
  {
    id: 4,
    name: "Santanu",
    description: "Experienced in extreme sports and adrenaline-packed adventures, including skydiving.",
    image: "https://i.ibb.co.com/Qpgk5zP/handsome-young-business-man-holding-document-folder-220507-700.jpg",
    socials: {
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/johndoe"
    }
  }
];

const OurAgents = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto mr-1">
        <h3 className="text-green-500 font-semibold text-sm uppercase">
          Meet Our Consultants
        </h3>
        <h2 className="text-4xl font-bold  mt-2 animate__animated animate__slideInLeft ">Adventure Consultants</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto px-4 animate__animated animate__slideInRight ">
        {consultantsData.map((agent) => (
          <div
            key={agent.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {/* Agent Image */}
            <img
              src={agent.image}
              alt={agent.name}
              className="w-full md:h-60  h-64 object-cover"
            />
            {/* Agent Info */}
            <div className="bg-green-500 text-white p-4">
              <h3 className="font-bold text-lg">{agent.name}</h3>
              <p className="text-sm"> {agent.description}</p>
              {/* Social Media Links */}
              <div className="flex  gap-4 mt-4">
                <a
                  href={agent.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.351C0 23.406.594 24 1.325 24H12.82V14.706H9.692v-3.626h3.127V8.344c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.464.099 2.795.144v3.244l-1.918.001c-1.504 0-1.794.714-1.794 1.761v2.308h3.587l-.467 3.626h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.324V1.325C24 .594 23.406 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href={agent.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.974.975 1.249 2.242 1.31 3.608.059 1.265.069 1.645.069 4.848s-.012 3.584-.069 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.974-2.242 1.249-3.608 1.31-1.265.059-1.645.069-4.849.069s-3.584-.012-4.849-.069c-1.366-.062-2.633-.336-3.608-1.311-.974-.975-1.249-2.242-1.31-3.608C2.175 15.784 2.163 15.404 2.163 12c0-3.204.012-3.584.069-4.849.062-1.366.336-2.633 1.311-3.608.975-.974 2.242-1.249 3.608-1.31 1.265-.059 1.645-.069 4.849-.069m0-2.163C8.757 0 8.35.014 7.052.072 5.73.13 4.522.423 3.554 1.391 2.586 2.359 2.293 3.567 2.235 4.888.014 8.35 0 8.757 0 12c0 3.243.014 3.65.072 4.948.059 1.321.352 2.529 1.32 3.497.968.968 2.176 1.261 3.497 1.32C8.35 23.986 8.757 24 12 24c3.243 0 3.65-.014 4.948-.072 1.321-.059 2.529-.352 3.497-1.32.968-.968 1.261-2.176 1.32-3.497.059-1.298.072-1.705.072-4.948 0-3.243-.014-3.65-.072-4.948-.059-1.321-.352-2.529-1.32-3.497-.968-.968-2.176-1.261-3.497-1.32C15.65.014 15.243 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.164a4.002 4.002 0 1 1 0-8.003 4.002 4.002 0 0 1 0 8.003zm6.406-11.845a1.44 1.44 0 1 0-.001-2.881 1.44 1.44 0 0 0 .001 2.881z" />
                  </svg>
                </a>
                <a
                  href={agent.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.945 9.945 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.872 9.872 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.381 4.482C7.69 7.837 4.066 6.14 1.64 3.161a4.902 4.902 0 0 0-.666 2.475 4.918 4.918 0 0 0 2.188 4.1A4.903 4.903 0 0 1 .964 9.32v.062a4.918 4.918 0 0 0 3.946 4.83 4.902 4.902 0 0 1-2.212.084 4.92 4.92 0 0 0 4.604 3.417 9.869 9.869 0 0 1-6.102 2.102c-.398 0-.79-.023-1.175-.068a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14.001-7.496 14.001-13.986 0-.21-.006-.423-.017-.634A9.936 9.936 0 0 0 24 4.557z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAgents;
