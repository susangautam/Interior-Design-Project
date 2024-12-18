const Footer = () => {
    return (
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Interior Designs. All Rights Reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  