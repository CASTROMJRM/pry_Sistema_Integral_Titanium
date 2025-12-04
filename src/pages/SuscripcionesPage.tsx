import React, { useState, useEffect } from "react";
import "../styles/suscripciones.css";
import Logo from "../assets/LogoP.png";
import { Link } from "react-router-dom";

// Datos de las membresías
const memberships = [
  {
    id: 1,
    name: "CARTE BLANCHE",
    level: "BÁSICO",
    price: 299,
    duration: "mes",
    color: "white",
    features: [
      "Acceso a área de pesas",
      "Clases grupales básicas",
      "Vestidores y regaderas",
      "App Titanium básica",
      "Horario estándar",
      "Sin permanencia",
    ],
    popular: false,
    description: "Perfecto para comenzar tu journey fitness",
  },
  {
    id: 2,
    name: "TITANIUM ROJO",
    level: "MÁS POPULAR",
    price: 499,
    duration: "mes",
    color: "red",
    features: [
      "Todo lo del plan Básico",
      "Acceso 24/7",
      "Clases grupales premium",
      "Área cardio completo",
      "App Titanium premium",
      "2 sesiones con entrenador",
      "Evaluación física mensual",
      "Estacionamiento preferente",
    ],
    popular: true,
    description: "El equilibrio perfecto entre calidad y precio",
  },
  {
    id: 3,
    name: "TITANIUM NEGRO",
    level: "PREMIUM",
    price: 799,
    duration: "mes",
    color: "black",
    features: [
      "Todo lo del plan Estándar",
      "Entrenador personal dedicado",
      "Acceso a zona VIP",
      "Nutricionista certificado",
      "Plan alimenticio personalizado",
      "Sesiones ilimitadas con coach",
      "Invitados gratis (2 por mes)",
      "Lockers premium",
    ],
    popular: false,
    description: "Experiencia fitness de élite completa",
  },
];

const services = [
  {
    title: "Entrenamiento Personalizado",
    desc: "Programas diseñados específicamente para tus objetivos con seguimiento constante de nuestros coaches certificados.",
    icon: "💪",
  },
  {
    title: "Asesoría Nutricional",
    desc: "Planes alimenticios personalizados y suplementación guiada por expertos en nutrición deportiva.",
    icon: "🥗",
  },
  {
    title: "Clases Grupales",
    desc: "HIIT, Yoga, Box, Spinning y más. Más de 45 clases semanales para mantener tu motivación al máximo.",
    icon: "👥",
  },
  {
    title: "Zona de Pesas Premium",
    desc: "Equipamiento Hammer Strength, racks olímpicos y área de peso libre completamente equipada.",
    icon: "🏋️",
  },
  {
    title: "App Titanium",
    desc: "Seguimiento de progreso, reservación de clases, planificación de workouts y comunidad exclusiva.",
    icon: "📱",
  },
  {
    title: "Área de Recuperación",
    desc: "Sauna, zona de stretching y recuperación activa para optimizar tu rendimiento.",
    icon: "🧘",
  },
];

