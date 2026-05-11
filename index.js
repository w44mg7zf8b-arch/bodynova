const CONFIG = {
  brandName: "BodyNova Beauty Center",
  phoneDisplay: "+971 50 123 4567",
  phoneTel: "+971501234567",
  whatsappNumber: "971501234567",
  whatsappDefaultMessage: "Hi BodyNova, I want to book a beauty treatment.",
  bookingLink: "#book-session",
  email: "hello@bodynovabeauty.com",
  address: "Dubai, United Arab Emirates",
  instagramLink: "#",
  facebookLink: "#",
  tiktokLink: "#"
};

CONFIG.whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappDefaultMessage)}`;
CONFIG.phoneUrl = `tel:${CONFIG.phoneTel}`;
