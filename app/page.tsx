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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
    title: 'ALANMOX DNS Tunnel',
    description:
      'High-performance DNS tunneling solution with user management, service controls, and operational commands for Ubuntu server environments.',
    stack: ['Rust', 'Bash', 'Ubuntu', 'Systemd'],
    label: 'Infrastructure Product',
    accent: 'from-slate-900 via-slate-800 to-slate-700',
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
    accent: 'from-slate-900 via-slate-800 to-blue-700',
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
    accent: 'from-slate-900 via-blue-800 to-slate-700',
    href: 'https://github.com/alanmox/Email-verification-allanmox',
    problem:
      'Starter products often launch without secure, production-minded authentication and account recovery foundations.',
    solution:
      'Delivered a full-stack auth system with signup verification, JWT login, forgot-password, and reset-password lifecycle handling.',
    impact:
      'Provided a reusable authentication baseline to reduce security rework and accelerate safer MVP launches.',
  },
  {
    title: 'MATUMIZI APP',
    description:
      'Mobile expense tracking app for practical day-to-day financial logging with transaction history, balance visibility, and clean user flows.',
    stack: ['React Native', 'Expo', 'JavaScript', 'Mobile UX'],
    label: 'Fintech Mobile App',
    accent: 'from-slate-900 via-slate-800 to-indigo-700',
    href: 'https://github.com/alanmox/MATUMIZI-APP',
    problem:
      'Users needed a simple way to track day-to-day money movement without complicated financial software.',
    solution:
      'Built a React Native expense tracker with transaction logging, history views, and live balance visibility in a clean interface.',
    impact:
      'Delivered a practical mobile-first tracker that simplifies daily pay-in/pay-out recording and balance visibility.',
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
  'Innovation-first product strategy',
  'Deployment-focused engineering and infrastructure',
  'Reliable execution for business-critical systems',
]

