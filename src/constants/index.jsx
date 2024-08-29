import {
  FileText,
  MessageCircle,
  Lock,
  Repeat,
  Image,
  FastForward,
  FilePlus,
  PrinterCheck,
  Home,
  Hammer,
  CircleDollarSign,

  UserRoundCog,
  Handshake,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.avif";
import user4 from "../assets/profile-pictures/user4.avif";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


export const navItems = [
  { label: "Home", href: "#", icon:<Home/> },
  { label: "Tools", href: "#tools" , icon:<Hammer/>},
  { label: "Pricing", href: "#pricing", icon:<CircleDollarSign/> },
  { label: "About", href: "#about" , icon:<UserRoundCog />},
  { label: "Contact", href: "#contact" , icon:<Handshake /> },
];

export const testimonials = [
  {
    user: "Rahul Gupta",
    company: "DIRECTOR - TechSavvy India",
    starNumber:4,
    image: user1,
    text: "I am extremely impressed with PDFTOOL's services. The platform's intuitive design and seamless functionality make it a must-have for anyone dealing with PDF files.",
  },
  {
    user: "Anjali Sharma",
    company: "UI/UX DESIGNER - Digital Bharat",
    starNumber:5,
    image: user2,
    text: "PDFTOOL has been a game-changer for us. It simplifies complex tasks like merging and converting PDFs into quick, easy steps. Highly recommended and i suggest to use it!",
  },
  {
    user: "Sanjay Patel",
    company: "CTO - TechGenius Solutions",
    starNumber:5,
    image: user3,
    text: "Working with PDFTOOL has been a delight. Their commitment to quality and user-friendly interface sets them apart. They truly understand the needs of Indian users. Awesome Tools.",
  },
  {
    user: "Anish Verma",
    company: "SOFTWARE ENG - Innovate India Tech",
    starNumber:4,
    image: user4,
    text: "PDFTOOL has revolutionized how we manage documents. The tools are robust, efficient, and perfect for businesses. A great platform i found on internet.",
  },
  {
    user: "Amit Kumar",
    company: "CEO - SmartSoft India",
    starNumber:5,
    image: user5,
    text: "I've found PDFTOOL incredibly helpful in my daily tasks. Whether it's compressing PDFs or extracting pages, it's a versatile tool that meets all our document needs.",
  },
  {
    user: "Priyanka Singh",
    company: "HR - TechInnovate Labs",
    starNumber:5,
    image: user6,
    text: "The team behind PDFTOOL deserves applause for their dedication to improving document management.High recommended.",
  },
];


export const features = [
  {
    icon: <FileText />,
    text: "Editing and Modifying Text",
    description: "Edit text directly, customize fonts, sizes, and colors."
  },
  {
    icon: <MessageCircle />,
    text: "Annotating and Commenting",
    description: "Add comments, notes, highlights, and markups."
  },
  {
    icon: <FilePlus />,
    text: "Adding and Removing Pages",
    description: "Add, delete, or rearrange pages easily. Merge PDFs."
  },
  {
    icon: <Lock />,
    text: "Securing Documents",
    description: "Add passwords and encryption. Sign documents digitally."
  },
  {
    icon: <Repeat />,
    text: "Converting Files",
    description: "Convert PDFs to/from Word, Excel, PowerPoint, and images."
  },
  {
    icon: <Image />,
    text: "Enhancing Visuals",
    description: "Insert images, videos, and links. Compress file sizes."
  },
  {
    icon: <FastForward />,
    text: "Automating Processes",
    description: "Use batch processing and integrate with other tools."
  },
  {
    icon:<PrinterCheck />,
    text: "Accessibility",
    description: "Create accessible PDFs. Add bookmarks and hyperlinks."
  },
];


export const checklistItems = [
  { title: 'Merge PDFs with Ease', description: 'Combine multiple PDF files into one seamless document quickly and effortlessly.' },
{ title: 'Compress PDFs for Easy Sharing', description: 'Reduce the file size of your PDFs while maintaining high quality for faster sharing and storage.' },
{ title: 'Convert PDFs to Other Formats', description: 'Easily convert PDFs to Word, Excel, PowerPoint, and other formats, and vice versa.' },
{ title: 'Secure Your PDFs', description: 'Protect your PDF documents with passwords and encryption to ensure your data remains safe.' }

];

export const plans = [
  {
    name: "Free plan",
    mPrice: 0,
    yPrice:0,
    features: [
      "Merge PDFs",
      "Split PDFs",
      "Compress PDFs",
      "Convert to Word",
      "Convert to Excel",
     
    ],
  },
  {
    name: "Pro plan",
    mPrice: 12,
    yPrice:48,
    features: [
      "All Free features",
      "No ads",
      "Unlimited file sizes",
      "Batch processing",
      "OCR for scanned PDFs",
      "Priority support",
      
    ],
    type:"popular"
  },
  {
    name: "Business plan",
    mPrice: 40,
    yPrice:120,
    features: [
      "All Pro features",
      "Team management",
      "Advanced security",
      "Centralized billing",
      "No Ads",
      "Dedicated support",
      "Rotate PDFs",
      "Unlock PDFs",
      "Watermark PDFs",
    ],
  },
];



export const resourcesLinks = [
  { href: "#", text: "Home" },
  { href: "#features", text: "Features" },
  { href: "#pricing", text: "Pricing" },
  { href: "#tools", text: "Tools" },
];

export const platformLinks = [
  { href: "https://www.ilovepdf.com/help/faq", text: "FAQ" },
  { href: "https://www.ilovepdf.com/desktop", text: "iLovePDF Desktop" },
  { href: "https://www.ilovepdf.com/mobile", text: "iLovePDF Mobile" },
  { href: "https://www.iloveapi.com/", text: "Developers" },
  { href: "https://wordpress.org/plugins/ilovepdf/", text: "Wordpress Plugin" },
];

export const communityLinks = [
  { href: "https://www.iloveimg.com/", text: "IMG" },
  { href: "https://www.ilovepdf.com/help/about", text: "Our Story" },
  { href: "https://www.ilovepdf.com/blog", text: "Blog" },
  { href: "https://www.ilovepdf.com/press", text: "Press" },
  { href: "https://www.ilovepdf.com/help/legal", text: "Legal & Privacy" },
];
