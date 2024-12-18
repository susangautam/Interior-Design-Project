import { useState, useEffect } from "react";

const Services = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const target = document.getElementById("services");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section id="services" className="py-16 bg-gray-900 text-center">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-in-out ${
            inView ? "opacity-100 transform-none" : "opacity-0 transform translate-y-10"
          }`}
        >
          {[
            { title: "Residential Design", description: "Transforming your home into a haven with unique and bespoke interiors." },
            { title: "Commercial Design", description: "Crafting functional and appealing spaces for businesses and offices." },
            { title: "Custom Furniture", description: "High-quality custom furniture to complement your unique interiors." }
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
