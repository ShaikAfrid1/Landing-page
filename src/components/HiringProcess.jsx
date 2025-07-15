import { FaVideo, FaCode, FaPhone, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaVideo className="text-indigo-500 text-2xl" />,
    title: "Intro Video",
    desc: "A short hello + a quick walkthrough of a page you’ve built",
  },
  {
    icon: <FaCode className="text-green-500 text-2xl" />,
    title: "Mini Task",
    desc: "Rebuild a simple Figma page using Replo or your preferred builder",
  },
  {
    icon: <FaPhone className="text-yellow-500 text-2xl" />,
    title: "Review Call",
    desc: "We’ll go over your task, your process, and your goals",
  },
  {
    icon: <FaRocket className="text-pink-500 text-2xl" />,
    title: "Offer",
    desc: "Let’s get to work 🎯",
  },
];

const HiringProcess = () => {
  return (
    <section className="bg-gray-50 py-16 px-6" data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Hiring Process
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gray-100 p-3 rounded-full">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
