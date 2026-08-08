"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import Swal from "sweetalert2";
import { GoogleLogin } from "@react-oauth/google";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        await Swal.fire({
          title: "🎉 Registration Successful!",
          text: "Your account has been created successfully.",
          icon: "success",
          confirmButtonColor: "#667eea",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Something went wrong.",
      });
    }
  };

  const handleGoogleSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Google Login Successful",
      text: "You have successfully signed in with Google.",
      confirmButtonColor: "#667eea",
    });
  };

  const handleGoogleError = () => {
    Swal.fire({
      icon: "error",
      title: "Google Login Failed",
      text: "Unable to sign in with Google.",
    });
  };

  return (
    <div className="page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="navLinks">
          <a href="/">Home</a>
          <a href="#about">About Us</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact</a>
          <a href="/login">Login</a>

          <a href="/register" className="getStarted">
            Get Started →
          </a>
        </div>
      </nav>

      {/* ================= REGISTER ================= */}

      <main className="registerSection">
        <div className="box">

          <h1>Create Account</h1>

          <p>Join Gravio Delivery Network</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="google">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                theme="outline"
                size="large"
                width="350"
              />
            </div>

            <button type="submit">
              Register
            </button>

          </form>
        </div>
      </main>

      {/* ================= CSS ================= */}

      <style jsx>{`

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        /* ================= PAGE ================= */

        .page {
          width: 100%;
          height: 100vh;

          position: relative;
          overflow: hidden;

          background-image:
            linear-gradient(
              rgba(20, 25, 50, 0.25),
              rgba(20, 25, 50, 0.25)
            ),
            url("/gravio.png");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* ================= NAVBAR ================= */

        .navbar {
          position: fixed;

          top: 20px;
          right: 3%;

          width: auto;
          min-width: 650px;
          height: 65px;

          display: flex;
          justify-content: flex-end;
          align-items: center;

          padding: 0 25px;

          background: transparent !important;

          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;

          border: none !important;
          outline: none !important;
          box-shadow: none !important;

          z-index: 100;
        }

        /* ================= NAV LINKS ================= */

        .navLinks {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          gap: 22px;
          white-space: nowrap;
        }

        .navLinks a {
          color: white;
          text-decoration: none;

          font-size: 14px;
          font-weight: 600;

          transition: 0.3s;
        }

        .navLinks a:hover {
          color: #e5e9ff;
        }

        /* ================= GET STARTED ================= */

        .getStarted {
          padding: 11px 18px;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              #667eea,
              #764ba2
            );

          color: white !important;

          box-shadow:
            0 6px 18px
            rgba(102, 126, 234, 0.35);
        }

        /* ================= FORM AREA ================= */

        .registerSection {
          position: fixed;

          inset: 0;

          width: 100%;
          height: 100vh;

          display: flex;

          /* FORM RIGHT SIDE */
          justify-content: flex-end;

          align-items: center;

          /* RIGHT SIDE GAP */
          padding: 100px 7% 20px 20px;

          z-index: 10;

          pointer-events: none;
        }

        /* ================= FORM CARD ================= */

        .box {
          width: 380px;

          padding: 30px;

          position: relative;

          box-sizing: border-box;

          pointer-events: auto;

          /* ROUNDED ALL 4 CORNERS */
          border-radius: 30px !important;

          /* GLASS EFFECT */
          background:
            rgba(
              255,
              255,
              255,
              0.20
            ) !important;

          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);

          /* BORDER ALL 4 SIDES */
          border:
            2px solid
            rgba(
              255,
              255,
              255,
              0.75
            ) !important;

          outline: none !important;

          overflow: hidden !important;

          box-shadow:
            0 25px 60px
            rgba(
              0,
              0,
              0,
              0.30
            );
        }

        /* ================= HEADING ================= */

        .box h1 {
          text-align: center;

          color: white;

          font-size: 28px;

          margin-bottom: 8px;
        }

        .box p {
          text-align: center;

          color:
            rgba(
              255,
              255,
              255,
              0.90
            );

          font-size: 14px;

          margin-bottom: 22px;
        }

        /* ================= INPUT ================= */

        .box input {
          width: 100%;
          height: 46px;

          margin-bottom: 13px;

          padding: 0 14px;

          border-radius: 12px;

          outline: none;

          font-size: 14px;

          color: white;

          background:
            rgba(
              255,
              255,
              255,
              0.18
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.35
            );

          transition: 0.3s;
        }

        .box input::placeholder {
          color:
            rgba(
              255,
              255,
              255,
              0.85
            );
        }

        .box input:focus {
          background:
            rgba(
              255,
              255,
              255,
              0.27
            );

          border-color:
            rgba(
              255,
              255,
              255,
              0.60
            );

          box-shadow:
            0 0 0 3px
            rgba(
              255,
              255,
              255,
              0.10
            );
        }

        /* ================= GOOGLE ================= */

        .google {
          width: 100%;

          min-height: 44px;

          display: flex;

          justify-content: center;
          align-items: center;

          margin-bottom: 16px;

          overflow: hidden;
        }

        .google :global(div) {
          max-width: 100% !important;
        }

        .google :global(iframe) {
          max-width: 100% !important;
        }

        /* ================= REGISTER BUTTON ================= */

        .box button {
          width: 100%;
          height: 48px;

          border: none;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              #667eea,
              #764ba2
            );

          color: white;

          font-size: 16px;
          font-weight: bold;

          cursor: pointer;

          transition: 0.3s;
        }

        .box button:hover {
          transform: translateY(-2px);

          box-shadow:
            0 12px 25px
            rgba(
              102,
              126,
              234,
              0.35
            );
        }

        /* ================= MOBILE ================= */

        @media (max-width: 750px) {

          .navbar {
            top: 10px;
            right: 2%;

            width: 96%;
            min-width: 0;

            height: 60px;

            padding: 0 12px;

            background: transparent !important;

            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;

            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          }

          .navLinks {
            width: 100%;

            justify-content: flex-end;

            gap: 10px;
          }

          .navLinks a:nth-child(2),
          .navLinks a:nth-child(3),
          .navLinks a:nth-child(4) {
            display: none;
          }

          .navLinks a {
            font-size: 13px;
          }

          .getStarted {
            padding: 9px 12px;
          }

          /* FORM RIGHT SIDE */

          .registerSection {
            justify-content: flex-end;

            align-items: center;

            padding:
              85px
              5%
              20px
              20px;
          }

          .box {
            width: 100%;

            max-width: 360px;

            padding: 26px 20px;

            border-radius: 30px !important;

            border:
              2px solid
              rgba(
                255,
                255,
                255,
                0.75
              ) !important;

            overflow: hidden !important;
          }

          .box h1 {
            font-size: 25px;
          }
        }

      `}</style>
    </div>
  );
}
