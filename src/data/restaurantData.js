// ============================================
// RESTAURANT DATA - UPDATE ALL YOUR CONTENT HERE
// ============================================
// This file contains all the restaurant's information.
// Update the values below with your actual restaurant details.
// ============================================

import biryaniImg from '../assets/hyderabadi_dum_biryani.png';
import butterChickenImg from '../assets/butter_chicken.png';
import paneerTikkaImg from '../assets/paneer_tikka_masala.png';
import seekhKebabImg from '../assets/seekh_kebab_platter.png';
import dalMakhaniImg from '../assets/dal_makhani.png';
import gulabJamunImg from '../assets/gulab_jamun.png';

export const restaurantInfo = {
  name: "Spice Heritage",
  tagline: "Where Tradition Meets Taste",
  shortDescription: "Experience the rich flavors of authentic Indian cuisine, crafted with love using time-honored recipes passed down through generations.",
  foundedYear: "1995",
  phone: "+91 98765 43210", // UPDATE: Main restaurant phone
};

export const socialLinks = {
  facebook: "https://www.facebook.com/your-restaurant-page", // UPDATE: Your Facebook page URL
  instagram: "https://www.instagram.com/your-restaurant-handle", // UPDATE: Your Instagram page URL
  googleReviewsUrl: "https://www.google.com/maps/place/your-restaurant", // UPDATE: Your Google Maps/Reviews URL
};

export const deliveryLinks = {
  zomato: "https://www.zomato.com/your-restaurant-page", // UPDATE: Your Zomato restaurant page URL
  swiggy: "https://www.swiggy.com/your-restaurant-page", // UPDATE: Your Swiggy restaurant page URL
};

export const branches = [
  {
    id: 1,
    name: "Spice Heritage - Main Branch", // UPDATE: Branch name
    address: "123 Heritage Lane, Jubilee Hills, Hyderabad, Telangana 500033", // UPDATE: Full address
    phone: "+91 98765 43210", // UPDATE: Branch phone number
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890", // UPDATE: Google Maps embed URL
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=17.4,78.4", // UPDATE: Google Maps directions URL
    timings: "11:00 AM - 11:00 PM",
  },
  {
    id: 2,
    name: "Spice Heritage - Banjara Hills", // UPDATE: Branch name
    address: "456 Flavour Street, Banjara Hills, Hyderabad, Telangana 500034", // UPDATE: Full address
    phone: "+91 98765 43211", // UPDATE: Branch phone number
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.45!3d17.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzEyLjAiTiA3OMKwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567891", // UPDATE: Google Maps embed URL
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=17.42,78.45", // UPDATE: Google Maps directions URL
    timings: "11:00 AM - 11:00 PM",
  },
  {
    id: 3,
    name: "Spice Heritage - Gachibowli", // UPDATE: Branch name
    address: "789 Spice Avenue, Gachibowli, Hyderabad, Telangana 500032", // UPDATE: Full address
    phone: "+91 98765 43212", // UPDATE: Branch phone number
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.35!3d17.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzI0LjAiTiA3OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567892", // UPDATE: Google Maps embed URL
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=17.44,78.35", // UPDATE: Google Maps directions URL
    timings: "11:00 AM - 11:30 PM",
  },
];

export const founderInfo = {
  name: "Rajesh Kumar Sharma", // UPDATE: Founder's name
  title: "Founder & Head Chef", // UPDATE: Founder's title
  story: `Born in a small village in Rajasthan, Rajesh Kumar Sharma grew up watching his grandmother prepare elaborate feasts for the entire community. Every meal was a celebration, every spice told a story, and every dish carried the warmth of home.

At the age of 22, with nothing but his grandmother's handwritten recipe book and an unwavering passion for cooking, Rajesh moved to Hyderabad. He started as a humble street-food vendor, serving his grandmother's secret dal and freshly baked rotis from a small cart near Charminar.

Word spread quickly. People came from across the city just to taste his food. In 1995, with the support of his family and loyal customers, Rajesh opened the first Spice Heritage restaurant in Jubilee Hills. His vision was simple — to serve food that tastes like home, made with the finest ingredients and cooked with love.

Today, Spice Heritage has grown into a beloved dining destination with multiple branches across the city. But the soul of the restaurant remains unchanged. Every dish that leaves our kitchen carries the same love, the same recipes, and the same passion that Rajesh brought from his grandmother's kitchen.

"Food is not just nourishment — it is a bridge between hearts, a language everyone understands." — Rajesh Kumar Sharma`, // UPDATE: Founder's story
  quote: "Food is not just nourishment — it is a bridge between hearts, a language everyone understands.", // UPDATE: Founder's quote
};

export const ourStory = {
  title: "Our Story",
  subtitle: "A Journey of Flavors & Tradition",
  paragraphs: [
    "Spice Heritage was born from a simple belief — that great food has the power to bring people together. What started as a humble roadside dhaba in 1995 has blossomed into one of the city's most beloved dining destinations.",
    "Our recipes have been passed down through three generations, each adding their own touch while staying true to the authentic flavors that define Indian cuisine. From the tandoor-kissed kebabs to the slow-cooked biryanis, every dish tells a story of tradition, patience, and passion.",
    "We source the freshest ingredients from local farmers, grind our own spices in-house, and cook every dish to order. At Spice Heritage, we don't just serve food — we serve memories.",
  ], // UPDATE: Restaurant story paragraphs
};

