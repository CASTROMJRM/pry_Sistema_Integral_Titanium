import React, { useState, useEffect } from "react";
import "../styles/cataloge.css";
import Logo from "../assets/LogoP.png";
import { Link } from "react-router-dom";

// Datos de ejemplo para productos
const products = [
  {
    id: 1,
    name: "Proteína Whey Gold Standard",
    category: "PROTEÍNA",
    price: 899,
    image:
      "https://suplementosags.com/wp-content/uploads/2019/08/Comp-Gold-Standard-5Lbs-Marca-de-Agua.png",
    featured: true,
    description:
      "Proteína Whey de la más alta calidad con 24g de proteína por servicio. Ideal para ganancia muscular y recuperación post-entreno.",
    features: [
      "24g de proteína por servicio",
      "Bajo en lactosa",
      "Mezcla instantánea",
      "Sabor chocolate premium",
    ],
    specifications: {
      peso: "2.27 kg (5 lb)",
      sabores: ["Chocolate", "Vainilla", "Fresa"],
      servings: 74,
    },
  },
  {
    id: 2,
    name: "Creatina Monohidratada",
    category: "CREATINA",
    price: 599,
    image: "https://via.placeholder.com/300x300/ef4444/ffffff?text=CREATINA",
    featured: true,
    description:
      "Creatina monohidratada 100% pura. Aumenta tu fuerza y resistencia durante los entrenamientos de alta intensidad.",
    features: [
      "100% creatina monohidratada",
      "Aumenta fuerza y resistencia",
      "Mejora recuperación muscular",
      "Sin sabor, fácil de mezclar",
    ],
    specifications: {
      peso: "300 g",
      sabores: ["Natural"],
      servings: 100,
    },
  },
  {
    id: 3,
    name: "Pre-Entreno Explosive",
    category: "PRE-ENTRENO",
    price: 699,
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=PRE+ENTRENO",
    featured: false,
    description:
      "Pre-entreno de máxima potencia con beta-alanina y cafeína. Energía sostenida sin crash.",
    features: [
      "Energía inmediata",
      "Enfoque mental mejorado",
      "Bombeo muscular intenso",
      "Sin crash posterior",
    ],
    specifications: {
      peso: "400 g",
      sabores: ["Frutos Rojos", "Tropical Punch", "Limonada"],
      servings: 40,
    },
  },
  {
    id: 4,
    name: "BCAA Amino Ácidos",
    category: "INTRA-ENTRENO",
    price: 499,
    image: "https://via.placeholder.com/300x300/ef4444/ffffff?text=BCAA",
    featured: false,
    description:
      "BCAA 2:1:1 con electrolitos. Previene el catabolismo muscular durante entrenamientos intensos.",
    features: [
      "Ratio 2:1:1 comprobado",
      "Con electrolitos añadidos",
      "Recuperación acelerada",
      "Hidratación mejorada",
    ],
    specifications: {
      peso: "200 g",
      sabores: ["Limonada", "Sandía", "Uva"],
      servings: 50,
    },
  },
  {
    id: 5,
    name: "Tank Top Titanium",
    category: "ROPA",
    price: 349,
    image:
      "https://png.pngtree.com/png-vector/20231014/ourmid/pngtree-gray-sport-tank-top-mockup-hanging-png-file-png-image_10159020.png",
    featured: true,
    description:
      "Tank top de alta calidad con tecnología de secado rápido. Ideal para entrenamientos intensos.",
    features: [
      "Tecnología dry-fit",
      "Secado rápido",
      "Comodidad máxima",
      "Diseño ergonómico",
    ],
    specifications: {
      tallas: ["S", "M", "L", "XL", "XXL"],
      colores: ["Negro", "Rojo", "Gris", "Azul"],
      material: "Poliester 92%, Elastano 8%",
    },
  },
  {
    id: 6,
    name: "Shorts Deportivos",
    category: "ROPA",
    price: 299,
    image:
      "https://acide.com.mx/cdn/shop/files/ShortMexicocaballerofrente.png?v=1701984228&width=3840",
    featured: false,
    description:
      "Shorts deportivos con compresión ligera. Máxima libertad de movimiento.",
    features: [
      "Compresión ligera",
      "Bolsillo para llaves",
      "Cintura elástica",
      "Material transpirable",
    ],
    specifications: {
      tallas: ["S", "M", "L", "XL"],
      colores: ["Negro", "Gris", "Azul Marino"],
      material: "Poliester 88%, Elastano 12%",
    },
  },
  {
    id: 7,
    name: "Mass Gainer",
    category: "GANANCIA MÚSCULAR",
    price: 799,
    image:
      "https://bodyfitsupplements.com.mx/cdn/shop/files/PROTEINASBODY_30.png?v=1733072937",
    featured: true,
    description:
      "Ganador de peso con 50g de proteína y carbohidratos complejos. Ideal para volumen limpio.",
    features: [
      "50g de proteína por servicio",
      "Carbohidratos complejos",
      "Enzimas digestivas",
      "Bajo en azúcar",
    ],
    specifications: {
      peso: "5.45 kg (12 lb)",
      sabores: ["Vainilla", "Chocolate", "Cookies & Cream"],
      servings: 20,
    },
  },
  {
    id: 8,
    name: "Quemador de Grasa",
    category: "CONTROL DE PESO",
    price: 649,
    image: "https://via.placeholder.com/300x300/ef4444/ffffff?text=QUEMADOR",
    featured: false,
    description:
      "Termogénico avanzado con ingredientes naturales. Acelera el metabolismo y suprime el apetito.",
    features: [
      "Termogénesis avanzada",
      "Supresor del apetito",
      "Energía natural",
      "Ingredientes naturales",
    ],
    specifications: {
      peso: "180 cápsulas",
      dosis: "2 cápsulas al día",
      duracion: "90 días",
    },
  },
  {
    id: 9,
    name: "Multivitamínico Premium",
    category: "SALUD • BIENESTAR",
    price: 399,
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=VITAMINAS",
    featured: true,
    description:
      "Multivitamínico completo con minerales esenciales. Soporte nutricional para atletas.",
    features: [
      "30+ vitaminas y minerales",
      "Alta biodisponibilidad",
      "Formulación para atletas",
      "Libre de OGM",
    ],
    specifications: {
      peso: "120 tabletas",
      dosis: "1 tableta al día",
      duracion: "4 meses",
    },
  },
  {
    id: 10,
    name: "Hoodie Titanium",
    category: "ROPA",
    price: 599,
    image: "https://via.placeholder.com/300x300/ef4444/ffffff?text=HOODIE",
    featured: false,
    description:
      "Hoodie premium con capucha y bolsillo canguro. Perfecto para entrenar en climas fríos.",
    features: [
      "Tela French Terry",
      "Bolsillo canguro",
      "Corte moderno",
      "Capucha ajustable",
    ],
    specifications: {
      tallas: ["S", "M", "L", "XL", "XXL"],
      colores: ["Negro", "Gris Oscuro", "Rojo Titanium"],
      material: "Algodón 80%, Poliester 20%",
    },
  },
  {
    id: 11,
    name: "Glutamina Recovery",
    category: "RECUPERACIÓN",
    price: 449,
    image: "https://via.placeholder.com/300x300/ef4444/ffffff?text=GLUTAMINA",
    featured: false,
    description:
      "Glutamina pura para recuperación muscular y salud intestinal. Reduce el dolor muscular.",
    features: [
      "Recuperación acelerada",
      "Salud intestinal",
      "Sistema inmune",
      "Sin sabor añadido",
    ],
    specifications: {
      peso: "300 g",
      sabores: ["Natural"],
      servings: 60,
    },
  },
  {
    id: 12,
    name: "Proteína Vegana",
    category: "PROTEÍNA",
    price: 749,
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=VEGANA",
    featured: true,
    description:
      "Proteína vegetal de guisante y arroz. Alternativa vegana de alta calidad nutricional.",
    features: [
      "Proteína completa vegana",
      "Fácil digestión",
      "Sin lácteos ni soya",
      "Aminoácidos esenciales",
    ],
    specifications: {
      peso: "1.8 kg (4 lb)",
      sabores: ["Vainilla Natural", "Chocolate"],
      servings: 45,
    },
  },
];

