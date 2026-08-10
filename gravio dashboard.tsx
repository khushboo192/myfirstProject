
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Package,
  ClipboardList,
  Truck,
  MapPin,
  Wallet,
  Ticket,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  User,
} from "lucide-react";

import "./dashboard.css";

type QuickCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const quickCards: QuickCard[] = [
  {
    title: "Book Delivery",
    description: "Send anything to anywhere",
    image: "/emoji/box.png",
    href: "/book-delivery",
  },
  {
    title: "My Orders",
    description: "View and manage your orders",
    image: "/emoji/clipboard.png",
    href: "/my-orders",
  },
  {
    title: "Track Order",
    description: "Track your order in real-time",
    image: "/emoji/truck.png",
    href: "/track-order",
  },
  {
    title: "Nearby Partners",
    description: "Find delivery partners near you",
    image: "/emoji/partner.png",
    href: "/nearby-partners",
  },
  {
    title: "Food Delivery",
    description: "Order food from local restaurants",
    image: "/emoji/hamburger.png",
    href: "/food-delivery",
  },
  {
    title: "Village Shops",
    description: "Shop from local village shops",
    image: "/emoji/shop.png",
    href: "/village-shops",
  },
  {
    title: "Grocery Delivery",
    description: "Get groceries delivered",
    image: "/emoji/grocery.png",
    href: "/grocery-delivery",
  },
  {
    title: "Medicine Delivery",
    description: "Order medicines quickly",
    image: "/emoji/medicine.png",
    href: "/medicine-delivery",
  },
  {
    title: "Saved Addresses",
    description: "Manage your saved addresses",
    image: "/emoji/location.png",
    href: "/addresses",
  },
  {
    title: "Wallet & Payments",
    description: "Manage wallet and payments",
    image: "/emoji/wallet.png",
    href: "/wallet",
  },
  {
    title: "Offers & Coupons",
    description: "View latest offers and discounts",
    image: "/emoji/coupon.png",
    href: "/offers",
  },
  {
    title: "Rate Delivery",
    description: "Rate your delivery experience",
    image: "/emoji/star.png",
    href: "/rate-delivery",
  },
  {
    title: "Delivery History",
    description: "View your past deliveries",
    image: "/emoji/history.png",
    href: "/delivery-history",
  },
  {
    title: "Support / Help",
    description: "We are here to help you",
    image: "/emoji/support.png",
    href: "/support",
  },
  {
    title: "Feedback",
    description: "Share your feedback with us",
    image: "/emoji/feedback.png",
    href: "/feedback",
  },
];

const menuItems = [
  {
    name: "Home",
    icon: Home,
    href: "/",
  },
  {
    name: "Book Delivery",
    icon: Package,
    href: "/book-delivery",
  },
  {
    name: "My Orders",
    icon: ClipboardList,
    href: "/my-orders",
  },
  {
    name: "Track Order",
    icon: Truck,
    href: "/track-order",
  },
  {
    name: "Nearby Partners",
    icon: MapPin,
    href: "/nearby-partners",
  },
  {
    name: "Wallet & Payments",
    icon: Wallet,
    href: "/wallet",
  },
  {
    name: "Saved Addresses",
    icon: MapPin,
    href: "/addresses",
  },
  {
    name: "Offers & Coupons",
    icon: Ticket,
    href: "/offers",
  },
  {
    name: "Notifications",
    icon: Bell,
    href: "/notifications",
    badge: 3,
  },
  {
    name: "Support / Help",
    icon: HelpCircle,
    href: "/support",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    name: "Logout",
    icon: LogOut,
    href: "/logout",
  },
];

export default function Dashboard() {
  const pathname = usePathname();

  return (
    <div className="dashboard">

      <aside className="sidebar">

  

        <Link href="/" className="logo-area">
          <div className="logo-truck">🚚</div>

          <div>
            <h1>Gravio</h1>
            <span>Delivery Network</span>
          </div>
        </Link>


   

        <nav className="sidebar-menu">

          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/" &&
                pathname.startsWith(item.href));

            return (
              <Link
                href={item.href}
                key={item.name}
                className={`menu-item ${
                  isActive ? "active" : ""
                }`}
              >
                <Icon
                  size={21}
                  strokeWidth={1.8}
                />

                <span>{item.name}</span>

                {item.badge && (
                  <span className="notification-badge">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

        </nav>


      

        <div className="join-card">

          <div>
            <span>Become a</span>

            <strong>Delivery Partner</strong>

            <p>Earn with Gravio</p>

            <Link href="/join-delivery">
              <button type="button">
                Join Now
              </button>
            </Link>
          </div>

          <div className="join-scooter">
            🛵
          </div>

        </div>

      </aside>


      

      <main className="main-content">


        <section className="hero">

          <div className="hero-content">

   

            <div className="hero-top">


              <div>

                <p className="good-morning">
                  Hello, 👋
                </p>

                <h2>
                  Welcome to Gravio!
                </h2>

                <p className="welcome">
                  Your trusted delivery network, connecting
                  you to everything you need.
                </p>

              </div>


           

              <div className="profile-area">

                <Link
                  href="/notifications"
                  className="notification-button"
                >
                  <Bell size={21} />
                  <span>3</span>
                </Link>


                <Link
                  href="/profile"
                  className="profile"
                >

                  <div className="profile-avatar">
                    <User size={21} />
                  </div>

                  <strong>Profile</strong>

                  <span>⌄</span>

                </Link>

              </div>

            </div>


          

            <div className="stats-grid">

       

              <Link
                href="/my-orders"
                className="stat-card"
              >

                <div className="stat-icon blue">
                  <Package />
                </div>

                <div>
                  <p>Active Orders</p>

                  <h3>2</h3>

                  <span>
                    View Details →
                  </span>
                </div>

              </Link>


           

              <Link
                href="/track-order"
                className="stat-card"
              >

                <div className="stat-icon green">
                  <Truck />
                </div>

                <div>
                  <p>In Transit</p>

                  <h3>1</h3>

                  <span className="green-link">
                    Track Now →
                  </span>
                </div>

              </Link>


           

              <Link
                href="/wallet"
                className="stat-card"
              >

                <div className="stat-icon purple">
                  <Wallet />
                </div>

                <div>
                  <p>Wallet Balance</p>

                  <h3>₹850.00</h3>

                  <span className="purple-link">
                    View Wallet →
                  </span>
                </div>

              </Link>


        

              <Link
                href="/notifications"
                className="stat-card"
              >

                <div className="stat-icon yellow">
                  <Bell />
                </div>

                <div>
                  <p>Notifications</p>

                  <h3>3</h3>

                  <span className="yellow-link">
                    View All →
                  </span>
                </div>

              </Link>

            </div>

          </div>

        </section>


      

        <section className="cards-section">

          <div className="cards-grid">

            {quickCards.map((card) => {

              const isActive =
                pathname === card.href ||
                pathname.startsWith(card.href);

              return (
                <Link
                  href={card.href}
                  key={card.title}
                  className={`quick-card ${
                    isActive ? "card-active" : ""
                  }`}
                >

                  <div className="emoji-box">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="emoji-3d"
                    />

                  </div>

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.description}
                  </p>

                </Link>
              );

            })}

          </div>

        </section>

      </main>

    </div>
  );
}

