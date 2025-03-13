const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12">
      <div className="flex justify-center items-center">
        <p className="text-gray-200">
          © {currYear} SENSAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
