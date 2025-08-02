export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex items-center justify-center h-14">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Vivek Jadhav's Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
