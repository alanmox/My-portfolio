import Link from 'next/link'
import Image from 'next/image'
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
import { ScrollAnimationTrigger } from '@/components/ui/scroll-animation-trigger'
import { TerminalBackground } from '@/components/terminal-background'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/mobile-nav'
import { ThemeToggle } from '@/components/theme-toggle'
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
    title: 'Product Engineering',
    description:
      'Building practical web and mobile products that solve real business problems with clear architecture and maintainable delivery.',
    icon: Code2,
  },
  {
    title: 'Cloud & Deployment Operations',
    description:
      'Deploying and stabilizing production systems across VPS and cloud environments with performance, uptime, and operational clarity in mind.',
    icon: Wrench,
  },
  {
    title: 'Infrastructure & Recovery Support',
    description:
      'Helping teams recover fast from deployment issues, debug production incidents, and keep business systems moving safely.',
    icon: Rocket,
  },
]

const projects = [
  {
    title: 'MATUMIZI APP',
    description:
      'Mobile expense tracking app for practical day-to-day financial logging with transaction history, balance visibility, and clean user flows.',
    stack: ['React Native', 'Expo', 'JavaScript', 'Mobile UX'],
    label: 'Fintech Mobile App',
    downloadHref: 'https://github.com/alanmox/MATUMIZI-APP/actions/runs/27353127136/artifacts/7568127846',
    problem:
      'Users needed a simple way to track day-to-day money movement without complicated financial software.',
    solution:
      'Built a React Native expense tracker with transaction logging, history views, and live balance visibility in a clean interface.',
    impact:
      'Delivered a practical mobile-first tracker that simplifies daily pay-in/pay-out recording and balance visibility.',
  },
  {
    title: 'REVON SMM',
    description:
      'Worldwide automated SMM panel for buying followers, likes, views, and engagement across Facebook, Instagram, YouTube, TikTok, and more.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    label: 'SaaS Platform',
    href: 'https://revonsmm.com',
    problem:
      'Users needed a fast, affordable, and reliable way to grow social media presence without sharing passwords or dealing with slow delivery.',
    solution:
      'Built a fully automated SMM panel with instant order processing, multiple payment methods, and a user-friendly dashboard for managing social media services.',
    impact:
      'Delivered a scalable platform providing 24/7 automated social media marketing services with superior quality and prompt delivery.',
  },
  {
    title: 'REVON BOT',
    description:
      'Cloud-based messaging automation platform for connecting and automating messaging across channels with speed and security.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloud API'],
    label: 'SaaS Platform',
    href: 'https://revonbot.com',
    problem:
      'Businesses needed a fast, secure, and professional way to automate messaging without complex setup or maintenance.',
    solution:
      'Built a cloud-based automation platform with easy messaging workflows, secure API integration, and a clean user interface.',
    impact:
      'Delivered a reliable SaaS platform that simplifies messaging automation for businesses at scale.',
  },
  {
    title: 'ALANMOX DNS Tunnel',
    description:
      'High-performance DNS tunneling solution with user management, service controls, and operational commands for Ubuntu server environments.',
    stack: ['Rust', 'Bash', 'Ubuntu', 'Systemd'],
    label: 'Infrastructure Product',
    href: 'https://github.com/alanmox/allanmox-dns',
    problem:
      'Teams and operators needed a manageable DNS tunneling setup that is fast, reliable, and easier to operate on Ubuntu VPS environments.',
    solution:
      'Built an installable DNS tunnel system with guided setup, service controls, user management flows, and monitoring-oriented command structure.',
    impact:
      'Delivered an approach targeting 10Mbps+ DNS tunnel performance while improving repeat deployment consistency and operator control.',
  },
  {
    title: 'ALLANTECH Thumb Intake Desk',
    description:
      'Camera-assisted thumb capture and printable workflow for intake teams, designed for practical field operations and mobile device compatibility.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    label: 'Business Workflow App',
    href: 'https://github.com/alanmox/fingerprint-web',
    problem:
      'Manual intake workflows needed a cleaner way to capture thumb images from mobile devices and produce printable administrative records.',
    solution:
      'Created a camera-assisted web intake desk with image processing and a printable letter flow designed for practical field operations.',
    impact:
      'Improved intake consistency by combining capture, review, processing, and printable output in a single mobile-friendly flow.',
  },
  {
    title: 'Email Verification Authentication System',
    description:
      'Full-stack authentication starter with signup verification, JWT login, forgot-password flow, and reset-password lifecycle for secure account handling.',
    stack: ['Next.js', 'Express', 'MySQL', 'JWT'],
    label: 'Security Foundation',
    href: 'https://github.com/alanmox/Email-verification-allanmox',
    problem:
      'Starter products often launch without secure, production-minded authentication and account recovery foundations.',
    solution:
      'Delivered a full-stack auth system with signup verification, JWT login, forgot-password, and reset-password lifecycle handling.',
    impact:
      'Provided a reusable authentication baseline to reduce security rework and accelerate safer MVP launches.',
  },
]

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'React Native',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MySQL/PostgreSQL',
  'Linux & Ubuntu',
  'VPS Deployment',
  'Cloud Operations',
  'Backend Systems',
  'Component Design',
  'Responsive UI',
]

