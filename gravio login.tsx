"use client";

import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Details",
        text: "Please fill all the fields.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message || "Invalid login details.",
        });
        return;
      }

      await Swal.fire({
        icon: "success",
        title: "Welcome Back!",
        text: "Login successful.",
        timer: 1500,
        showConfirmButton: false,
      });

      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unable to connect to server.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="overlay"></div>

      <div className="login-area">

      

        <div className="gravio-brand">
          <div className="gravio-icon">
            G
          </div>

          <div className="gravio-text">
            <h1>Gravio</h1>
            <p>Village Connect Delivery</p>
          </div>
        </div>


        <div className="login-card">

          <div className="welcome">
            <h2>Welcome Back!</h2>
            <p>Sign in to continue to your account</p>
          </div>

          <form onSubmit={handleLogin}>

          

            <div className="name-row">

              <div className="input-group">
                <label>First Name</label>

                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(e.target.value)
                  }
                />
              </div>

              <div className="input-group">
                <label>Last Name</label>

                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(e.target.value)
                  }
                />
              </div>

            </div>

          

            <div className="input-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>

           

            <div className="input-group">

              <div className="password-header">
                <label>Password</label>

                <Link href="/forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <div className="password-wrapper">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>
            </div>

        

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

    

          <div className="register">
            Don't have an account?

            <Link href="/register">
              Register Now
            </Link>
          </div>

          <div className="security">
            🔒 Your information is secure
          </div>

        </div>
      </div>

      <style jsx>{`

        * {
          box-sizing: border-box;
        }



        .login-page {
          min-height: 100vh;

          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;

          padding: 25px 15px;

          background-image: url("/hero.jpg");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .overlay {
          position: absolute;
          inset: 0;

          background: rgba(0, 0, 0, 0.38);
        }

       

        .login-area {
          position: relative;

          z-index: 2;

          width: 100%;
          max-width: 440px;

          display: flex;

          flex-direction: column;

          align-items: center;
        }



        .gravio-brand {
          display: flex;

          align-items: center;

          gap: 11px;

          margin-bottom: 16px;

          color: white;

          filter:
            drop-shadow(
              0 5px 12px
              rgba(0, 0, 0, 0.35)
            );
        }

        .gravio-icon {
          width: 45px;
          height: 45px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 13px;

          background: white;

          color: #167653;

          font-size: 23px;

          font-weight: 900;

          box-shadow:
            0 7px 20px
            rgba(0, 0, 0, 0.25);
        }

        .gravio-text h1 {
          margin: 0;

          font-size: 29px;

          line-height: 1;

          font-weight: 850;

          letter-spacing: -0.5px;
        }

        .gravio-text p {
          margin: 3px 0 0;

          font-size: 9px;

          letter-spacing: 1px;

          text-transform: uppercase;

          color:
            rgba(255, 255, 255, 0.82);
        }


        .login-card {
          width: 100%;

          padding: 30px 34px;

          background: #ffffff;

          border: 3px solid #ffffff;

          border-radius: 20px;

          box-shadow:
            0 25px 60px
            rgba(0, 0, 0, 0.35);
        }

       

        .welcome {
          text-align: center;

          margin-bottom: 21px;
        }

        .welcome h2 {
          margin: 0;

          color: #1d332b;

          font-size: 23px;

          font-weight: 800;
        }

        .welcome p {
          margin: 5px 0 0;

          color: #888;

          font-size: 12px;
        }


        .input-group {
          margin-bottom: 14px;
        }

        .input-group label {
          display: block;

          margin-bottom: 5px;

          color: #29342f;

          font-size: 12px;

          font-weight: 700;
        }

        .input-group input {
          width: 100%;

          height: 43px;

          padding: 0 12px;

          border:
            1.5px solid #dce3df;

          border-radius: 9px;

          background: #ffffff;

          color: #222;

          outline: none;

          font-size: 13px;

          transition: 0.2s;
        }

        .input-group input::placeholder {
          color: #aaa;
        }

        .input-group input:focus {
          border-color: #167653;

          box-shadow:
            0 0 0 3px
            rgba(22, 118, 83, 0.08);
        }

    

        .name-row {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 11px;
        }

      

        .password-header {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 5px;
        }

        .password-header label {
          margin: 0;
        }

        .password-header a {
          color: #167653;

          font-size: 11px;

          font-weight: 700;

          text-decoration: none;
        }

        .password-wrapper {
          position: relative;
        }

        .password-wrapper input {
          padding-right: 60px;
        }

        .password-wrapper button {
          position: absolute;

          right: 10px;

          top: 50%;

          transform:
            translateY(-50%);

          border: none;

          background: transparent;

          color: #167653;

          font-size: 11px;

          font-weight: 700;

          cursor: pointer;
        }

    

        .login-button {
          width: 100%;

          height: 44px;

          margin-top: 3px;

          border: none;

          border-radius: 9px;

          background: #167653;

          color: white;

          font-size: 14px;

          font-weight: 800;

          cursor: pointer;

          transition: 0.2s;

          box-shadow:
            0 7px 18px
            rgba(22, 118, 83, 0.20);
        }

        .login-button:hover {
          background: #105d42;

          transform:
            translateY(-1px);
        }

        .login-button:disabled {
          opacity: 0.65;

          cursor: not-allowed;

          transform: none;
        }


        .register {
          margin-top: 17px;

          text-align: center;

          color: #777;

          font-size: 12px;
        }

        .register a {
          margin-left: 5px;

          color: #167653;

          font-weight: 750;

          text-decoration: none;
        }

    

        .security {
          margin-top: 12px;

          text-align: center;

          color: #aaa;

          font-size: 10px;
        }

    

        @media (max-width: 550px) {

          .login-page {
            padding: 20px 12px;
          }

          .login-area {
            max-width: 400px;
          }

          .login-card {
            padding: 27px 20px;

            border-width: 2px;

            border-radius: 18px;
          }

          .name-row {
            grid-template-columns: 1fr;

            gap: 0;
          }

          .gravio-icon {
            width: 42px;
            height: 42px;

            font-size: 21px;
          }

          .gravio-text h1 {
            font-size: 27px;
          }
        }

      `}</style>
    </main>
  );
}
