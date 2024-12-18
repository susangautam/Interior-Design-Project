const Hero = () => {
    return (
      <section
        id="home"
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('hero.jpg')" }}
      >
        <div className="text-center text-white px-4">
          <h2 className="text-5xl font-bold">Interior Designs</h2>
          <h3 className="text-2xl mt-2">Transforming spaces, elevating lives.</h3>
          <p className="mt-4">
            Crafting unique interiors that reflect your style and enhance every moment.
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="border-2 border-transparent text-white py-2 px-4 rounded hover:border-gray-300">
              Order Now
            </button>
            <button className="border-2 border-white text-white py-2 px-4 rounded hover:border-gray-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  