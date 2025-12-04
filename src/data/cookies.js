// We are using a placeholder image service. You can replace these with your actual image paths.
const getImageUrl = (id) => `https://placehold.co/600x400/D2B48C/43302b?text=Cookie+${id}`;

export const cookies = [
  {
    id: 1,
    name: 'Classic Chocolate Chip',
    price: 2.50,
    description: 'A timeless classic. Perfectly baked with semi-sweet chocolate chips, a hint of vanilla, and a soft, chewy center.',
    image: getImageUrl(1),
    featured: true,
  },
  {
    id: 2,
    name: 'Double Fudge Brownie',
    price: 3.00,
    description: 'For the ultimate chocolate lover. Rich, dark cocoa and chunks of decadent fudge make this a deeply satisfying treat.',
    image: getImageUrl(2),
    featured: true,
  },
  {
    id: 3,
    name: 'Oatmeal Raisin Spice',
    price: 2.75,
    description: 'A comforting blend of rolled oats, plump raisins, and a warm mix of cinnamon and nutmeg. It’s like a hug in a cookie.',
    image: getImageUrl(3),
    featured: false,
  },
  {
    id: 4,
    name: 'Snickerdoodle Supreme',
    price: 2.50,
    description: 'Soft, buttery, and rolled in a delightful cinnamon-sugar coating. A simple yet irresistible cookie with a tangy finish.',
    image: getImageUrl(4),
    featured: true,
  },
  {
    id: 5,
    name: 'Peanut Butter Bliss',
    price: 2.75,
    description: 'Creamy peanut butter dough packed with roasted peanuts for an extra crunch. A perfect balance of sweet and salty.',
    image: getImageUrl(5),
    featured: false,
  },
  {
    id: 6,
    name: 'White Chocolate Macadamia',
    price: 3.25,
    description: 'Luxurious white chocolate chips paired with buttery macadamia nuts. A sophisticated cookie for a refined palate.',
    image: getImageUrl(6),
    featured: false,
  },
];
