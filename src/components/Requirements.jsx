import { FaStar, FaLightbulb, FaUserCheck } from "react-icons/fa";

const mustHave = [
  "Experience with page builders (Replo, PageFly, Framer, etc.)",
  "Strong HTML, CSS, and responsive design skills",
  "Can follow Figma designs closely",
  "Familiar with Shopify themes and storefronts",
  "Obsessed with spacing and typography details",
];

const bonus = [
  "Built landing pages with Replo before",
  "Basic JavaScript/jQuery for custom tweaks",
  "Familiar with Shopify Liquid & metafields",
  "Know how to animate inside page builders",
];

const softSkills = [
  "Perfectionist about matching designs",
  "Takes feedback and iterates fast",
  "Works independently & asks good questions",
  "Meets deadlines and estimates time well",
  "Googles like a pro when stuck",
];

const SkillCard = ({ icon, title, items }) => (
  <div
    className="bg-white shadow-md rounded-lg p-6 w-full transition-transform transform hover:scale-105 hover:shadow-xl hover:border hover:border-blue-200
"
    data-aos="fade-up"
  >
    <div className="flex items-center gap-3 mb-4 text-xl font-semibold text-gray-800">
      {icon}
      {title}
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="text-gray-700 text-base flex gap-2 items-start"
        >
          <span className="text-green-500 mt-1">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Requirements = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What We’re Looking For
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard
            icon={<FaStar className="text-yellow-500" />}
            title="Must-Have Skills"
            items={mustHave}
          />
          <SkillCard
            icon={<FaLightbulb className="text-purple-500" />}
            title="Bonus Points For"
            items={bonus}
          />
          <SkillCard
            icon={<FaUserCheck className="text-blue-500" />}
            title="Soft Skills That Shine"
            items={softSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Requirements;
