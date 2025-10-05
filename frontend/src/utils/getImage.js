export default function getImage(name, description, width = 600, height = 400) {
    const keyword = encodeURIComponent(name || description || "fashion");
  
    // Primary: Unsplash keyword image
    const unsplashUrl = `https://source.unsplash.com/${width}x${height}/?${keyword}`;
  
    // Fallback: Picsum seeded image (guarantees variety)
    const picsumSeed = encodeURIComponent(name || description || "style");
    const picsumUrl = `https://picsum.photos/seed/${picsumSeed}/${width}/${height}`;
  
    // Try Unsplash first; fall back if it fails
    const img = new Image();
    img.src = unsplashUrl;
  
    return new Promise((resolve) => {
      img.onload = () => resolve(unsplashUrl);
      img.onerror = () => resolve(picsumUrl);
    });
  }
  