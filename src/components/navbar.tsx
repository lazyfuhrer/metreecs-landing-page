'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

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

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between p-4 md:px-8">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button 
            variant="secondary" 
            className="bg-gray-100 hover:bg-gray-200 text-gray-800" 
            asChild
          >
            <Link href="/demo">Request a demo</Link>
          </Button>
          <Button className="bg-[rgb(29,140,215)] hover:bg-[rgb(26,126,193)] text-white" asChild>
            <Link href="/start">Get Started</Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-2 py-1 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button 
                variant="secondary" 
                className="bg-[rgb(232,238,243)] hover:bg-gray-200 text-gray-800 w-full" 
                asChild
              >
                <Link href="/demo" onClick={() => setIsOpen(false)}>
                  Request a demo
                </Link>
              </Button>
              <Button className="bg-[rgb(29,140,215)] hover:bg-[rgb(26,126,193)] text-white w-full" asChild>
                <Link href="/start" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

