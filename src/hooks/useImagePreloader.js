import { useState, useEffect } from 'react';

const useImagePreloader = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          resolve();
        };
        img.onerror = reject;
        img.src = url;
      });
    };

    const preloadAllImages = async () => {
      try {
        await Promise.all(imageUrls.map(preloadImage));
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        // If there's an error, still show the page
        setImagesLoaded(true);
      }
    };

    preloadAllImages();
  }, [imageUrls]);

  return { imagesLoaded, loadingProgress };
};

export default useImagePreloader;
