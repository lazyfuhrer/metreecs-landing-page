import Link from 'next/link'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

const footerLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "FAQ", href: "/faq" },
  { name: "Careers", href: "/careers" },
  { name: "Press Releases", href: "/press" },
  { name: "Partnerships", href: "/partnerships" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#bae6fd]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className="text-[#1a365d] hover:text-[#2563eb] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-[#1a365d] hover:text-[#2563eb] transition-colors"
              aria-label={link.name}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
        <div className="text-center text-[#1a365d] text-sm">
          <p className="mb-4">
            Petrecs is a leading provider of AI-powered demand forecasting solutions. We are committed to environmental and social responsibility, and hold certifications in data privacy and security.
          </p>
          <p>
            © {new Date().getFullYear()} Petrecs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

