function Footer() {
  return (
    <footer className=" footer bg-dark text-light pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>About Us</h5>
            <p>
              Loop-Cart is your one-stop online shop for the latest electronics, fashion, and more.
              Quality products, fast delivery, and excellent customer service.
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: support@loopcart.com</li>
              <li>Phone: +91 9846590210</li>
              <li>Address: 123, Kerala, India</li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          © 2025 Loop-Cart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
