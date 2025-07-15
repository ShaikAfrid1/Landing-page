const perks = [
  {
    emoji: "🎨",
    title: "Bring Figma Designs to Life",
    desc: "Work on beautiful designs that get used by real brands.",
  },
  {
    emoji: "🧠",
    title: "Learn from the Best",
    desc: "Our team blends design and dev expertise — you’ll level up fast.",
  },
  {
    emoji: "🕐",
    title: "Flexible Hours",
    desc: "Work when you want. Just deliver top-quality work.",
  },
  {
    emoji: "🌍",
    title: "100% Remote",
    desc: "We’re async-friendly and fully remote – work from anywhere.",
  },
  {
    emoji: "🚀",
    title: "Meaningful Projects",
    desc: "You’ll build for startups doing real e-commerce magic.",
  },
];

const Perks = () => {
  return (
    <section className="bg-white py-16 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Why Work With Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl text-left"
            >
              <div className="text-4xl mb-4">{perk.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {perk.title}
              </h3>
              <p className="text-gray-600">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;
