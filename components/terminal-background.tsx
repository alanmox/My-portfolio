'use client'

import dynamic from 'next/dynamic'
import { Terminal, Server, Database, Cloud, Shield, Cpu, GitBranch } from 'lucide-react'

const InteractiveTerminal = dynamic(() => import('@/components/ui/terminal'), { ssr: false })

const terminals = [
  {
    command: 'deploy --production',
    icon: <Terminal className="mr-2 text-accent h-4 w-4" />,
    steps: [
      'Initializing deployment pipeline...',
      'Running pre-deployment checks...',
      'Building application assets...',
      'Running test suite...',
      'Deploying to production...',
    ],
    finalMessage: '✅ Deployment successful! All systems operational.',
  },
  {
    command: 'server status --all',
    icon: <Server className="mr-2 text-accent h-4 w-4" />,
    steps: [
      'Connecting to cluster...',
      'Checking API gateway...',
      'Health check: web-01 OK',
      'Health check: api-01 OK',
      'Health check: worker-01 OK',
    ],
    finalMessage: '✅ All 3 nodes healthy. Response time: 12ms',
  },
  {
    command: 'db migrate --force',
    icon: <Database className="mr-2 text-accent h-4 w-4" />,
    steps: [
      'Backing up current schema...',
      'Running migrations...',
      'Validating constraints...',
      'Optimizing indexes...',
    ],
    finalMessage: '✅ Database migrated. 0 conflicts found.',
  },
  {
    command: 'cloud sync --region east',
    icon: <Cloud className="mr-2 text-accent h-4 w-4" />,
    steps: [
      'Authenticating with cloud provider...',
      'Syncing environment variables...',
      'Uploading build artifacts...',
      'Invalidating CDN cache...',
    ],
    finalMessage: '✅ Cloud sync complete. Region: east-1',
  },
  {
    command: 'security audit --quick',
    icon: <Shield className="mr-2 text-accent h-4 w-4" />,
    steps: [
      'Scanning dependencies...',
      'Checking for vulnerabilities...',
      'Auditing access controls...',
      'Validating SSL certificates...',
    ],
    finalMessage: '✅ 0 critical issues. Score: 98/100',
  },
  {
    command: 'build --optimize',
    icon: <Cpu className="mr-2 text-accent h-4 w-4" />,
    steps: [
      'Compiling TypeScript...',
      'Tree-shaking unused modules...',
      'Minifying bundles...',
      'Generating sourcemaps...',
    ],
    finalMessage: '✅ Build complete. Size reduced by 42%.',
  },
  {
    command: 'git push origin main',
    icon: <GitBranch className="mr-2 text-accent h-4 w-4" />,
    steps: [
      'Resolving HEAD conflicts...',
      'Packing objects...',
      'Enumerating objects...',
      'Writing objects...',
    ],
    finalMessage: '✅ Pushed to main. CI/CD pipeline triggered.',
  },
]

export function TerminalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.18]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 h-full">
        {terminals.slice(0, 2).map((terminal, i) => (
          <div key={i} className="scale-90 origin-top-left">
            <InteractiveTerminal
              command={terminal.command}
              autoExecute
              variant="custom"
              customTheme={{
                container: 'bg-transparent text-accent',
                header: 'bg-transparent border-accent/20',
                output: 'bg-transparent',
                button: 'hover:bg-accent/10',
              }}
              repeat
              icon={terminal.icon}
              steps={terminal.steps}
              finalMessage={terminal.finalMessage}
              stepDelay={400}
              typingDelay={30}
              repeatDelay={1500}
              className="rounded-md border border-accent/20"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
