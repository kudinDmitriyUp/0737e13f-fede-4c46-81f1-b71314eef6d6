"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metric/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Clock, Github, Linkedin, Mail, Sparkles, Star, Twitter, Zap } from "lucide-react";

export default function WaitlistPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="WaitlistApp"
          button={{
            text: "Join Waitlist",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Get Early Access to the Future"
          description="Join thousands of users waiting for the revolutionary mobile app that will transform how you work and connect. Be among the first to experience the next generation of productivity."
          tag="Coming Soon"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Join Waitlist",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "feature"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686527504-ym4p231i.jpg"
          imageAlt="Mobile app interface preview"
          imagePosition="right"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Why Join"
          description="We're building something extraordinary - a mobile app that combines cutting-edge technology with intuitive design to solve real problems. By joining our waitlist, you'll be part of an exclusive community that shapes the future of mobile productivity."
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Revolutionary Features"
          description="Discover what makes our app different and why early access is worth the wait"
          tag="Features"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Smart Notifications",
              description: "AI-powered notifications that learn your preferences and deliver the right information at the perfect moment",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686528284-etsq53lz.jpg",
              imageAlt: "Smart notification system"
            },
            {
              id: "2",
              title: "Advanced Analytics",
              description: "Get deep insights into your productivity patterns with beautiful charts and actionable recommendations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686529121-k25nepjp.jpg",
              imageAlt: "Analytics dashboard"
            },
            {
              id: "3",
              title: "Seamless Integration",
              description: "Connect with all your favorite tools and services through our extensive integration ecosystem",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686529834-tgrrpa43.jpg",
              imageAlt: "App integrations"
            },
            {
              id: "4",
              title: "Enterprise Security",
              description: "Bank-level encryption and security measures to keep your data safe and private",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686530533-3nwzgyxi.jpg",
              imageAlt: "Security features"
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardOne
          title="Early Access Tiers"
          description="Choose your level of early access to our revolutionary mobile app"
          tag="Access Levels"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "beta",
              name: "Beta Access",
              price: "Free",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686527504-ym4p231i.jpg",
              imageAlt: "Beta access preview"
            },
            {
              id: "premium",
              name: "Premium Early Access",
              price: "$19",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686529121-k25nepjp.jpg",
              imageAlt: "Premium features preview"
            },
            {
              id: "exclusive",
              name: "Exclusive Access",
              price: "$49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686529834-tgrrpa43.jpg",
              imageAlt: "Exclusive features preview"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Early Access Pricing"
          description="Special launch pricing for our waitlist members - save up to 60%"
          tag="Limited Time"
          tagIcon={Clock}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              price: "Free",
              name: "Starter Access",
              buttons: [
                {
                  text: "Join Free",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Beta app access",
                "Community support",
                "Basic features",
                "Launch updates"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$19/month",
              name: "Pro Early Access",
              buttons: [
                {
                  text: "Reserve Spot",
                  href: "contact"
                },
                {
                  text: "Compare Plans",
                  href: "pricing"
                }
              ],
              features: [
                "All starter features",
                "Priority support",
                "Advanced analytics",
                "Early feature access",
                "50% launch discount"
              ]
            },
            {
              id: "enterprise",
              price: "$49/month",
              name: "Enterprise Access",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "Custom Demo",
                  href: "contact"
                }
              ],
              features: [
                "All pro features",
                "Dedicated support",
                "Custom integrations",
                "Team collaboration",
                "60% launch discount"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Join the Movement"
          description="See why thousands are already waiting for our app launch"
          tag="Growing Fast"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "10K+",
              description: "Users on Waitlist"
            },
            {
              id: "2",
              value: "150+",
              description: "Beta Testers"
            },
            {
              id: "3",
              value: "98%",
              description: "User Satisfaction"
            },
            {
              id: "4",
              value: "4.9★",
              description: "Beta Rating"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Beta Users Say"
          description="Hear from early testers who are already experiencing the future"
          tag="Reviews"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Product Manager at TechCorp",
              testimonial: "This app completely transformed my workflow. The AI features are incredible and the interface is so intuitive. Can't wait for the full release!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686531244-84dxpjzw.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Startup Founder",
              testimonial: "I've been in beta for 3 months and it's already become essential to my daily routine. The productivity gains are real and measurable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686532222-3h2m4f0k.jpg",
              imageAlt: "Mike Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Digital Marketing Director",
              testimonial: "The analytics features alone are worth the wait. Finally, an app that understands what modern professionals actually need.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686532869-m7vvugwv.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Software Developer",
              testimonial: "Clean design, powerful features, and rock-solid performance. This is what mobile productivity apps should be.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686533555-zxckia4n.jpg",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>
      
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Join professionals from top organizations already on our waitlist"
          textboxLayout="default"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Join Waitlist"
          title="Secure Your Early Access"
          description="Be among the first to experience the future of mobile productivity. Join our exclusive waitlist today and get notified the moment we launch."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Join Waitlist"
          termsText="By joining our waitlist, you agree to receive launch updates and exclusive offers. Unsubscribe anytime."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763686534195-m1hnrksu.jpg"
          imageAlt="App development preview"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="WaitlistApp"
          copyrightText="© 2025 WaitlistApp, Inc."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "feature"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Beta Access",
                  href: "product"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Support",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/waitlistapp",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/waitlistapp",
              ariaLabel: "Connect on LinkedIn"
            },
            {
              icon: Github,
              href: "https://github.com/waitlistapp",
              ariaLabel: "View our GitHub"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}