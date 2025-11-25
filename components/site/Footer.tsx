export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24 py-10 text-xs text-mute">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© Syndicate Dynamics</p>
        <nav className="flex gap-4">
          <a href="/legal/terms" className="hover:text-ink/90">Terms</a>
          <a href="/legal/privacy" className="hover:text-ink/90">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
