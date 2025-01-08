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

export function Footer() {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((link, index) => (
            <Link key={index} href={link.href} className="text-[#507a95] hover:text-[#1d8cd7] transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-[#507a95] hover:text-[#1d8cd7]">
            <span className="sr-only">Facebook</span>
            <Facebook size={24} />
          </a>
          <a href="#" className="text-[#507a95] hover:text-[#1d8cd7]">
            <span className="sr-only">Twitter</span>
            <Twitter size={24} />
          </a>
          <a href="#" className="text-[#507a95] hover:text-[#1d8cd7]">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-center text-[#507a95] text-sm">
          Petrecs is a leading provider of AI-powered demand forecasting solutions. We are committed to environmental and social responsibility, and hold certifications in data privacy and security. For more information, visit our FAQ, or follow us on our social media channels.
        </p>
      </div>
    </footer>
  )
}