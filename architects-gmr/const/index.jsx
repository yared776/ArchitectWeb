import { BotMessageSquare } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PencilRuler, ShieldAlert, Handshake, Leaf, DraftingCompass, FolderKanban} from "lucide-react";



import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "About Us", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Services", href: "#" },
  { label: "Urban Planning", href: "#" },
  { label: "Contact Us", href: "#" },
  
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am impressed by the architectural vision and attention to detail demonstrated by the team. Their ability to translate complex ideas into stunning designs is truly remarkable.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "The team's architectural expertise and innovative solutions were instrumental in bringing our project to life. Their creativity and dedication surpassed our expectations.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a transformative experience. Their architectural insights and commitment to excellence are evident in every aspect of their work.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "The architectural prowess of the team at XYZ Company is unparalleled. Their ability to blend functionality with aesthetics resulted in a project that exceeded all our expectations.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am continually impressed by the team's architectural creativity and problem-solving skills. They bring a unique perspective to every project and deliver exceptional results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team's architectural expertise and attention to detail are unmatched. Their ability to create spaces that inspire and innovate is truly commendable.",
  },
];

export const features = [
  {
    icon: <PencilRuler />,
    text: "Creative Designs",
    description:
      "Explore innovative and creative architectural designs that inspire.",
  },
  {
    icon: <ShieldAlert />,
    text: "Attention to Detail",
    description:
      "Discover prime locations and strategic architectural placements.",
  },
  {
    icon: <Handshake />,
    text: "Client-Centered Approach",
    description:
      "Ensure quality construction with our experienced team and modern techniques.",
  },
  {
    icon: <Leaf />,
    text: "Sustainable Practices",
    description:
"Eco-friendly designs and sustainable materials for long-term benefits."  },
  {
    icon: <DraftingCompass />,
    text: "Technical Expertise",
    description:
"Proficiency in building codes, regulations, and advanced architectural software."  },
  {
    icon: <ShieldHalf />,
    text: "Effective Project Management",
    description:
"Timely and budget-conscious project delivery with seamless coordination."  },
  
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const social = [
  {
    icon: <BotMessageSquare />,
  },
  {
    icon: <ShieldHalf />,
  },
  {
    icon: <BotMessageSquare />,
  },
  {
    icon: <ShieldHalf />,
  },
];