const highlights = [
  'React, Next.js & TypeScript for modern web apps',
  'Cloud servers, APIs & deployment pipelines',
  'Mobile apps with React Native & Expo',
]

const metrics = [
  { value: '5+', label: 'Production apps built & live' },
  { value: '3+', label: 'Years working with real clients' },
  { value: '100%', label: 'Projects delivered to production' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="glass-nav fixed top-0 left-0 right-0 z-50">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-10">
          <Link href="#home" className="flex items-center gap-2.5 text-sm font-bold tracking-tight text-foreground">
            <Image
              src="/alanmoxlogo.jpeg"
              alt="Alanmox logo"
              width={30}
              height={30}
              className="rounded-lg object-cover"
            />
            <span className="hidden sm:inline">Alanmox</span>
          </Link>
          <div className="hidden items-center gap-1 text-[13px] font-medium text-muted-foreground md:flex">
            <Link className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-accent/8 hover:text-foreground" href="#home">
              Home
            </Link>
            <Link className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-accent/8 hover:text-foreground" href="#services">
              Services
            </Link>
            <Link className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-accent/8 hover:text-foreground" href="#projects">
              Projects
            </Link>
            <Link className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-accent/8 hover:text-foreground" href="#contact">
              Contact
            </Link>
            <ThemeToggle />
          </div>
          <MobileNav />
        </nav>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollAnimationTrigger effect="fade" delay={0.1}>
        <section id="home" className="grid-glow hero-gradient relative mt-20 mb-8 overflow-hidden rounded-[2rem] border border-border px-5 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-14 md:mt-24 md:px-14 md:py-16 lg:mt-28">
          <TerminalBackground />
          <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="eyebrow h-auto flex-wrap text-center border-accent/20 bg-accent/8 text-accent whitespace-normal">
                  <Sparkles className="mr-1.5 size-3 shrink-0" />
                  <span>Full-Stack Developer &bull; Cloud Engineer</span>
                </Badge>
                <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.05em] leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                  Hi, I&apos;m Allan — I build
                  <span className="gradient-text"> web apps, APIs & mobile products</span>{' '}
                  that ship to production.
                </h1>
                <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
                  Full-stack developer with experience building and deploying real products
                  for businesses. From frontend interfaces to backend systems and cloud
                  infrastructure — I handle the full stack so you can focus on your users.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group h-12 w-full rounded-full bg-accent px-7 text-white shadow-[0_18px_40px_-20px_rgb(13,148,136,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_24px_50px_-20px_rgb(13,148,136,0.55)] sm:w-auto"
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
                  className="h-12 w-full rounded-full border-border bg-card px-7 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/5 sm:w-auto"
                >
                  <Link href="#contact">Contact me</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {highlights.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-muted-foreground hover:bg-secondary/20"
                  >
                    <Sparkles className="size-3.5 text-accent" />
                    <span>{item}</span>
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="premium-surface relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-accent/90 via-accent/70 to-brand-glow/60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)]" />
              <CardHeader className="relative z-10 pt-10">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                  <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                    About me
                  </div>
                  <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
                    Available for selected work
                  </div>
                </div>
                <div className="glass-card flex items-center gap-4 rounded-2xl p-4">
                  <Avatar className="size-16 border-2 border-white/20 shadow-lg">
                    <AvatarImage src="/alanmoxlogo.jpeg" alt="Alanmox logo" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-lg font-bold tracking-tight text-foreground">Alanmox</p>
                    <p className="text-sm text-muted-foreground">
                      Full-stack software innovator
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I innovate products that balance clarity, performance, and visual quality across
                  the stack. My approach combines thoughtful UX, maintainable frontend systems,
                  dependable backend structure, and execution quality that supports real business
                  growth.
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-border bg-secondary/50 p-4"
                    >
                      <p className="text-lg font-bold tracking-tight text-foreground">{metric.value}</p>
                      <p className="mt-1 text-[11px] font-medium leading-relaxed text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-muted-foreground bg-secondary/50 hover:bg-secondary/70 border-border/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        </ScrollAnimationTrigger>

        <div className="section-divider mx-auto my-2 w-3/4" />

        <ScrollAnimationTrigger effect="slide" direction="up" delay={0.2}>
        <section id="services" className="py-8 md:py-12">
          <div className="mb-8 space-y-3">
            <Badge className="eyebrow border-accent/20 bg-accent/8 text-accent">
              What I Offer
            </Badge>
            <h2 className="section-title">Services</h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Engineering and deployment services built for teams that need
              dependable, production-ready delivery.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <Card
                  key={service.title}
                  className="premium-surface card-hover group p-1"
                >
                  <CardHeader className="space-y-5 p-6">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_12px_30px_-12px_rgb(13,148,136,0.5)]">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-2.5">
                      <CardTitle className="text-lg font-bold tracking-tight">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>
        </ScrollAnimationTrigger>

        <div className="section-divider mx-auto my-2 w-3/4" />

        <ScrollAnimationTrigger effect="slide" direction="up" delay={0.2}>
        <section id="projects" className="py-8 md:py-12">
          <div className="mb-8 space-y-3">
            <Badge className="eyebrow border-accent/20 bg-accent/8 text-accent">
              Featured Work
            </Badge>
            <h2 className="section-title">Selected projects</h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Real projects researched from my public GitHub work, including infrastructure,
              workflow automation, full-stack security systems, and mobile product delivery.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="premium-surface card-hover group overflow-hidden"
              >
                <div className="relative h-40 bg-gradient-to-br from-accent/80 via-accent/60 to-brand-glow/40 sm:h-44">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%)]" />
                  <div className="absolute left-5 right-5 top-5 rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-sm">
                    <div className="mb-3 flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-white/80" />
                      <span className="size-2 rounded-full bg-white/60" />
                      <span className="size-2 rounded-full bg-white/40" />
                    </div>
                    <div className="grid gap-1.5">
                      <div className="h-2 w-3/5 rounded-full bg-white/70" />
                      <div className="h-2 w-full rounded-full bg-white/25" />
                      <div className="h-2 w-4/5 rounded-full bg-white/25" />
                    </div>
                  </div>
                </div>
                <CardHeader className="space-y-3 p-5 pb-3 sm:p-6 sm:pb-3">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="outline" className="text-muted-foreground bg-secondary/30">
                      {project.label}
                    </Badge>
                    <MoveRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-bold tracking-tight">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5 px-5 pb-4 sm:px-6">
                  {project.stack.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="text-muted-foreground bg-secondary/50 hover:bg-secondary/70 border-border/50"
                    >
                      {item}
                    </Badge>
                  ))}
                </CardContent>
                <CardContent className="space-y-2.5 px-5 pb-4 pt-0 sm:px-6">
                  <div className="rounded-xl border border-border bg-secondary/50 p-3 text-[13px] leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Problem:</span>{' '}
                    {project.problem}
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/50 p-3 text-[13px] leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Solution:</span>{' '}
                    {project.solution}
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/50 p-3 text-[13px] leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Impact:</span>{' '}
                    {project.impact}
                  </div>
                </CardContent>
                <CardFooter className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                  <div className="flex flex-wrap gap-3">
                    {project.href && (
                      <Button
                        asChild
                        variant="ghost"
                        className="group/cta h-auto px-0 text-accent hover:bg-transparent"
                      >
                        <Link href={project.href} target="_blank" rel="noreferrer">
                          {project.href.includes('github.com') ? 'View on GitHub' : 'View Link'}
                          <ArrowRight className="transition-transform duration-300 group-hover/cta:translate-x-1" />
                        </Link>
                      </Button>
                    )}
                    {project.downloadHref && (
                      <Button
                        asChild
                        variant="ghost"
                        className="group/cta h-auto px-0 text-accent hover:bg-transparent"
                      >
                        <Link href={project.downloadHref} target="_blank" rel="noreferrer">
                          Download APK
                          <ArrowRight className="transition-transform duration-300 group-hover/cta:translate-x-1" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        </ScrollAnimationTrigger>

        <div className="section-divider mx-auto my-2 w-3/4" />

        <section className="py-8 md:py-12">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="premium-surface">
              <CardHeader className="p-6 sm:p-7">
                <Badge className="eyebrow w-fit border-accent/20 bg-accent/8 text-accent">
                  Expertise
                </Badge>
                <CardTitle className="pt-3 text-2xl font-bold tracking-tight">What I do</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  A quick summary of how I support client goals through innovation and delivery.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-6 pt-0 sm:p-7 sm:pt-0">
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-5 transition-colors duration-300 hover:bg-secondary/70">
                  <BriefcaseBusiness className="mt-0.5 size-4 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    I create professional web platforms for local businesses and freelancers that
                    need a strong and modern online presence.
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-5 transition-colors duration-300 hover:bg-secondary/70">
                  <Code2 className="mt-0.5 size-4 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    I structure codebases around reusable systems so future updates are faster,
                    easier to manage, and ready for remote collaboration.
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-5 transition-colors duration-300 hover:bg-secondary/70">
                  <Rocket className="mt-0.5 size-4 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    I focus on performance, clarity, and responsive behavior so products launch with
                    confidence across devices and teams.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-surface border-accent/10 bg-accent/[0.02]">
              <CardHeader className="p-6 sm:p-7">
                <Badge className="eyebrow w-fit border-accent/20 bg-accent/8 text-accent">
                  FAQ
                </Badge>
                <CardTitle className="pt-3 text-2xl font-bold tracking-tight">
                  Questions clients usually ask
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  Common questions before starting a project.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 sm:p-7 sm:pt-0">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-b border-border/60">
                    <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:text-accent">
                      What kind of websites do you build?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      I deliver portfolio sites, business websites, landing pages, dashboards, and
                      custom full-stack applications tailored to real client goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="stack" className="border-b border-border/60">
                    <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:text-accent">
                      Who do you typically work with?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      I work with local businesses, freelancers, and remote-first teams that need
                      dependable web products and smooth communication throughout delivery.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="customize" className="border-b-0">
                    <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:text-accent">
                      What is your delivery style?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      I follow a clear process: align on goals, design and build in phases, share
                      regular updates, and deliver production-ready work with clean handover.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="section-divider mx-auto my-2 w-3/4" />

        <section id="contact" className="py-8 md:py-12">
          <Card className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border-0 bg-gradient-to-br from-accent via-accent/90 to-brand-glow/70 text-white shadow-[0_30px_80px_-30px_rgb(13,148,136,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
            <CardHeader className="relative z-10 p-6 sm:p-8 md:p-10">
              <Badge className="eyebrow w-fit border-white/15 bg-white/10 text-white backdrop-blur-sm">
                Contact
              </Badge>
              <CardTitle className="pt-4 text-3xl font-bold tracking-[-0.03em] md:text-4xl">
                Let&apos;s build something great
              </CardTitle>
              <CardDescription className="max-w-2xl text-[15px] leading-relaxed text-white/80">
                Open to local and remote opportunities. Reach out by email or WhatsApp to discuss
                your project.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col gap-4 p-6 pt-0 sm:p-8 sm:pt-0 md:p-10 md:pt-0 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-3">
                <div className="flex w-full items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm text-white/90 backdrop-blur-sm sm:w-auto">
                  <Mail className="size-4" />
                  <span className="break-all">alanmox441@gmail.com</span>
                </div>
                <div className="flex w-full items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm text-white/90 backdrop-blur-sm sm:w-auto">
                  <Globe className="size-4" />
                  <span>WhatsApp: +255 629 360 383</span>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="h-12 w-full rounded-full border border-white/20 bg-white px-7 text-foreground shadow-[0_18px_35px_-20px_rgb(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto"
              >
                <Link href="mailto:alanmox441@gmail.com">Start a conversation</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <footer className="border-t border-border py-8 text-center">
          <p className="text-[13px] text-muted-foreground">
            &copy; {new Date().getFullYear()} Alanmox. Built with precision.
          </p>
        </footer>
      </div>
    </main>
  )
}