const categories = [
  "TODOS",
  "PRE-ENTRENO",
  "INTRA-ENTRENO",
  "GANANCIA MÚSCULAR",
  "PROTEÍNA",
  "CREATINA",
  "CONTROL DE PESO",
  "SALUD • BIENESTAR",
  "ROPA",
  "RECUPERACIÓN",
];

const sortOptions = [
  "RECOMENDADO",
  "PRECIO: MENOR A MAYOR",
  "PRECIO: MAYOR A MENOR",
  "MÁS POPULARES",
  "MÁS NUEVOS",
];

// Componente del Carrito
function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h3>TU CARRITO</h3>
          <button onClick={onClose} className="cart-close-btn">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-category">{item.category}</p>
                      <p className="cart-item-price">${item.price}.00 MXN</p>
                    </div>
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="remove-item-btn"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${total}.00 MXN</span>
                </div>
                <Link to="/checkout" className="checkout-btn">
                  PROCEDER AL PAGO
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Componente de Detalles del Producto
function ProductDetail({ isOpen, onClose, product, onAddToCart }) {
  if (!isOpen || !product) return null;

  return (
    <div className="product-detail-overlay">
      <div className="product-detail-sidebar">
        <div className="product-detail-header">
          <h3>DETALLES DEL PRODUCTO</h3>
          <button onClick={onClose} className="product-detail-close-btn">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="product-detail-content">
          <div className="product-detail-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
            />
            {product.featured && (
              <div className="product-detail-badge">POPULAR</div>
            )}
          </div>

          <div className="product-detail-info">
            <div className="product-detail-category">{product.category}</div>
            <h2 className="product-detail-name">{product.name}</h2>
            <div className="product-detail-price">${product.price}.00 MXN</div>

            <p className="product-detail-description">{product.description}</p>

            <div className="product-detail-features">
              <h4>CARACTERÍSTICAS PRINCIPALES</h4>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-detail-specifications">
              <h4>ESPECIFICACIONES</h4>
              <div className="specs-grid">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <span className="spec-label">
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </span>
                    <span className="spec-value">
                      {Array.isArray(value) ? value.join(", ") : value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-detail-actions">
              <button
                className="add-to-cart-detail-btn"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal del catálogo
export default function CatalogoPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Productos");
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [sortBy, setSortBy] = useState("RECOMENDADO");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtrar productos cuando cambia la categoría o el orden
  useEffect(() => {
    let filtered = products;

    // Filtrar por categoría
    if (selectedCategory !== "TODOS") {
      filtered = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Ordenar productos
    switch (sortBy) {
      case "PRECIO: MENOR A MAYOR":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "PRECIO: MAYOR A MENOR":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "MÁS POPULARES":
        filtered.sort((a, b) =>
          b.featured === a.featured ? 0 : b.featured ? 1 : -1
        );
        break;
      case "MÁS NUEVOS":
        filtered.reverse();
        break;
      default:
        // RECOMENDADO - mantener orden original
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPageNumber(1); // Reset to first page when filters change
  }, [selectedCategory, sortBy]);

  // Funciones del carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Funciones para detalles del producto
  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
    setSelectedProduct(null);
  };

  // Paginación
  const indexOfLastProduct = currentPageNumber * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPageNumber(pageNumber);

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
              <button
                className="cart-icon-btn"
                onClick={() => setIsCartOpen(true)}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <span className="cart-badge">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                )}
              </button>
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
              <a
                href="#"
                className="mobile-nav-link active"
                onClick={() => setCurrentPage("Productos")}
              >
                PRODUCTOS
              </a>
              <a
                href="#"
                className="mobile-nav-link"
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

      {/* Hero Section del Catálogo */}
      <section className="catalog-hero">
        <div className="catalog-hero-content">
          <h1 className="catalog-title brush-text">TIENDA TITANIUM</h1>
          <p className="catalog-subtitle">
            Descubre nuestra selección premium de suplementos deportivos y ropa
            de entrenamiento diseñada para maximizar tu rendimiento y estilo
          </p>
        </div>
      </section>

      {/* Filtros y Ordenamiento */}
      <section className="catalog-filters">
        <div className="filters-container">
          {/* Filtros por categoría */}
          <div className="category-filters">
            <div className="filter-label">FILTRAR POR —</div>
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${
                    selectedCategory === category ? "category-btn-active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Ordenamiento */}
          <div className="sort-filters">
            <div className="filter-label">ORDENAR POR</div>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Grid de Productos */}
      <section className="products-grid-section">
        <div className="products-container">
          <div className="products-grid">
            {currentProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  {product.featured && (
                    <div className="product-badge">POPULAR</div>
                  )}
                  <button className="product-wishlist">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-category">{product.category}</div>
                  <div className="product-price">${product.price}.00 MXN</div>

                  <div className="product-actions">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      AGREGAR AL CARRITO
                    </button>
                    <button
                      className="view-details-btn"
                      onClick={() => openProductDetail(product)}
                    >
                      VER DETALLES
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación - Solo círculos */}
          {totalPages > 1 && (
            <div className="pagination-simple">
              <div className="pagination-circles">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`pagination-circle ${
                        currentPageNumber === number
                          ? "pagination-circle-active"
                          : ""
                      }`}
                    >
                      {number}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="catalog-cta">
        <div className="cta-card-horizontal">
          <div className="cta-bg-1" />
          <div className="cta-bg-2" />

          <div className="cta-content-horizontal">
            <div className="cta-text-section">
              <h3 className="cta-title brush-text">
                ENVÍO GRATIS <span className="text-red">EN COMPRAS</span>
                <span className="cta-title-sub">MAYORES A $599</span>
              </h3>
              <p className="cta-description">
                Obtén envío gratuito en toda la república mexicana en compras
                mayores a $599. También contamos con retiro en nuestro gimnasio
                sin costo adicional y asesoría personalizada.
              </p>

              <div className="cta-benefits">
                <div className="benefit-item">
                  <svg
                    className="benefit-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  ENVÍO GRATIS +$599
                </div>
                <div className="benefit-item">
                  <svg
                    className="benefit-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  RETIRO EN GIMNASIO
                </div>
                <div className="benefit-item">
                  <svg
                    className="benefit-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  ASESORÍA ESPECIALIZADA
                </div>
              </div>
            </div>

            <div className="cta-buttons-section">
              <div className="cta-buttons-vertical">
                <a href="#" className="cta-btn-primary brush-btn">
                  VER OFERTAS
                  <svg
                    className="btn-arrow"
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
                </a>
                <a href="#" className="cta-btn-secondary">
                  CONTACTAR ASESOR
                </a>
              </div>
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
                <h4 className="footer-column-title">Titanium Sport Gym</h4>
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
                <h4 className="footer-column-title">Productos</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="footer-link">
                      Suplementos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Ropa Deportiva
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Ofertas Especiales
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">Servicios</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="footer-link">
                      Envíos y Entregas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Garantías
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Preguntas Frecuentes
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
              *Envío gratis aplica en compras mayores a $599. Consulta términos
              y condiciones completos en nuestro gimnasio.
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Titanium Sport Gym. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Componente del Carrito */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      {/* Componente de Detalles del Producto */}
      <ProductDetail
        isOpen={isProductDetailOpen}
        onClose={closeProductDetail}
        product={selectedProduct}
        onAddToCart={addToCart}
      />
    </div>
  );
}
  