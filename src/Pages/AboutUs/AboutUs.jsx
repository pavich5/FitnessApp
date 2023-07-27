import './AboutUs.css';
import { motion } from 'framer-motion';
const AboutUs = () => {
  return (
    <motion.div className="AboutUs"
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.7 }}>
      <div className="hero-section">
        <h1>Welcome to Our Fitness App</h1>
        <p>Empowering You to Reach Your Fitness Goals</p>
      </div>

      <div className="about-section">
        <h2>About Us</h2>
        <p>
          At FitnessX, we are passionate about empowering individuals to lead a healthy and active lifestyle. Our mission is to provide you with the tools and resources to reach your fitness goals and transform your life. We believe that everyone deserves access to reliable and personalized fitness solutions.
        </p>
        <p>
          Our team of dedicated fitness experts and nutritionists is committed to helping you on your fitness journey. Whether you are a beginner or an experienced fitness enthusiast, our app offers a wide range of exercise routines, nutrition plans, and expert guidance to meet your unique needs.
        </p>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://www.legendlondon.co/cdn/shop/products/legend-london-jeans-skinny-fit-jeans-vintage-stone-wash-32686264877253.jpg?v=1678140686" alt="John Doe" />
            <h3>John Doe</h3>
            <p>Co-Founder & Fitness Expert</p>
          </div>
          <div className="team-member">
            <img src="https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_WBtwVGtmKPv8pNus-3132-NOC.jpg?itok=FrrP-vVb" alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Co-Founder & Nutritionist</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to get in touch
          with us. We are here to help you on your fitness journey!
        </p>
        <a href="mailto:info@fitnessxapp.com">info@fitnessxapp.com</a>
      </div>
    </motion.div>
  );
};

export default AboutUs;
