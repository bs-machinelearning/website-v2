import Blog from "@/components/sections/blog";

const blogPosts = [
  {
    title: "Predictive Analytics for Financial Markets",
    description:
      "How we built a machine learning model to forecast market trends with 85% accuracy.",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-04.png",
    imageAlt: "Financial analytics dashboard",
    date: "March 12, 2025",
    category: "Product",
    author: "BSML Team",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
  {
    title: "NLP Solutions for Automated Customer Support",
    description:
      "Implementing a transformer-based chatbot that reduced support tickets by 60%.",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-05.png",
    imageAlt: "NLP model architecture",
    date: "January 20, 2025",
    category: "Product",
    author: "BSML Team",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
  {
    title: "Computer Vision for Quality Control in Manufacturing",
    description:
      "Real-time defect detection system achieving 99.2% precision on production lines.",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-06.png",
    imageAlt: "Computer vision system",
    date: "February 28, 2025",
    category: "Design",
    author: "BSML Team",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
  {
    title: "Time Series Forecasting for Retail Inventory",
    description:
      "Optimizing stock levels with LSTM networks to reduce waste by 40%.",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-07.png",
    imageAlt: "Inventory management dashboard",
    date: "March 05, 2025",
    category: "Product",
    author: "BSML Team",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
  {
    title: "Reinforcement Learning for Algorithmic Trading",
    description:
      "Developing a trading agent that outperforms benchmark indices by 25%.",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-08.png",
    imageAlt: "Trading algorithm visualization",
    date: "January 09, 2025",
    category: "Design",
    author: "BSML Team",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
  {
    title: "Anomaly Detection in Cybersecurity",
    description:
      "Building an ML-powered system to identify threats in real-time network traffic.",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-09.png",
    imageAlt: "Cybersecurity monitoring",
    date: "March 05, 2025",
    category: "Product",
    author: "BSML Team",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
];

const CaseStudiesPage = () => {
  return <Blog blogPosts={blogPosts} />;
};

export default CaseStudiesPage;
