const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between p-5">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">
            BUYGET ICT HUB in partnership with QuiverTech
          </h2>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Useful Links</h2>
          <ul className="text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/students" className="hover:underline">
                Admission
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Socials</h2>
          <ul className="text-sm">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Whatsapp
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Snapchat
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Telegram
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="text-sm">
            <i className="fas fa-phone"></i> +233 24 317 2205
          </p>
          <p className="text-sm">
            <i className="fas fa-phone"></i> +233 50 549 1381
          </p>
          <p className="text-sm">
            <i className="fas fa-envelope"></i> shsweb.gh@gmail.com
          </p>
        </div>
      </div>
      <div className="container mx-auto text-center text-sm mt-8">
        <p>
          &copy; 2024 BUYGET ICT HUB in partnership with QuiverTech. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
