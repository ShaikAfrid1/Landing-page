import { FaCheckCircle } from "react-icons/fa";

const tasks = [
  "Convert Figma designs into responsive, high-converting landing pages using builders like Replo, PageFly, or others",
  "Build modular layouts that are clean, scalable, and maintain design consistency",
  "Set up basic animations, interactions, and app embeds as needed",
  "Collaborate with designers and devs to ensure pixel-perfect output",
  "Optimize pages for speed, mobile responsiveness, and user experience",
  "Occasionally write or edit HTML/CSS/JS inside builder environments or theme files",
];
const Responsibilites = () => {
  return (
    <section className="bg-gray-50 py-16 px-6" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          What You’ll Be Doing
        </h2>
        <ul className="space-y-6">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <p className="text-gray-700 text-lg">{task}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Responsibilites;