export const signatureDishes = [
  {
    id: 1,
    name: "Hyderabadi Dum Biryani", // UPDATE: Dish name
    description: "Fragrant basmati rice layered with tender marinated meat, slow-cooked in a sealed pot with saffron, fried onions, and our secret spice blend.", // UPDATE: Dish description
    price: "₹349", // UPDATE: Price (set to empty string to hide)
    isSignature: true,
    category: "Main Course",
    image: biryaniImg,
  },
  {
    id: 2,
    name: "Butter Chicken", // UPDATE: Dish name
    description: "Succulent tandoori chicken simmered in a rich, creamy tomato-butter sauce with aromatic spices. Our most beloved classic.", // UPDATE
    price: "₹299", // UPDATE
    isSignature: true,
    category: "Main Course",
    image: butterChickenImg,
  },
  {
    id: 3,
    name: "Paneer Tikka Masala", // UPDATE: Dish name
    description: "Chargrilled paneer cubes tossed in a vibrant masala gravy made from freshly ground spices and ripe tomatoes.", // UPDATE
    price: "₹279", // UPDATE
    isSignature: true,
    category: "Main Course",
    image: paneerTikkaImg,
  },
  {
    id: 4,
    name: "Seekh Kebab Platter", // UPDATE: Dish name
    description: "Hand-minced lamb kebabs infused with fresh herbs and spices, grilled to perfection in our traditional clay tandoor.", // UPDATE
    price: "₹329", // UPDATE
    isSignature: true,
    category: "Starters",
    image: seekhKebabImg,
  },
  {
    id: 5,
    name: "Dal Makhani", // UPDATE: Dish name
    description: "Black lentils slow-cooked overnight with butter, cream, and a blend of aromatic spices. Rich, smoky, and utterly indulgent.", // UPDATE
    price: "₹219", // UPDATE
    isSignature: true,
    category: "Main Course",
    image: dalMakhaniImg,
  },
  {
    id: 6,
    name: "Gulab Jamun", // UPDATE: Dish name
    description: "Golden milk-solid dumplings soaked in rose-scented sugar syrup, served warm. The perfect end to a royal meal.", // UPDATE
    price: "₹149", // UPDATE
    isSignature: true,
    category: "Desserts",
    image: gulabJamunImg,
  },
];

export const googleReviews = [
  {
    id: 1,
    name: "Priya Patel", // UPDATE: Reviewer name
    rating: 5, // UPDATE: Star rating (1-5)
    text: "Absolutely the best biryani I've ever had! The flavors are so authentic and the service is wonderful. Spice Heritage has become our family's go-to restaurant for every celebration. Highly recommend the Dum Biryani and Butter Chicken!", // UPDATE: Review text
    date: "2 weeks ago", // UPDATE: Review date
  },
  {
    id: 2,
    name: "Amit Reddy", // UPDATE
    rating: 5,
    text: "Been coming here since they opened the Banjara Hills branch. The food quality has remained consistently excellent over the years. Their Dal Makhani is to die for! The ambiance is perfect for family dinners.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Sarah Khan", // UPDATE
    rating: 4,
    text: "Visited for the first time and was blown away by the flavors. The Seekh Kebab Platter was incredible — perfectly spiced and cooked to perfection. The restaurant has a lovely warm atmosphere. Will definitely be back!",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Vikram Sharma", // UPDATE
    rating: 5,
    text: "Ordered through Zomato for a family gathering and every dish was outstanding. The packaging was great and the food arrived hot. Their Paneer Tikka Masala is the best in the city. Five stars without any hesitation!",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Meera Joshi", // UPDATE
    rating: 5,
    text: "What a gem! The Gulab Jamun here is heavenly. Every dish we tried was packed with authentic flavors. The staff is friendly and the place is spotlessly clean. This is how real Indian food should taste!",
    date: "2 months ago",
  },
];

export const foodQualityPoints = [
  {
    id: 1,
    title: "Farm-Fresh Ingredients",
    description: "We source vegetables, herbs, and dairy directly from trusted local farms every morning, ensuring peak freshness in every dish.",
    icon: "leaf", // Used in component to pick icon
  },
  {
    id: 2,
    title: "Hand-Ground Spices",
    description: "Our spices are hand-selected and freshly ground in-house daily, preserving their essential oils and delivering unmatched flavor.",
    icon: "mortar",
  },
  {
    id: 3,
    title: "Traditional Cooking",
    description: "We use time-honored cooking techniques — slow-cooking, clay tandoor, dum-style preparation — to bring out authentic flavors.",
    icon: "fire",
  },
  {
    id: 4,
    title: "Strict Hygiene Standards",
    description: "Our kitchens follow rigorous FSSAI hygiene protocols. Every surface, utensil, and ingredient is handled with the highest standards of cleanliness.",
    icon: "shield",
  },
  {
    id: 5,
    title: "No Artificial Additives",
    description: "We never use artificial colors, preservatives, or MSG. Every flavor in our food comes from real, natural ingredients.",
    icon: "check",
  },
  {
    id: 6,
    title: "Cooked to Order",
    description: "Every dish is freshly prepared when you order it. We believe in serving food at its absolute best — hot, fresh, and full of flavor.",
    icon: "clock",
  },
];

export const fakeBranchWarning = {
  title: "⚠️ Beware of Fake Branches",
  message: "It has come to our attention that some unauthorized establishments are using our restaurant's name and branding. To protect our valued customers, please always verify branch authenticity through our official website before visiting or placing orders.",
  tips: [
    "Always check this official website for the list of authorized branches.",
    "Our official branches are listed above with verified addresses and phone numbers.",
    "Do not trust any branch not listed on our official website or social media pages.",
    "If you encounter a suspicious branch, please report it to us through our official social media channels.",
  ],
};
