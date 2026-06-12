export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="size-8 animate-spin rounded-full border-2 border-border border-t-accent" />
    </div>
  )
}
