export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Oshil Ghimire. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
