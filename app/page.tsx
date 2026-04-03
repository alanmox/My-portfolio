import Link from 'next/link'
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Globe,
  Mail,
  MoveRight,
  Rocket,
  Sparkles,
  Wrench,
} from 'lucide-react'

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
    title: 'Full-Stack Development',
    description:
      'Building complete web products across frontend interfaces, backend logic, APIs, and scalable component systems.',
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
    label: 'Personal Brand',
    accent: 'from-slate-950 via-teal-900 to-cyan-600',
  },
  {
    title: 'Business Landing Page',
    description:
      'A conversion-focused marketing page with reusable sections, strong visual hierarchy, and mobile-first responsiveness.',
    stack: ['React', 'UI Components', 'Responsive Design'],
    label: 'Marketing System',
    accent: 'from-slate-900 via-emerald-700 to-cyan-500',
  },
  {
    title: 'Dashboard Interface',
    description:
      'An admin-style interface using structured cards, forms, dialogs, and scalable component architecture.',
    stack: ['Radix UI', 'shadcn/ui', 'App Router'],
    label: 'Product UI',
    accent: 'from-slate-900 via-sky-700 to-teal-500',
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

const highlights = [
  'Premium product interfaces',
  'Fast, scalable full-stack architecture',
  'Reliable delivery for clients and teams',
]

const metrics = [
  { value: '03+', label: 'Core service areas' },
  { value: '06', label: 'Primary full-stack strengths' },
  { value: '100%', label: 'Responsive-first workflow' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-6 md:px-8 md:py-10">
        <section className="section-shell grid-glow relative px-6 py-8 md:px-10 md:py-12 lg:px-12">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_55%)]" />
          <div className="absolute -right-16 top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.18),transparent_70%)] blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <Badge className="eyebrow border-cyan-200 bg-cyan-50 text-slate-700 shadow-sm">
                  Software Developer
                </Badge>
                <div className="space-y-5">
                  <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance text-slate-950 md:text-7xl">
                    I design and build
                    <span className="bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_55%,#06b6d4_100%)] bg-clip-text text-transparent">
                      {' '}
                      premium web experiences
                    </span>{' '}
                    that feel fast, modern, and dependable.
                  </h1>
                  <p className="max-w-2xl text-[15px] leading-8 text-slate-600 md:text-lg">
                    Welcome to the portfolio of Allanmox. I build polished full-stack
                    products, modern websites, and user-focused digital experiences that
                    combine strong design judgment with reliable engineering.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group h-12 rounded-full bg-slate-950 px-6 text-white shadow-[0_18px_40px_-20px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900"
                >
                  <Link href="#projects">
                    View projects
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-slate-200 bg-white/85 px-6 text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50/60"
                >
                  <Link href="#contact">Contact me</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur"
                  >
                    <Sparkles className="size-4 text-cyan-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="premium-surface relative overflow-hidden border-white/90 bg-white/82">
              <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(15,118,110,0.8),rgba(6,182,212,0.55))]" />
              <CardHeader className="relative pt-10">
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                    About me
                  </div>
                  <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur">
                    Available for selected work
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200/70 bg-white/92 p-4 shadow-sm">
                  <Avatar className="size-18 border-2 border-white shadow-md">
                    <AvatarImage src="/placeholder-user.jpg" alt="Allanmox portrait" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-xl font-semibold text-slate-950">Allanmox</p>
                    <p className="text-sm text-slate-600">
                      Full-stack software developer building modern web products
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <p className="text-sm leading-7 text-slate-600">
                  I build products that balance clarity, performance, and visual quality across
                  the stack. My approach combines thoughtful UX, maintainable frontend systems,
                  dependable backend structure, and codebases that stay clean as products grow.
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[1.35rem] border border-slate-200/70 bg-slate-50/90 p-4"
                    >
                      <p className="text-lg font-semibold text-slate-950">{metric.value}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="rounded-full border-teal-100 bg-teal-50/70 px-3 py-1.5 text-slate-700"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Card
                key={service.title}
                className="premium-surface group border-white/80 bg-white/78 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/70"
              >
                <CardHeader className="space-y-5 p-7">
                  <div className="flex size-14 items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,118,110,0.9),rgba(6,182,212,0.75))] text-white shadow-[0_18px_30px_-18px_rgba(6,182,212,0.65)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-slate-950">{service.title}</CardTitle>
                    <CardDescription className="text-[15px] leading-7 text-slate-600">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </section>

        <section id="projects" className="space-y-6">
          <div className="space-y-3 px-1">
            <Badge className="eyebrow border-amber-200 bg-amber-50 text-slate-700">
              Featured Work
            </Badge>
            <h2 className="section-title">Selected projects</h2>
            <p className="max-w-2xl text-[15px] leading-7 text-slate-600 md:text-base">
              A few example project areas you can expand with your real case studies, links,
              screenshots, and GitHub repositories.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="premium-surface group overflow-hidden border-white/80 bg-white/82 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200"
              >
                <div className={`relative h-44 bg-gradient-to-br ${project.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_30%)]" />
                  <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="size-2 rounded-full bg-white/80" />
                      <span className="size-2 rounded-full bg-white/60" />
                      <span className="size-2 rounded-full bg-white/40" />
                    </div>
                    <div className="grid gap-2">
                      <div className="h-2.5 w-3/5 rounded-full bg-white/75" />
                      <div className="h-2.5 w-full rounded-full bg-white/30" />
                      <div className="h-2.5 w-4/5 rounded-full bg-white/30" />
                    </div>
                  </div>
                </div>
                <CardHeader className="space-y-4 p-7 pb-4">
                  <div className="flex items-center justify-between gap-3">
                    <Badge className="rounded-full border-0 bg-slate-100 px-3 py-1 text-slate-600">
                      {project.label}
                    </Badge>
                    <MoveRight className="size-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-slate-950">{project.title}</CardTitle>
                    <CardDescription className="text-[15px] leading-7 text-slate-600">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 px-7 pb-5">
                  {project.stack.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600"
                    >
                      {item}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="px-7 pb-7 pt-0">
                  <Button
                    variant="ghost"
                    className="group/cta h-auto px-0 text-slate-900 hover:bg-transparent"
                  >
                    Project details
                    <ArrowRight className="transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="premium-surface border-white/85 bg-white/82">
            <CardHeader className="p-7">
              <Badge className="eyebrow w-fit border-cyan-200 bg-cyan-50 text-slate-700">
                Expertise
              </Badge>
              <CardTitle className="pt-3 text-2xl text-slate-950">What I do</CardTitle>
              <CardDescription className="text-[15px] leading-7 text-slate-600">
                A quick summary of the kind of work this portfolio can present.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-7 pt-0 text-sm leading-7 text-slate-600">
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-5">
                <BriefcaseBusiness className="mt-0.5 size-4 text-teal-700" />
                <p>
                  I create professional websites for personal brands, startups, and businesses
                  that need a strong and modern online presence.
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-5">
                <Code2 className="mt-0.5 size-4 text-teal-700" />
                <p>
                  I structure codebases around reusable components so future updates are faster
                  and easier to manage.
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-5">
                <Rocket className="mt-0.5 size-4 text-teal-700" />
                <p>
                  I care about performance, clarity, and responsive behavior so projects feel
                  polished across devices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-surface border-[rgba(244,231,211,0.9)] bg-[rgba(244,231,211,0.34)]">
            <CardHeader className="p-7">
              <Badge className="eyebrow w-fit border-amber-200 bg-white/80 text-slate-700">
                FAQ
              </Badge>
              <CardTitle className="pt-3 text-2xl text-slate-950">
                Questions clients usually ask
              </CardTitle>
              <CardDescription className="text-[15px] leading-7 text-slate-600">
                This uses your generated accordion component and works well for FAQs.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-7 pt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services" className="border-b border-slate-300/60">
                  <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:text-teal-800">
                    What kind of websites do you build?
                  </AccordionTrigger>
                  <AccordionContent className="leading-7 text-slate-600">
                    Portfolio sites, landing pages, dashboards, business platforms, and custom
                    full-stack web applications built with modern JavaScript tooling.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="stack" className="border-b border-slate-300/60">
                  <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:text-teal-800">
                    Which technologies do you work with?
                  </AccordionTrigger>
                  <AccordionContent className="leading-7 text-slate-600">
                    I work with Next.js, React, TypeScript, Tailwind CSS, API integration,
                    backend logic, databases, and scalable application architecture.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="customize" className="border-b-0">
                  <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:text-teal-800">
                    How do I customize this portfolio?
                  </AccordionTrigger>
                  <AccordionContent className="leading-7 text-slate-600">
                    Start with <code>app/page.tsx</code>, then replace the placeholder projects,
                    about text, and contact links with your real information.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section id="contact">
          <Card className="relative overflow-hidden rounded-[2rem] border-0 bg-[linear-gradient(135deg,#0f172a_0%,#134e4a_55%,#155e75_100%)] text-primary-foreground shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(244,231,211,0.15),transparent_24%)]" />
            <CardHeader className="relative p-7 md:p-10">
              <Badge className="eyebrow w-fit border-white/15 bg-white/10 text-white backdrop-blur">
                Contact
              </Badge>
              <CardTitle className="pt-4 text-3xl tracking-[-0.03em]">
                Let&apos;s build something great
              </CardTitle>
              <CardDescription className="max-w-2xl text-[15px] leading-7 text-white/78">
                Add your email address, LinkedIn, GitHub, or WhatsApp link here so visitors can
                reach you directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-col gap-4 p-7 pt-0 md:p-10 md:pt-0 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/88 backdrop-blur">
                  <Mail className="size-4" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/88 backdrop-blur">
                  <Globe className="size-4" />
                  <span>Remote-friendly collaboration</span>
                </div>
              </div>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="h-12 rounded-full border border-white/10 bg-[#f4e7d3] px-6 text-slate-900 shadow-[0_18px_35px_-20px_rgba(244,231,211,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                <Link href="mailto:your.email@example.com">Start a conversation</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  )
}
