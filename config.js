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
  // All website forms (booking, service booking, contact) are submitted to this email.
  // Powered by https://formsubmit.co — on the very first submission you will receive
  // a confirmation email from FormSubmit at this address. Click the link in that
  // email once to activate the endpoint. After that, every form submission will
  // be delivered straight to your inbox.
  formsEmail: "bodynova@hucoskills.com",
  aboutShowcaseMediaType: "image",
  aboutShowcaseImage: "assets/images/about-showcase.jpg",
  aboutShowcaseVideo: "assets/videos/about-showcase.mp4",
  aboutShowcasePoster: "assets/images/about-showcase.jpg"
};

CONFIG.whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappDefaultMessage)}`;
CONFIG.phoneUrl = `tel:${CONFIG.phoneTel}`;
