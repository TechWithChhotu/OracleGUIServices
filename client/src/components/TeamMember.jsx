// import React from "react";
// import ProjectCoverPage from "./ProjectCoverPage";
// import ckumarProfile from "../assets/Profile picture.png";

// const teamMembers = [
//   {
//     name: "Chhotu Kumar",
//     rollNumber: 100,
//     regNumber: "BCA-1001",
//     role: "Project Leader & Full Stack Developer",
//     domain: "AI/ML Specialist",
//     slogan: "Bridging Technology with Innovation",
//     image: ckumarProfile, // Placeholder for the image path
//   },
//   {
//     name: "Soni Kumari",
//     rollNumber: 105,
//     regNumber: "BCA-1002",
//     role: "Front-End Developer",
//     domain: "UI/UX Design",
//     slogan: "Designing User Experiences that Inspire",
//     image: "soni-kumari.jpg", // Placeholder for the image path
//   },
//   {
//     name: "Moni Kumari",
//     rollNumber: 120,
//     regNumber: "BCA-1003",
//     role: "Back-End Developer",
//     domain: "Database Management",
//     slogan: "Optimizing Data for Performance",
//     image: "moni-kumari.jpg", // Placeholder for the image path
//   },
//   {
//     name: "Swati Kumari",
//     rollNumber: 139,
//     regNumber: "BCA-1004",
//     role: "Quality Assurance Specialist",
//     domain: "Software Testing",
//     slogan: "Ensuring Quality Through Rigorous Testing",
//     image: "swati-kumari.jpg", // Placeholder for the image path
//   },
// ];

// function Team() {
//   return (
//     <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {teamMembers.map((member) => (
//           <div
//             key={member.rollNumber}
//             className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center"
//           >
//             <img
//               src={member.image} // Update with actual image path
//               alt={member.name}
//               className="w-32 h-32 rounded-full mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
//             <p className="text-gray-700 mb-1">
//               Roll Number: {member.rollNumber}
//             </p>
//             <p className="text-gray-700 mb-1">Reg Number: {member.regNumber}</p>
//             <p className="text-gray-700 mb-1">Role: {member.role}</p>
//             <p className="text-gray-700 mb-1">Domain: {member.domain}</p>
//             <p className="text-gray-500 italic">{member.slogan}</p>
//           </div>
//         ))}
//       </div>
//       <ProjectCoverPage />
//     </div>
//   );
// }

// export default Team;

import React from "react";
import ProjectCoverPage from "./ProjectCoverPage";
import ckumarProfile from "../assets/Profile picture.png";
import SoniProfile from "../assets/SoniProfile.jpg";
import MoniProfile from "../assets/MoniProfile.jpg";

const teamMembers = [
  {
    name: "Chhotu Kumar",
    rollNumber: 521090005,
    regNumber: "215090005",
    role: "Full Stack Developer",
    domain: "AI/ML Specialist",
    slogan: "Bridging Technology with Innovation",
    image: ckumarProfile, // Placeholder for the image path
  },
  {
    name: "Soni Kumari",
    rollNumber: 521090027,
    regNumber: "215090027",
    role: "Front-End Developer",
    domain: "UI/UX Design",
    slogan: "Designing User Experiences that Inspire",
    image: SoniProfile, // Placeholder for the image path
  },
  {
    name: "Moni Kumari",
    rollNumber: 521090018,
    regNumber: "215090018",
    role: "Back-End Developer",
    domain: "Database Management",
    slogan: "Optimizing Data for Performance",
    image: MoniProfile, // Placeholder for the image path
  },
  {
    name: "Swati Kumari",
    rollNumber: 139,
    regNumber: "BCA-1004",
    role: "UI/UX Designer", //Quality Assurance Specialist
    domain: "Software Testing",
    slogan: "Ensuring Quality Through Rigorous Testing",
    image: "swati-kumari.jpg", // Placeholder for the image path
  },
];

function Team() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg min-h-[80%]">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.rollNumber}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img
              src={member.image} // Update with actual image path
              alt={member.name}
              className="w-36 h-36 rounded-full mb-4 object-cover border-4 border-blue-400"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-600 mb-1">
              Roll Number: {member.rollNumber}
            </p>
            <p className="text-gray-600 mb-1">Reg Number: {member.regNumber}</p>
            <p className="text-gray-600 mb-1">Role: {member.role}</p>
            {/* <p className="text-gray-600 mb-1">Domain: {member.domain}</p> */}
            {/* <p className="text-gray-500 italic">{member.slogan}</p> */}
          </div>
        ))}
      </div>
      <ProjectCoverPage />
    </div>
  );
}

export default Team;
