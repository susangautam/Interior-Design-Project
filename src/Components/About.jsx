import { useState } from "react";

const About = () => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const toggleDescription = () => setDescriptionExpanded(!descriptionExpanded);

  return (
    <section id="about" className="py-16 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="mx-auto max-w-xl">
          <div
            className={`relative overflow-hidden transition-[max-height] duration-700 ease-in-out ${
              descriptionExpanded ? "max-h-screen" : "max-h-32"
            }`}
          >
            <p className="text-left leading-relaxed">
              Experience the pinnacle of interior design with a company dedicated to
              transforming spaces with innovative, high-quality solutions. Our expert
              team crafts bespoke designs tailored to your unique style, incorporating the
              latest trends and technologies for a seamless blend of beauty and functionality.
            </p>
          </div>
          <div className="mt-4">
            <button
              onClick={toggleDescription}
              className="bg-gray-800 border border-gray-600 py-2 px-6 rounded text-sm hover:bg-gray-700 hover:border-white transition-all"
            >
              {descriptionExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
