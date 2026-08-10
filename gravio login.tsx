"use client";

import {
  Home,
  Package,
  ClipboardList,
  Truck,
  MapPin,
  Wallet,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  Store,
  Utensils,
  Pill,
  ShoppingBasket,
  ChevronRight,
  Clock3,
  CheckCircle2,
  ArrowUpRight,
  CreditCard,
  Star,
  UserRound,
} from "lucide-react";

import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brandIcon">🚚</div>

          <div>
            <h1>Gravio</h1>
            <p>Delivery Network</p>
          </div>
        </div>

        <div className="menuTitle">MAIN MENU</div>

        <nav className="navigation">

          <a className="navItem active">
            <Home size={19} />
            <span>Dashboard</span>
          </a>

          <a className="navItem">
            <Package size={19} />
            <span>Book Delivery</span>
          </a>

          <a className="navItem">
            <ClipboardList size={19} />
            <span>My Orders</span>
          </a>

          <a className="navItem">
            <Truck size={19} />
            <span>Track Delivery</span>
          </a>

          <a className="navItem">
            <MapPin size={19} />
            <span>Addresses</span>
          </a>

          <a className="navItem">
            <Wallet size={19} />
            <span>Wallet</span>
          </a>

        </nav>

        <div className="menuTitle secondTitle">ACCOUNT</div>

        <nav className="navigation">

          <a className="navItem">
            <Bell size={19} />
            <span>Notifications</span>
            <small>3</small>
          </a>

          <a className="navItem">
            <UserRound size={19} />
            <span>Profile</span>
          </a>

          <a className="navItem">
            <HelpCircle size={19} />
            <span>Help Center</span>
          </a>

          <a className="navItem">
            <Settings size={19} />
            <span>Settings</span>
          </a>

        </nav>

        {/* Partner Card */}
        <div className="partnerBox">

          <div>
            <span>Earn with Gravio</span>
            <h3>Become a<br />Delivery Partner</h3>

            <button>
              Join Now
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="partnerVehicle">🛵</div>

        </div>

        <button className="logout">
          <LogOut size={18} />
          Logout
        </button>

      </aside>


      {/* ================= MAIN ================= */}
      <main className="mainContent">

        {/* HEADER */}
        <header className="topbar">

          <div>
            <p className="pageLabel">DASHBOARD</p>
            <h2>Overview</h2>
          </div>

          <div className="topActions">

            <button className="notification">
              <Bell size={20} />
              <i>3</i>
            </button>

            <div className="userProfile">
              <div className="userAvatar">👩</div>

              <div>
                <strong>Khushboo</strong>
                <span>Customer</span>
              </div>

              <span className="downArrow">⌄</span>
            </div>

          </div>

        </header>


        {/* ================= HERO ================= */}
        <section className="welcomeHero">

          <div className="heroContent">

            <span className="hello">Good Morning 👋</span>

            <h1>
              Welcome back,
              <br />
              <strong>Khushboo!</strong>
            </h1>

            <p>
              Everything you need to manage your deliveries
              in one place.
            </p>

            <button className="primaryButton">
              <Package size={18} />
              Book a Delivery
              <ChevronRight size={17} />
            </button>

          </div>

          <div className="heroTruck">
            🚚
          </div>

        </section>


        {/* ================= STATS ================= */}
        <section className="statsGrid">

          <div className="statBox">

            <div className="statTop">
              <span>Active Orders</span>

              <div className="statIcon blue">
                <Package size={20} />
              </div>
            </div>

            <h3>02</h3>

            <p className="positive">
              <ArrowUpRight size={14} />
              1 new today
            </p>

          </div>


          <div className="statBox">

            <div className="statTop">
              <span>Completed</span>

              <div className="statIcon green">
                <CheckCircle2 size={20} />
              </div>
            </div>

            <h3>18</h3>

            <p className="muted">
              Deliveries completed
            </p>

          </div>


          <div className="statBox">

            <div className="statTop">
              <span>Wallet Balance</span>

              <div className="statIcon purple">
                <Wallet size={20} />
              </div>
            </div>

            <h3>₹850</h3>

            <p className="muted">
              Available balance
            </p>

          </div>


          <div className="statBox">

            <div className="statTop">
              <span>Rating</span>

              <div className="statIcon yellow">
                <Star size={20} />
              </div>
            </div>

            <h3>4.8</h3>

            <p className="positive">
              ★ Excellent rating
            </p>

          </div>

        </section>


        {/* ================= CONTENT GRID ================= */}
        <section className="contentGrid">

          {/* QUICK SERVICES */}
          <div className="servicesPanel">

            <div className="sectionHeading">
              <div>
                <span>EXPLORE</span>
                <h2>Quick Services</h2>
              </div>

              <button>
                View all
                <ChevronRight size={16} />
              </button>
            </div>


            <div className="serviceGrid">

              <div className="serviceCard food">
                <div className="serviceIcon">
                  <Utensils size={23} />
                </div>

                <div>
                  <h3>Food</h3>
                  <p>Order from local restaurants</p>
                </div>

                <ChevronRight size={17} />
              </div>


              <div className="serviceCard grocery">
                <div className="serviceIcon">
                  <ShoppingBasket size={23} />
                </div>

                <div>
                  <h3>Grocery</h3>
                  <p>Daily essentials at your door</p>
                </div>

                <ChevronRight size={17} />
              </div>


              <div className="serviceCard medicine">
                <div className="serviceIcon">
                  <Pill size={23} />
                </div>

                <div>
                  <h3>Medicine</h3>
                  <p>Get essentials delivered</p>
                </div>

                <ChevronRight size={17} />
              </div>


              <div className="serviceCard shops">
                <div className="serviceIcon">
                  <Store size={23} />
                </div>

                <div>
                  <h3>Village Shops</h3>
                  <p>Shop from nearby stores</p>
                </div>

                <ChevronRight size={17} />
              </div>

            </div>

          </div>


          {/* RECENT ORDER */}
          <div className="orderPanel">

            <div className="sectionHeading">

              <div>
                <span>RECENT</span>
                <h2>Latest Order</h2>
              </div>

              <button>
                All orders
                <ChevronRight size={16} />
              </button>

            </div>


            <div className="orderCard">

              <div className="orderHeader">

                <div className="orderNumber">
                  <div className="packageIcon">
                    <Package size={22} />
                  </div>

                  <div>
                    <strong>#GRV-28491</strong>
                    <span>Today, 04:25 PM</span>
                  </div>
                </div>

                <span className="status">
                  In Transit
                </span>

              </div>


              <div className="route">

                <div className="routePoint">
                  <div className="dot pickup"></div>

                  <div>
                    <span>Pickup</span>
                    <strong>Village Market</strong>
                  </div>
                </div>


                <div className="routeLine"></div>


                <div className="routePoint">
                  <div className="dot destination"></div>

                  <div>
                    <span>Delivery</span>
                    <strong>Jind, Haryana</strong>
                  </div>
                </div>

              </div>


              <div className="deliveryProgress">

                <div className="progressTop">
                  <span>Delivery Progress</span>
                  <strong>65%</strong>
                </div>

                <div className="progressBar">
                  <div></div>
                </div>

              </div>


              <button className="trackButton">
                Track Order
                <ChevronRight size={16} />
              </button>

            </div>

          </div>

        </section>


        {/* ================= BOTTOM ================= */}
        <section className="bottomGrid">

          {/* WALLET */}
          <div className="walletPanel">

            <div className="walletHeader">

              <div>
                <span>YOUR WALLET</span>
                <h2>₹850.00</h2>
              </div>

              <div className="walletIcon">
                <CreditCard size={24} />
              </div>

            </div>

            <div className="walletFooter">
              <span>Available balance</span>

              <button>
                Add Money
                <ArrowUpRight size={15} />
              </button>
            </div>

          </div>


          {/* ACTIVITY */}
          <div className="activityPanel">

            <div className="sectionHeading">
              <div>
                <span>ACTIVITY</span>
                <h2>Recent Activity</h2>
              </div>
            </div>


            <div className="activityItem">

              <div className="activityIcon green">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>Delivery completed</strong>
                <span>Yesterday · ₹120</span>
              </div>

              <b>+₹120</b>

            </div>


            <div className="activityItem">

              <div className="activityIcon purple">
                <Wallet size={18} />
              </div>

              <div>
                <strong>Wallet recharge</strong>
                <span>2 days ago</span>
              </div>

              <b>+₹500</b>

            </div>

          </div>


          {/* SUPPORT */}
          <div className="supportPanel">

            <div className="supportIcon">
              <HelpCircle size={25} />
            </div>

            <div>
              <span>NEED HELP?</span>
              <h2>We're here for you</h2>
              <p>Have any questions about your delivery?</p>

              <button>
                Visit Help Center
                <ChevronRight size={15} />
              </button>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}