const metrics = [
  { value: '04', label: 'Featured production projects' },
  { value: '12+', label: 'Core engineering capabilities' },
  { value: '100%', label: 'Production-focused delivery' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/80">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <Link href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">
            <Image
              src="/alanmoxlogo.jpeg"
              alt="Alanmox logo"
              width={28}
              height={28}
              className="rounded-md object-cover"
            />
            <span>Alanmox</span>
          </Link>
          <div className="flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
            <Link className="transition-colors hover:text-slate-900 dark:hover:text-white" href="#home">
              Home
            </Link>
            <Link className="transition-colors hover:text-slate-900 dark:hover:text-white" href="#services">
              Services
            </Link>
            <Link className="transition-colors hover:text-slate-900 dark:hover:text-white" href="#projects">
              Projects
            </Link>
            <Link className="transition-colors hover:text-slate-900 dark:hover:text-white" href="#contact">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-6 md:px-8 md:py-10">
        <section id="home" className="section-shell grid-glow relative px-6 py-8 md:px-10 md:py-12 lg:px-12">
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_60%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <Badge className="eyebrow border-slate-300 bg-slate-100 text-slate-700 shadow-sm">
                  Software Innovator • Deployment Engineer
                </Badge>
                <div className="space-y-5">
                  <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance text-slate-950 md:text-7xl">
                    I innovate and engineer
                    <span className="bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_55%,#2563eb_100%)] bg-clip-text text-transparent">
                      {' '}
                      premium web experiences
                    </span>{' '}
                    that feel fast, modern, and dependable.
                  </h1>
                  <p className="max-w-2xl text-[15px] leading-8 text-slate-600 md:text-lg">
                    Welcome to the portfolio of Alanmox. I help local businesses, freelancers,
                    and remote teams launch innovative digital products across web, mobile, and
                    infrastructure with dependable full-stack engineering, cloud deployment, and
                    practical IT operations.
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
                  className="h-12 rounded-full border-slate-300 bg-white px-6 text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
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
                    <Sparkles className="size-4 text-slate-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="premium-surface relative overflow-hidden border-slate-200 bg-white">
              <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.92),rgba(37,99,235,0.75))]" />
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
                    <AvatarImage src="/alanmoxlogo.jpeg" alt="Alanmox logo" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-xl font-semibold text-slate-950">Alanmox</p>
                    <p className="text-sm text-slate-600">
                      Full-stack software innovator delivering modern web products
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <p className="text-sm leading-7 text-slate-600">
                  I innovate products that balance clarity, performance, and visual quality across
                  the stack. My approach combines thoughtful UX, maintainable frontend systems,
                  dependable backend structure, and execution quality that supports real business
                  growth.
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
                      className="rounded-full border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-700"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="services" className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Card
                key={service.title}
                className="premium-surface group border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
              >
                <CardHeader className="space-y-5 p-7">
                  <div className="flex size-14 items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.9),rgba(37,99,235,0.78))] text-white shadow-[0_18px_30px_-18px_rgba(15,23,42,0.45)] transition-transform duration-300 group-hover:scale-105">
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
              Real projects researched from my public GitHub work, including infrastructure,
              workflow automation, full-stack security systems, and mobile product delivery.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="premium-surface group overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
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
                <CardContent className="space-y-3 px-7 pb-5 pt-0">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">Problem:</span> {project.problem}
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">Solution:</span> {project.solution}
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">Impact:</span> {project.impact}
                  </div>
                </CardContent>
                <CardFooter className="px-7 pb-7 pt-0">
                  <Button
                    asChild
                    variant="ghost"
                    className="group/cta h-auto px-0 text-slate-900 hover:bg-transparent"
                  >
                    <Link href={project.href} target="_blank" rel="noreferrer">
                      View on GitHub
                      <ArrowRight className="transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="premium-surface border-white/85 bg-white/82">
            <CardHeader className="p-7">
              <Badge className="eyebrow w-fit border-slate-300 bg-slate-100 text-slate-700">
                Expertise
              </Badge>
              <CardTitle className="pt-3 text-2xl text-slate-950">What I do</CardTitle>
              <CardDescription className="text-[15px] leading-7 text-slate-600">
                A quick summary of how I support client goals through innovation and delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-7 pt-0 text-sm leading-7 text-slate-600">
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-5">
                <BriefcaseBusiness className="mt-0.5 size-4 text-slate-700" />
                <p>
                  I create professional web platforms for local businesses and freelancers that
                  need a strong and modern online presence.
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-5">
                <Code2 className="mt-0.5 size-4 text-slate-700" />
                <p>
                  I structure codebases around reusable systems so future updates are faster,
                  easier to manage, and ready for remote collaboration.
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-5">
                <Rocket className="mt-0.5 size-4 text-slate-700" />
                <p>
                  I focus on performance, clarity, and responsive behavior so products launch with
                  confidence across devices and teams.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-surface border-slate-200 bg-slate-50/40">
            <CardHeader className="p-7">
              <Badge className="eyebrow w-fit border-amber-200 bg-white/80 text-slate-700">
                FAQ
              </Badge>
              <CardTitle className="pt-3 text-2xl text-slate-950">
                Questions clients usually ask
              </CardTitle>
              <CardDescription className="text-[15px] leading-7 text-slate-600">
                Common questions before starting a project.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-7 pt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services" className="border-b border-slate-300/60">
                  <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:text-blue-700">
                    What kind of websites do you build?
                  </AccordionTrigger>
                  <AccordionContent className="leading-7 text-slate-600">
                    I deliver portfolio sites, business websites, landing pages, dashboards, and
                    custom full-stack applications tailored to real client goals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="stack" className="border-b border-slate-300/60">
                  <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:text-blue-700">
                    Who do you typically work with?
                  </AccordionTrigger>
                  <AccordionContent className="leading-7 text-slate-600">
                    I work with local businesses, freelancers, and remote-first teams that need
                    dependable web products and smooth communication throughout delivery.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="customize" className="border-b-0">
                  <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:text-blue-700">
                    What is your delivery style?
                  </AccordionTrigger>
                  <AccordionContent className="leading-7 text-slate-600">
                    I follow a clear process: align on goals, design and build in phases, share
                    regular updates, and deliver production-ready work with clean handover.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section id="contact">
          <Card className="relative overflow-hidden rounded-[2rem] border-0 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_60%,#2563eb_100%)] text-primary-foreground shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]" />
            <CardHeader className="relative p-7 md:p-10">
              <Badge className="eyebrow w-fit border-white/15 bg-white/10 text-white backdrop-blur">
                Contact
              </Badge>
              <CardTitle className="pt-4 text-3xl tracking-[-0.03em]">
                Let&apos;s build something great
              </CardTitle>
              <CardDescription className="max-w-2xl text-[15px] leading-7 text-white/78">
                Open to local and remote opportunities. Reach out by email or WhatsApp to discuss
                your project.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-col gap-4 p-7 pt-0 md:p-10 md:pt-0 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/88 backdrop-blur">
                  <Mail className="size-4" />
                  <span>alanmox441@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/88 backdrop-blur">
                  <Globe className="size-4" />
                  <span>WhatsApp: +255 629 360 383</span>
                </div>
              </div>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="h-12 rounded-full border border-white/10 bg-white px-6 text-slate-900 shadow-[0_18px_35px_-20px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <Link href="mailto:alanmox441@gmail.com">Start a conversation</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  )
}
