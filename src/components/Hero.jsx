const Hero = () => {
  return (
    <section className="text-center bg-blue-50 py-24 px-6" data-aos="fade-up">
      <h1 className="text-4xl  md:text-6xl mb-4 font-bold text-gray-900">
        Frontend Developer @ Inweave Studios
      </h1>
      <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6 ">
        Join Inweave Studios – remote, flexible, and pixel-perfect. Build
        stunning Shopify experiences with Replo and PageFly.
      </p>
      <a
        href="https://forms.gle/guBdFKH4NDRZ6c1E6"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition"
      >
        Apply Now
      </a>
    </section>
  );
};

export default Hero;
