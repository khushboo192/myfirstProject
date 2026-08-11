"use client";

import Link from "next/link";
import {
  Package,
  ClipboardList,
  MapPin,
  Store,
  Utensils,
  ShoppingBasket,
  Pill,
  MapPinned,
  Wallet,
  Tag,
  ShieldCheck,
  Clock3,
  IndianRupee,
  Headphones,
  ArrowRight,
  Smartphone,
  Bike,
  Box,
  Hand,
  Users,
  Globe2,
} from "lucide-react";

import "./home.css";

const services = [
  ["Book Delivery", "Send anything to anywhere.", Package],
  ["My Orders", "View and manage your orders.", ClipboardList],
  ["Track Order", "Track your order in real-time.", MapPin],
  ["Nearby Partners", "Find delivery partners near you.", Store],
  ["Food Delivery", "Delicious food delivered fast.", Utensils],
  ["Grocery Delivery", "Daily essentials at your door.", ShoppingBasket],
  ["Medicine Delivery", "Medicines delivered safely.", Pill],
  ["Saved Addresses", "Save and manage your addresses.", MapPinned],
  ["Wallet & Payments", "Easy, secure and fast payments.", Wallet],
  ["Offers & Coupons", "Best offers and exciting discounts.", Tag],
];

const benefits = [
  ["Reliable & Secure", "Your parcels are safe with us, always.", ShieldCheck],
  ["On-Time Delivery", "We value your time and deliver on time.", Clock3],
  ["Affordable Rates", "Best delivery services at pocket-friendly prices.", IndianRupee],
  ["24/7 Support", "We're here to help you anytime.", Headphones],
];

export default function Home() {
  return (
    <main className="home">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <Link href="/" className="logo">
          <div className="logo-icon">G</div>

          <div>
            <strong>Gravio</strong>
            <small>Delivering Happiness</small>
          </div>
        </Link>

        <nav className="nav-links">
          <Link href="/" className="active">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#how-it-works">How It Works</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        <div className="nav-buttons">

          <Link href="/track-order" className="track">
            <MapPin size={17} />
            Track Order
          </Link>

          <Link href="/login" className="login">
            Login
          </Link>

          <Link href="/register" className="signup">
            Sign Up
          </Link>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            <Globe2 size={15} />
            Delivery Beyond Limits
          </div>

          <h1>
            Delivering Possibilities,
            <br />
            Connecting <span>Villages.</span>
          </h1>

          <p>
            Gravio is your trusted delivery partner that connects
            rural areas to the world. Fast, reliable and affordable
            delivery — for everyone, everywhere.
          </p>

          <div className="hero-buttons">

            <Link href="/book-delivery" className="primary-btn">
              <Package size={19} />
              Book a Delivery
              <ArrowRight size={17} />
            </Link>

            <Link href="/track-order" className="secondary-btn">
              <MapPin size={19} />
              Track Order
            </Link>

          </div>

        </div>


        {/* HERO STATS */}

        <div className="hero-stats">

          <div className="stat">
            <MapPinned />
            <div>
              <b>100+</b>
              <span>Villages Covered</span>
            </div>
          </div>

          <div className="stat">
            <Users />
            <div>
              <b>10K+</b>
              <span>Happy Customers</span>
            </div>
          </div>

          <div className="stat">
            <Bike />
            <div>
              <b>50+</b>
              <span>Delivery Partners</span>
            </div>
          </div>

          <div className="stat">
            <ShieldCheck />
            <div>
              <b>99%</b>
              <span>On-Time Delivery</span>
            </div>
          </div>

        </div>

      </section>


      {/* ================= WHY GRAVIO ================= */}

      <section className="why">

        <div className="heading">
          <h2>
            Why Choose <span>Gravio?</span>
          </h2>

          <p>
            We make delivery simple, accessible and reliable for everyone.
          </p>
        </div>

        <div className="benefits">

          {benefits.map(([title, description, Icon]) => {

            const IconComponent = Icon as React.ElementType;

            return (
              <div className="benefit" key={title as string}>

                <div className="benefit-icon">
                  <IconComponent size={27} />
                </div>

                <div>
                  <h3>{title as string}</h3>
                  <p>{description as string}</p>
                </div>

              </div>
            );

          })}

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="services" id="services">

        <div className="heading">

          <h2>
            Our <span>Services</span>
          </h2>

          <p>
            Everything you need, delivered to your doorstep.
          </p>

        </div>


        <div className="service-grid">

          {services.map(([title, description, Icon]) => {

            const IconComponent = Icon as React.ElementType;

            return (
              <Link
                href="/book-delivery"
                className="service-card"
                key={title as string}
              >

                <div className="service-icon">
                  <IconComponent size={38} />
                </div>

                <div className="service-info">

                  <h3>{title as string}</h3>

                  <p>{description as string}</p>

                  <span className="round-arrow">
                    <ArrowRight size={14} />
                  </span>

                </div>

              </Link>
            );

          })}

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="how" id="how-it-works">

        <div className="heading">

          <h2>
            How It <span>Works</span>
          </h2>

          <p>
            Getting your delivery done is simple.
          </p>

        </div>


        <div className="steps">

          <div className="step">

            <div className="number">1</div>

            <div className="step-icon">
              <Smartphone />
            </div>

            <h3>Book</h3>

            <p>
              Schedule your pickup in just a few clicks.
            </p>

          </div>


          <div className="line" />


          <div className="step">

            <div className="number">2</div>

            <div className="step-icon">
              <Bike />
            </div>

            <h3>We Pick Up</h3>

            <p>
              Our delivery partner picks up your parcel.
            </p>

          </div>


          <div className="line" />


          <div className="step">

            <div className="number">3</div>

            <div className="step-icon">
              <Box />
            </div>

            <h3>In Transit</h3>

            <p>
              We deliver it safely to the destination.
            </p>

          </div>


          <div className="line" />


          <div className="step">

            <div className="number">4</div>

            <div className="step-icon">
              <Hand />
            </div>

            <h3>Delivered</h3>

            <p>
              Your parcel reaches the right person.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta">

        <div className="cta-content">

          <h2>
            Delivering Happiness
            <br />
            to <span>Every Corner</span>
          </h2>

          <p>
            Join thousands of happy customers who trust Gravio
            for their delivery needs.
          </p>

          <div className="cta-buttons">

            <Link href="/register" className="cta-primary">
              Get Started
              <ArrowRight size={17} />
            </Link>

            <Link href="/partners" className="cta-secondary">
              <Users size={17} />
              Become a Partner
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-brand">

          <Link href="/" className="footer-logo">

            <div className="logo-icon">G</div>

            <div>
              <strong>Gravio</strong>
              <small>Delivering Happiness</small>
            </div>

          </Link>

          <p>
            Connecting villages to the world with trust,
            speed and care.
          </p>

        </div>


        <div className="footer-column">

          <h4>Company</h4>

          <Link href="/about">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>

        </div>


        <div className="footer-column">

          <h4>Support</h4>

          <Link href="/help">Help Center</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/shipping">Shipping & Delivery</Link>
          <Link href="/terms">Terms & Conditions</Link>

        </div>


        <div className="footer-column">

          <h4>Legal</h4>

          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/refund">Refund Policy</Link>
          <Link href="/cookies">Cookies Policy</Link>

        </div>


        <div className="copyright">
          © 2026 Gravio. All rights reserved.
        </div>

      </footer>

    </main>
  );
}
