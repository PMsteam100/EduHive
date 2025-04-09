import React from 'react'

const steps = [
    {
      title: "Sign up/Login",
      description: "Login as a Student or admin",
      icon: "👤",
    },
    {
      title: "Profile Setup",
      description: "Setting up profile as admin or student",
      icon: "👥",
    },
    {
      title: "Upload Student Record",
      description: "Login as a Student or admin",
      icon: "💾",
    },
    {
      title: "Record and Grade",
      description: "Student access their record and grade",
      icon: "📊",
    },
  ];
  
  const Card = ({ title, description, icon }) => {
    return (
      <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center w-full max-w-xs">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
const WorksCard = () => {
  return (
    <div className="text-center md:pl-12 md:pr-12 pl-10 pr-10 pb-12 md:pb-16 font-poppins">
    <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4">How it works</h2>
    <div className="grid md:grid-cols-4 justify-center gap-8">
      {steps.map((step, index) => (
        <Card key={index} {...step} />
      ))}
    </div>
  </div>
);
};

export default WorksCard