/* ================================
   MoniCal - Image Logic Script
   ================================ */

/**
 * Returns an image URL based on the item name.
 * Called automatically from script.js → getImageForItem()
 */

function getImageForItem(itemName) {
  const name = itemName.toLowerCase();

  // Common grocery items
  const images = {
    rice: "img/rice.jpg",
    beans: "img/beans.jpg",
    yam: "img/yam.jpg",
    garri: "img/garri.jpg",
    oil: "img/oil.jpg",
    tomato: "img/tomato.jpg",
    pepper: "img/pepper.jpg",
    fish: "img/fish.jpg",
    meat: "img/meat.jpg",
    milk: "img/milk.jpg",
    bread: "img/bread.jpg",
    egg: "img/egg.jpg",
    sugar: "img/sugar.jpg",
    salt: "img/salt.jpg",
    water: "img/water.jpg",
    noodles: "img/noodles.jpg",
    soap: "img/soap.jpg",
    detergent: "img/detergent.jpg",
  };

  // Try to match item name with known keys
  for (const key in images) {
    if (name.includes(key)) {
      return images[key];
    }
  }

  // Default fallback image
  return "https://images.unsplash.com/photo-1607082349566-1873426a4a9c?auto=format&fit=crop&w=600&q=60";
}
