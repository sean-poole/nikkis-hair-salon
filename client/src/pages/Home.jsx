import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main--container">
      <div className="container right--container home--container">
        <h2 className="m-0 pb-2">About Us</h2>
        <div className="home--content align-items-start">
          <p><strong>Welcome</strong> to Nikki&#39;s Beauty Salon, a full-service lifestyle salon located in the metro region of Los Angeles. We specialize in precision haircuts, custom hair color, makeup application, and skincare, all tailored to enhance your natural beauty. At Nikki&#39;s, we believe your hair is your crowning glory, and our mission is to deliver top-tier beauty services in a relaxed and welcoming environment. Our talented stylists bring a wealth of creativity and expertise to every appointment, ensuring you leave not only looking your best but also feeling confident and informed about maintaining your style and skin health. We are passionate about helping you achieve and sustain a look that&#39;s both elegant and healthy.</p>
        
          <img 
            className="home--img"
            src="/images/home/about.jpg" 
            alt="Salon image"
          />
        </div>
      </div>
      <div className="container left--container home--container">
        <h2 className="m-0 pb-2">Store Hours</h2>
        <div className="home--content">
          <img 
            className="home--img"
            src="/images/home/store-hours.jpg" 
            alt="Salon image"
          />
          <div className="fs-6">
            <p>Monday: Closed</p>
            <p>Tuesday - Friday: 9am - 7pm</p>
            <p className="mb-5">Saturday - Sunday: 9am - 5pm</p>
            <Link to="/booking" className="home--link">&gt; Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="container right--container home--container">
        <h2 className="m-0 pb-2">Our Team</h2>
        <div className="home--content">
          <div className="">
            <p className="mb-5">We believe ongoing education and exploration are key to individually tailoring our services to the needs, style, and flair of each guest. Tell us what you wish to do with your hair, and we&#39;ll make it happen.</p>
            <Link to="/Staff" className="home--link">&gt; Meet Us</Link>
          </div>
          <img 
            className="home--img"
            src="/images/home/customer.jpg" 
            alt="Salon image"
          />
        </div>
      </div>
    </div>
  );
}
