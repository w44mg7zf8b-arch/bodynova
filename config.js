const CONFIG = {
  brandName: "BodyNova Beauty Center",
  phoneDisplay: "+971 50 123 4567",
  phoneTel: "+971501234567",
  whatsappNumber: "971501234567",
  whatsappDefaultMessage: "Hi BodyNova, I want to book an aesthetic clinic appointment.",
  bookingLink: "#book-session",
  email: "hello@bodynovabeauty.com",
  address: "Dubai, United Arab Emirates",
  instagramLink: "#",
  facebookLink: "#",
  tiktokLink: "#",
  aboutShowcaseMediaType: "image",
  aboutShowcaseImage: "assets/images/about-showcase.jpg",
  aboutShowcaseVideo: "assets/videos/about-showcase.mp4",
  aboutShowcasePoster: "assets/images/about-showcase.jpg"
};

CONFIG.whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappDefaultMessage)}`;
CONFIG.phoneUrl = `tel:${CONFIG.phoneTel}`;
