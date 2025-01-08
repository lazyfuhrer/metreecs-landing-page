'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { motion, useScroll, useTransform } from "motion/react"

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigationItems = [
  { title: 'Product', href: '/product' },
  { title: 'Solutions', href: '/solutions' },
  { title: 'Company', href: '/company' },
  { title: 'Resources', href: '/resources' },
]

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  )

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor }}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between p-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <Link href="/" className="text-xl font-bold text-[#1a365d]">
              Logo
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <motion.div variants={itemVariants}>
                      <NavigationMenuLink
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#1a365d] transition-colors hover:bg-[#2563eb]/10 hover:text-[#2563eb] focus:bg-[#2563eb]/10 focus:text-[#2563eb] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#2563eb]/10 data-[state=open]:bg-[#2563eb]/10"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <motion.div variants={itemVariants}>
              <Button 
                variant="outline" 
                className="bg-transparent hover:bg-[#2563eb]/10 text-[#2563eb] border-[#2563eb]" 
                asChild
              >
                <Link href="/demo">Request a demo</Link>
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white" asChild>
                <Link href="/start">Get Started</Link>
              </Button>
            </motion.div>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-[#1a365d]">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <nav className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block px-2 py-1 text-lg text-[#1a365d] hover:text-[#2563eb]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Button 
                  variant="outline" 
                  className="bg-transparent hover:bg-[#2563eb]/10 text-[#2563eb] border-[#2563eb] w-full" 
                  asChild
                >
                  <Link href="/demo" onClick={() => setIsOpen(false)}>
                    Request a demo
                  </Link>
                </Button>
                <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white w-full" asChild>
                  <Link href="/start" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}