import dish1 from "../../public/dish1.jpeg";
import dish2 from "../../public/dish2.jpeg";
import dish3 from "../../public/dish3.jpeg";
import dish4 from "../../public/dish4.jpeg";
import dish5 from "../../public/dish5.jpeg";
import dish_1 from "../../public/dish_1.png";
import dish7 from "../../public/dish7.jpeg";
import dish8 from "../../public/dish8.jpeg";
import dish_2 from "../../public/dish_2.jpg";
import dish10 from "../../public/dish10.jpg";
import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Spaghetti Carbonara",
    description: "Creamy spaghetti with bacon and cheese",
  },
  {
    image: dish2,
    title: "Urochimaro Ramen",
    description: "Spicy ramen noodles with boiled eggs and vegetables",
  },
  {
    image: dish3,
    title: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    image: dish4,
    title: "Lebanese Sandwich",
    description: "Assorted eggs and vegetables wrapped in pita bread",
  },
  {
    image: dish5,
    title: "Blueberry Pancakes",
    description: "Fluffy pancakes topped with fresh blueberries and maple syrup",
  },
  {
    image: dish_1,
    title: "Mutta Parotta",
    description: "Flavourful chopped parotta with egg and salna",
  },
  {
    image: dish7,
    title: "Prawn Thokku",
    description: "Spicy prawn curry with a blend of aromatic spices.",
  },
  {
    image: dish8,
    title: "Butter Chicken Masala",
    description: "Indian curry with tender chicken in a rich sauce",
  },
  {
    image: dish_2,
    title: "Beef Wellington",
    description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
  },
  {
    image: dish10,
    title: "Hyderabadi Chicken Biryani",
    description:
      "Fragrant basmati rice layered with marinated chicken and aromatic spices.",
  },
];

export const ABOUT = {
  header: "We love serving!",
  content:
    "At Dinevora, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Dinevora—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Senthamilarasu AP",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Dinevora, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 69, Anna Nagar, Chennai, India" },
  { key: "phone", value: "Phone: +91-89460-59859" },
  { key: "email", value: "Email: vibhakarsenth@gmail.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
