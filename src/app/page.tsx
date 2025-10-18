"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardTwo from "@/components/sections/feature/FeatureCardTwo";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Bed, Dumbbell, Handshake, Leaf, Sun, Utensils } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A luxurious hotel lobby featuring elegant architecture, rich decor, and comfortable seating under a stained glass ceiling."},
  {"id":"feature-image-1","url":"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Cozy and modern hotel bedroom interior with elegant decor and soft lighting."},
  {"id":"feature-image-2","url":"https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant rooftop pool with cityscape backdrop at sunset, reflecting urban luxury."},
  {"id":"feature-image-3","url":"https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A chef artfully plating a gourmet dish with mushrooms and greens on wood slices."},
  {"id":"testimonial-image-1","url":"https://images.pexels.com/photos/8790804/pexels-photo-8790804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elderly couple smiling and shaking hands in a lively outdoor celebration."},
  {"id":"testimonial-image-2","url":"https://images.pexels.com/photos/5371673/pexels-photo-5371673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"An elegant woman in a classic white dress holding a Maltese dog in a luxurious, vintage lobby."},
  {"id":"testimonial-image-3","url":"https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businessman in suit shaking hands at office desk, symbolizing successful partnership."},
  {"id":"testimonial-image-4","url":"https://images.pexels.com/photos/5876657/pexels-photo-5876657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Diverse group enjoying a festive dinner with wine and delicious food."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarStyleMinimal brandName="LuxuryStay" />
        </div>
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to LuxuryStay"
            description="Experience the ultimate in comfort and elegance at our luxury hotel."
            imageSrc={(assetMap.find(a => a.id === "hero-image")?.url) || "/public/images/placeholder.webp"}
            buttons={[{ text: "Book Now", href: "https://example.com" }]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Discover the story behind our beautiful hotel and what makes us unique."
            bulletPoints={[
              { title: "Exquisite Rooms", description: "Our rooms are designed for ultimate relaxation.", icon: Bed },
              { title: "Fine Dining", description: "Enjoy world-class cuisine at our restaurant.", icon: Utensils },
              { title: "Unmatched Service", description: "Our staff is dedicated to providing the best service.", icon: Handshake }
            ]}
            imageSrc={(assetMap.find(a => a.id === "feature-image-1")?.url) || "/public/images/placeholder.webp"}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Hotel Features"
            description="Indulge in our exclusive features designed for luxury."
            features={[
              { title: "Gorgeous Pools", description: "Relax by our exclusive pools.", icon: Sun },
              { title: "Modern Fitness Center", description: "Stay fit during your stay with us.", icon: Dumbbell },
              { title: "Spa Services", description: "Rejuvenate at our world-class spa.", icon: Leaf }
            ]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            title="Guest Testimonials"
            description="Hear from our satisfied guests who loved their stay."
            testimonials={[
              {
                id: "1",
                name: "John Doe",
                role: "Business Traveler",
                testimonial: "Absolutely wonderful experience!",
                imageSrc: (assetMap.find(a => a.id === "testimonial-image-1")?.url) || "/public/images/placeholder.webp"
              },
              {
                id: "2",
                name: "Jane Smith",
                role: "Vacationer",
                testimonial: "The best hotel I've ever stayed at.",
                imageSrc: (assetMap.find(a => a.id === "testimonial-image-2")?.url) || "/public/images/placeholder.webp"
              },
              {
                id: "3",
                name: "Mike Johnson",
                role: "Tourist",
                testimonial: "Unforgettable hospitality.",
                imageSrc: (assetMap.find(a => a.id === "testimonial-image-3")?.url) || "/public/images/placeholder.webp"
              },
              {
                id: "4",
                name: "Emily Clarke",
                role: "Frequent Guest",
                testimonial: "I keep coming back, and for good reason!",
                imageSrc: (assetMap.find(a => a.id === "testimonial-image-4")?.url) || "/public/images/placeholder.webp"
              }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get In Touch"
            title="Contact Us"
            description="Have questions? Reach out to us."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Hotel",
                items: [
                  { label: "About Us", href: "about" },
                  { label: "Rooms", href: "rooms" }
                ]
              },
              {
                title: "Services",
                items: [
                  { label: "Spa", href: "spa" },
                  { label: "Dining", href: "dining" }
                ]
              }
            ]}
            copyrightText="© 2025 LuxuryStay"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
