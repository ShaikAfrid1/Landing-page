const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Built by{" "}
        <span className="font-semibold">Afrid</span> –
        <a
          href="https://github.com/ShaikAfrid1"
          target="_blank"
          className="text-blue-400 hover:underline ml-1"
        >
          GitHub
        </a>
        {" | "} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
