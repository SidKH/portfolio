// Checking IE browser
const isIE = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent) && !!(document.uniqueID || document.documentMode || window.ActiveXObject || window.MSInputMethodContext);

/**
 * Image preloading mechanism
 *   Creating an array that will contain all preloaded images
 *     in order for browsers to take them from cache 
 * @return {Function} - preloadImages function
 */
const imagePreloadingMechanism = () => {
  const images = [];
  return (arr) => {
    arr.forEach((src) => {
      const img = new Image();
      images[src] = img;
      img.src = src;
    });
  }
}

const preloadImages = imagePreloadingMechanism();

export { isIE, preloadImages }