export default function ServicesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Servicios");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getMembershipColor = (color) => {
    switch (color) {
      case "white":
        return "#ffffff";
      case "red":
        return "#ef4444";
      case "black":
        return "#1a1a1a";
      default:
        return "#1a1a1a";
    }
  };

  const getTextColor = (color) => {
    return color === "white" ? "#1a1a1a" : "#ffffff";
  };

  const getBorderColor = (color) => {
    return color === "white" ? "#e5e5e5" : getMembershipColor(color);
  };

  return (
    <div className="page-container">
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="bg-grid" />
        <div className="bg-glow bg-glow-1" />
        <div className="bg-glow bg-glow-2" />
      </div>

      {/* Header */}
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-content">
          <div className="logo-container">
            <Link to="/">
              <img src={Logo} alt="Titanium Sport Gym" className="logo-image" />
            </Link>
          </div>

          <nav className="nav-desktop">
            <div className="nav-main-links">
              <a
                href="/"
                className="nav-link"
                onClick={() => setCurrentPage("Inicio")}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                INICIO
                <span className="nav-underline" />
              </a>
              <Link to="/catalogue" className="nav-link">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                PRODUCTOS
                <span className="nav-underline" />
              </Link>

              <Link to="/suscripciones" className="nav-link">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                SUSCRIPCIONES
                <span className="nav-underline" />
              </Link>

              <Link to="#" className="nav-link">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                ACERCA DE NOSOTROS
                <span className="nav-underline" />
              </Link>
            </div>

            <div className="nav-action-links">
              <div className="nav-divider" />
              <Link to="/register" className="slider-btn-outline">
                SUSCRIBETE
              </Link>
              <Link to="/login" className="slider-btn-solid">
                INICIA SESIÓN
              </Link>
            </div>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <Link to="/" className="mobile-nav-link">
                INICIO
              </Link>
              <Link to="/catalogo" className="mobile-nav-link">
                PRODUCTOS
              </Link>
              <a
                href="#"
                className="mobile-nav-link active"
                onClick={() => setCurrentPage("Servicios")}
              >
                SERVICIOS
              </a>
              <a
                href="#"
                className="mobile-nav-link"
                onClick={() => setCurrentPage("Acerca de")}
              >
                ACERCA DE
              </a>
              <div className="mobile-nav-buttons">
                <Link to="/register" className="slider-btn-outline">
                  SUSCRÍBETE
                </Link>
                <Link to="/login" className="slider-btn-solid">
                  INICIA SESIÓN
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              INICIO
            </Link>
          </li>
          <li className="breadcrumb-separator">/</li>
          <li className="breadcrumb-item">
            <span className="breadcrumb-current">{currentPage}</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section Compacta */}
      <section className="subs-hero-compact">
        <div className="subs-hero-content-compact">
          <div className="subs-hero-text">
            <h1 className="subs-title-compact brush-text">MEMBRESÍAS TITANIUM</h1>
            <p className="subs-subtitle-compact">
              Elige el plan perfecto para tu transformación. 
              <span className="highlight-red"> Primera semana GRATIS</span> en todos los planes.
            </p>
          </div>
          <div className="subs-hero-cta">
            <a href="#planes" className="subs-hero-btn">
              VER PLANES
              <svg
                className="subs-btn-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="subs-hero-benefits">
          <div className="benefit-item">
            <svg className="benefit-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sin contratos</span>
          </div>
          <div className="benefit-item">
            <svg className="benefit-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancelación gratuita</span>
          </div>
          <div className="benefit-item">
            <svg className="benefit-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Asesoría incluida</span>
          </div>
        </div>
      </section>

      {/* Sección de Planes (PRIMERA SECCIÓN VISIBLE) */}
      <section id="planes" className="subs-memberships-section">
        <div className="section-header">
          <h2 className="section-title brush-title">
            ELIGE TU <span className="text-red">PLAN IDEAL</span>
          </h2>
          <p className="section-subtitle">
            Tres opciones diseñadas para cada nivel de compromiso fitness
          </p>
        </div>
        
        <div className="subs-memberships-container">
          <div className="subs-memberships-grid">
            {memberships.map((membership) => (
              <div
                key={membership.id}
                className={`subs-membership-card ${
                  membership.popular ? "subs-membership-popular" : ""
                }`}
                style={{
                  background: getMembershipColor(membership.color),
                  color: getTextColor(membership.color),
                  border: `2px solid ${getBorderColor(membership.color)}`,
                }}
              >
                {membership.popular && (
                  <div className="subs-popular-badge">MÁS POPULAR</div>
                )}
                <div className="subs-membership-header">
                  <div
                    className="subs-membership-level"
                    style={{
                      color:
                        membership.color === "white" ? "#ef4444" : "#ffffff",
                      opacity: 1,
                    }}
                  >
                    {membership.level}
                  </div>
                  <h3
                    className="subs-membership-name brush-text"
                    style={{
                      color:
                        membership.color === "white" ? "#1a1a1a" : "#ffffff",
                      background:
                        membership.color === "white" ? "none" : undefined,
                      WebkitBackgroundClip:
                        membership.color === "white" ? "initial" : undefined,
                      WebkitTextFillColor:
                        membership.color === "white" ? "#1a1a1a" : undefined,
                    }}
                  >
                    {membership.name}
                  </h3>
                  <p
                    className="subs-membership-description"
                    style={{
                      color:
                        membership.color === "white" ? "#1a1a1a" : "#ffffff",
                    }}
                  >
                    {membership.description}
                  </p>
                </div>
                <div className="subs-membership-price">
                  <span
                    className="subs-price-currency"
                    style={{
                      color:
                        membership.color === "white" ? "#1a1a1a" : "#ffffff",
                    }}
                  >
                    $
                  </span>
                  <span
                    className="subs-price-amount"
                    style={{
                      color:
                        membership.color === "white" ? "#1a1a1a" : "#ffffff",
                    }}
                  >
                    {membership.price}
                  </span>
                  <span
                    className="subs-price-duration"
                    style={{
                      color:
                        membership.color === "white" ? "#1a1a1a" : "#ffffff",
                    }}
                  >
                    /{membership.duration}
                  </span>
                </div>
                <ul className="subs-membership-features">
                  {membership.features.map((feature, index) => (
                    <li key={index} className="subs-feature-item">
                      <svg
                        className="subs-feature-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{
                          color:
                            membership.color === "white"
                              ? "#ef4444"
                              : "#ffffff",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        style={{
                          color:
                            membership.color === "white"
                              ? "#1a1a1a"
                              : "#ffffff",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="/payment">
                  <button
                    className={`subs-membership-btn ${
                      membership.color === "white"
                        ? "subs-btn-outline"
                        : "subs-btn-solid"
                    }`}
                    style={{
                      background:
                        membership.color === "white"
                          ? "transparent"
                          : getMembershipColor(membership.color),
                      color:
                        membership.color === "white" ? "#1a1a1a" : "#ffffff",
                      borderColor:
                        membership.color === "white"
                          ? "#1a1a1a"
                          : getMembershipColor(membership.color),
                    }}
                  >
                    ELEGIR PLAN
                    <svg
                      className="subs-btn-arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        color:
                          membership.color === "white" ? "#1a1a1a" : "#ffffff",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner de Promoción (ANTES de los servicios) */}
      <section className="promo-banner">
        <div className="promo-content">
          <div className="promo-text">
            <h3 className="promo-title brush-text">
              <span className="text-red">1 SEMANA GRATIS</span> + 20% DESCUENTO
            </h3>
            <p className="promo-subtitle">
              Al suscribirte hoy mismo. Oferta válida por tiempo limitado.
            </p>
          </div>
          <div className="promo-cta">
            <Link to="/register" className="promo-btn-primary">
              APROVECHAR OFERTA
              <svg
                className="promo-btn-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <a href="tel:+521234567890" className="promo-btn-secondary">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              LLAMAR AHORA
            </a>
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="subs-services-section">
        <div className="section-header">
          <h2 className="section-title brush-title">
            SERVICIOS <span className="text-red">TITANIUM</span>
          </h2>
          <p className="section-subtitle">
            Más que un gimnasio, somos tu partner en el journey fitness.
          </p>
        </div>

        <div className="subs-services-grid">
          {services.map((service, index) => (
            <div key={index} className="subs-service-card">
              <div className="subs-service-icon">{service.icon}</div>
              <div className="subs-service-content">
                <h3 className="subs-service-title">{service.title}</h3>
                <p className="subs-service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2 className="section-title brush-title">
            PREGUNTAS <span className="text-red">FRECUENTES</span>
          </h2>
        </div>
        
        <div className="faq-container">
          <div className="faq-item">
            <button className="faq-question">
              ¿Puedo cambiar de plan después?
              <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="faq-answer">
              Sí, puedes cambiar a cualquier plan en cualquier momento sin costos adicionales.
            </div>
          </div>
          
          <div className="faq-item">
            <button className="faq-question">
              ¿Cómo funciona la semana gratis?
              <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="faq-answer">
              La primera semana es completamente gratis. Si decides quedarte, se aplicará el pago mensual a partir de la segunda semana.
            </div>
          </div>
          
          <div className="faq-item">
            <button className="faq-question">
              ¿Hay contratos de permanencia?
              <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="faq-answer">
              No, todos nuestros planes son mensuales sin contratos de permanencia. Puedes cancelar en cualquier momento.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="smart-footer">
        <div className="footer-main">
          <div className="footer-content">
            <div className="footer-brand">
              <img
                src={Logo}
                alt="Titanium Sport Gym"
                className="footer-logo"
              />
              <div className="social-links">
                <span className="follow-text">SÍGUENOS</span>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-columns">
              <div className="footer-column">
                <h4 className="footer-column-title">Titanium</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="footer-link">
                      Quiénes somos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Contáctanos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Aviso de Privacidad
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">Membresías</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="footer-link">
                      Carte Blanche
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Titanium Rojo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Titanium Negro
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Promociones
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">Servicios</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="footer-link">
                      Entrenamiento Personal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Nutrición
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Clases Grupales
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Trabaja con nosotros
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-disclaimer">
              *Primera semana gratis aplica para nuevos miembros. Consulta
              términos y condiciones completos.
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Titanium Sport Gym. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}