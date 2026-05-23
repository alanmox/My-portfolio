'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'

export function MobileNav() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open navigation menu">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[85%] max-w-xs">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Navigate to sections in this landing page.</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-2 px-4 pb-6">
            <SheetClose asChild>
              <Link
                className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                href="#home"
              >
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                href="#services"
              >
                Services
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                href="#projects"
              >
                Projects
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                href="#contact"
              >
                Contact
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

