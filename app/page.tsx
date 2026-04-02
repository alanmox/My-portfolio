import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, Code2, Mail, Rocket, Wrench } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const services = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive interfaces with React, Next.js, Tailwind CSS, and reusable component systems.',
    icon: Code2,
  },
  {
    title: 'Full-Stack Projects',
    description:
      'Creating complete web experiences from UI to application logic with clean, maintainable structure.',
    icon: Wrench,
  },
  {
    title: 'Product Delivery',
    description:
      'Turning ideas into polished websites that are fast, modern, and ready to share with clients or teams.',
    icon: Rocket,
  },
]

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal brand site designed to present skills, featured work, and contact information in a clean modern layout.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Business Landing Page',
    description:
      'A conversion-focused marketing page with reusable sections, strong visual hierarchy, and mobile-first responsiveness.',
    stack: ['React', 'UI Components', 'Responsive Design'],
  },
  {
    title: 'Dashboard Interface',
    description:
      'An admin-style interface using structured cards, forms, dialogs, and scalable component architecture.',
    stack: ['Radix UI', 'shadcn/ui', 'App Router'],
  },
]

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Component Design',
  'Responsive UI',
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.08),transparent_35%),linear-gradient(to_bottom,var(--background),color-mix(in_oklab,var(--background)_88%,var(--muted)))]">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 md:px-10 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Software Developer
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                I build modern web experiences that feel fast, clear, and reliable.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                Welcome to the portfolio of Allanmox. This site showcases web development
                work, reusable UI systems, and practical solutions built with modern frontend
                tools.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#projects">
                  View projects
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#contact">Contact me</Link>
              </Button>
            </div>
          </div>

          <Card className="border-border/60 bg-background/85 shadow-sm backdrop-blur">
            <CardHeader>
              <CardTitle>About me</CardTitle>
              <CardDescription>
                A short profile section using the existing avatar and card components.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-4">
                <Avatar className="size-16 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Allanmox portrait" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-lg font-semibold">Allanmox</p>
                  <p className="text-sm text-muted-foreground">
                    Frontend and web-focused software developer
                  </p>
                </div>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                I enjoy creating websites that combine clean design, maintainable code, and
                smooth user experience. My focus is building interfaces that are easy to use
                and easy to scale.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="rounded-full px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Card key={service.title} className="border-border/60 bg-background/90">
                <CardHeader className="space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </section>

        <section id="projects" className="space-y-6">
          <div className="space-y-2">
            <Badge variant="outline" className="rounded-full px-3 py-1">
              Featured Work
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Selected projects</h2>
            <p className="max-w-2xl text-muted-foreground">
              A few example project areas you can expand with your real case studies, links,
              screenshots, and GitHub repositories.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="border-border/60 bg-background/90">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="secondary" className="rounded-full px-3 py-1">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="px-0">
                    Project details
                    <ArrowRight />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-border/60 bg-background/90">
            <CardHeader>
              <CardTitle>What I do</CardTitle>
              <CardDescription>
                A quick summary of the kind of work this portfolio can present.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
              <div className="flex items-start gap-3 rounded-xl border p-4">
                <BriefcaseBusiness className="mt-0.5 size-4 text-primary" />
                <p>
                  I create professional websites for personal brands, startups, and businesses
                  that need a strong and modern online presence.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border p-4">
                <Code2 className="mt-0.5 size-4 text-primary" />
                <p>
                  I structure codebases around reusable components so future updates are faster
                  and easier to manage.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border p-4">
                <Rocket className="mt-0.5 size-4 text-primary" />
                <p>
                  I care about performance, clarity, and responsive behavior so projects feel
                  polished across devices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-background/90">
            <CardHeader>
              <CardTitle>Questions clients usually ask</CardTitle>
              <CardDescription>
                This uses your generated accordion component and works well for FAQs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services">
                  <AccordionTrigger>What kind of websites do you build?</AccordionTrigger>
                  <AccordionContent>
                    Portfolio sites, landing pages, dashboards, and custom frontend experiences
                    built with modern React and Next.js tooling.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="stack">
                  <AccordionTrigger>Which technologies do you work with?</AccordionTrigger>
                  <AccordionContent>
                    I work with Next.js, React, TypeScript, Tailwind CSS, component libraries,
                    and frontend-focused application architecture.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="customize">
                  <AccordionTrigger>How do I customize this portfolio?</AccordionTrigger>
                  <AccordionContent>
                    Start with <code>app/page.tsx</code>, then replace the placeholder projects,
                    about text, and contact links with your real information.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section id="contact">
          <Card className="border-border/60 bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Let&apos;s build something great</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Add your email address, LinkedIn, GitHub, or WhatsApp link here so visitors can
                reach you directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4" />
                <span>your.email@example.com</span>
              </div>
              <Button asChild variant="secondary" size="lg" className="rounded-full">
                <Link href="mailto:your.email@example.com">Start a conversation</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  )
}
