const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <p>© {currYear} SENSAI. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
