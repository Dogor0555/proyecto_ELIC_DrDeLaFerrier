// src/app/galerie/page.js
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState({});

  // Array de imágenes con rutas relativas desde app/galerie/
  const galleryImages = [
  { 
    id: 1, 
    title: "Monument du Dr. de la Ferrière", 
    category: "monument",
    src: "/images/1.jpg",
    width: 800,
    height: 600,
    description: "Monument situé au Cimetière de l'Est à Nice"
  },
  { 
    id: 2, 
    title: "Cours de Yoga", 
    category: "yoga",
    src: "/images/2.jpg",
    width: 800,
    height: 600,
    description: "Session de yoga selon la méthode Ferriz-Ferrière"
  },
  { 
    id: 3, 
    title: "Conférence 2022", 
    category: "conferences",
    src: "/images/3.jpg",
    width: 800,
    height: 600,
    description: "Conférence sur l'œuvre du Dr. de la Ferrière"
  },
  { 
    id: 4, 
    title: "Séminaire Nice", 
    category: "seminars",
    src: "/images/4.jpg",
    width: 800,
    height: 600,
    description: "Séminaire international organisé à Nice"
  },
  { 
    id: 5, 
    title: "Centenaire 2016", 
    category: "events",
    src: "/images/5.jpg",
    width: 800,
    height: 600,
    description: "Célébration du centenaire de la naissance"
  },
  { 
    id: 6, 
    title: "Inauguration Plaque", 
    category: "events",
    src: "/images/6.jpg",
    width: 800,
    height: 600,
    description: "Inauguration de la plaque commémorative"
  },
  { 
    id: 7, 
    title: "Atelier Alimentation", 
    category: "workshops",
    src: "/images/7.jpg",
    width: 800,
    height: 600,
    description: "Atelier sur l'alimentation végétarienne"
  },
  { 
    id: 8, 
    title: "Peintures du Dr. de la Ferrière", 
    category: "art",
    src: "/images/8.jpg",
    width: 800,
    height: 600,
    description: "Œuvres artistiques du Dr. Serge Raynaud de la Ferrière"
  },
];

  const categories = [
    { id: 'all', name: 'Toutes les photos' },
    { id: 'monument', name: 'Monument' },
    { id: 'yoga', name: 'Yoga' },
    { id: 'conferences', name: 'Conférences' },
    { id: 'seminars', name: 'Séminaires' },
    { id: 'events', name: 'Événements' },
    { id: 'workshops', name: 'Ateliers' },
    { id: 'art', name: 'Œuvres Artistiques' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Resto del código del carrusel (igual que antes)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages.length]);

  const handleImageLoad = (imageId) => {
    setImageLoading(prev => ({ ...prev, [imageId]: true }));
  };

  const handleImageError = (imageId) => {
    setImageLoading(prev => ({ ...prev, [imageId]: false }));
  };

  const openModal = (image) => {
    const imageIndex = filteredImages.findIndex(img => img.id === image.id);
    setCurrentIndex(imageIndex);
    setSelectedImage(image);
  };

  return (
    <div className="gallery-page">
      <div className="container">
        <h1>Galerie Photos</h1>
        
        {/* Filtres de catégories */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentIndex(0);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Contador de imágenes */}
        <div className="gallery-stats">
          <p>{filteredImages.length} photo{filteredImages.length > 1 ? 's' : ''} {activeCategory !== 'all' && `dans la catégorie "${categories.find(cat => cat.id === activeCategory)?.name}"`}</p>
        </div>

        {/* Carrusel Principal */}
        {filteredImages.length > 0 && (
          <div className="main-carousel">
            <div className="carousel-container">
              <button className="carousel-btn prev" onClick={prevImage} aria-label="Image précédente">
                ‹
              </button>
              
              <div className="main-image-container" onClick={() => openModal(filteredImages[currentIndex])}>
                <Image
                  src={filteredImages[currentIndex].src}
                  alt={filteredImages[currentIndex].title}
                  width={800}
                  height={500}
                  className="main-carousel-image"
                  onLoad={() => handleImageLoad(filteredImages[currentIndex].id)}
                  onError={() => handleImageError(filteredImages[currentIndex].id)}
                  style={{
                    opacity: imageLoading[filteredImages[currentIndex].id] === false ? 0 : 1,
                  }}
                />
                {imageLoading[filteredImages[currentIndex].id] === false && (
                  <div className="image-fallback large">
                    <span>📷</span>
                    <p>{filteredImages[currentIndex].title}</p>
                    <small>Image non disponible</small>
                  </div>
                )}
              </div>

              <button className="carousel-btn next" onClick={nextImage} aria-label="Image suivante">
                ›
              </button>
            </div>

            {/* Información de la imagen actual */}
            <div className="carousel-info">
              <h3>{filteredImages[currentIndex].title}</h3>
              <p>{filteredImages[currentIndex].description}</p>
              <div className="image-counter">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </div>

            {/* Miniaturas */}
            <div className="thumbnails-container">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={80}
                    height={60}
                    className="thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grille de galería (vista alternativa) */}
        <div className="gallery-section">
          <h2>Toutes les photos de la catégorie</h2>
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openModal(image)}
              >
                <div className="image-container">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={300}
                    height={200}
                    className="gallery-image"
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                    style={{
                      opacity: imageLoading[image.id] === false ? 0 : 1,
                    }}
                  />
                  {imageLoading[image.id] === false && (
                    <div className="image-fallback">
                      <span>📷</span>
                      <p>{image.title}</p>
                    </div>
                  )}
                </div>
                <div className="image-title">
                  <h3>{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mensaje si no hay imágenes */}
        {filteredImages.length === 0 && (
          <div className="no-images">
            <p>Aucune photo dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>

      {/* Modal para imagen ampliada con carrusel */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer"
            >
              ×
            </button>
            
            <div className="modal-carousel">
              <button className="modal-carousel-btn prev" onClick={prevImage} aria-label="Image précédente">
                ‹
              </button>
              
              <div className="modal-image-container">
                <Image
                  src={filteredImages[currentIndex].src}
                  alt={filteredImages[currentIndex].title}
                  width={800}
                  height={600}
                  className="modal-image-content"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.parentNode.querySelector('.image-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="image-fallback large" style={{display: 'none'}}>
                  <span>🖼️</span>
                  <p>{filteredImages[currentIndex].title}</p>
                  <small>Image non disponible</small>
                </div>
              </div>

              <button className="modal-carousel-btn next" onClick={nextImage} aria-label="Image suivante">
                ›
              </button>
            </div>

            <div className="modal-info">
              <h2>{filteredImages[currentIndex].title}</h2>
              <p className="modal-category">
                Catégorie: {categories.find(cat => cat.id === filteredImages[currentIndex].category)?.name}
              </p>
              {filteredImages[currentIndex].description && (
                <p className="modal-description">{filteredImages[currentIndex].description}</p>
              )}
              <div className="modal-counter">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </div>

            {/* Miniaturas en modal */}
            <div className="modal-thumbnails">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`modal-thumbnail ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={60}
                    height={45}
                    className="modal-thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}