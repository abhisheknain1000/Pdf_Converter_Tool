import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="bg-secondBackgroundColor py-8">
      <div className="container mx-auto flex justify-center flex-col md:flex-row gap-8 px-10 md:px-14">
        <div className="md:flex-1">
          <h3 className="text-md font-bold tracking-wider mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-miniBlack hover:text-primaryColor">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex-1">
          <h3 className="text-md font-bold tracking-wider mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-miniBlack hover:text-primaryColor">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex-1">
          <h3 className="text-md font-bold tracking-wider mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-miniBlack hover:text-primaryColor">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="w-full h-[2px] bg-slate-500 mt-8" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mt-8 px-10 md:px-0">
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src="pdf.png" className="social-icon" alt="logo" />
            <h2 className="text-gradient font-bold font-title tracking-widest mt-2">PDFTOOL</h2>
          </div>
          <h3>
            <span className="font-bold text-miniBlack">Contact: </span>
            8126332140
          </h3>
          <h3>
            <span className="font-bold text-miniBlack">Email: </span>
            abhisheknain1000@gmail.com
          </h3>
          <p className="text-md font-bold text-miniBlack">© {getCurrentYear()} All Rights Reserved</p>
        </div>

        <div className="flex gap-6 justify-center md:justify-end mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=100016523588876&mibextid=LQQJ4d"
            className="hover:scale-110 transition-all"
            aria-label="Facebook"
          >
            <img className="social-icon" src="fb.svg" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?igsh=1fuqwwy2umhme&utm_content=20cygzt"
            className="hover:scale-110 transition-all"
            aria-label="Instagram"
          >
            <img className="social-icon" src="insta.svg" alt="Instagram" />
          </a>
          <a
            href="http://linkedin.com/in/abhishek-nain-062041215"
            className="hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <img className="social-icon" src="linkedin..svg" alt="LinkedIn" />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;