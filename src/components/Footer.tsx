export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-center text-slate-600 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="text-green-500 font-semibold">Jefrey Landicho</span>. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-slate-700">
          Built with React 19 · TypeScript · Tailwind v4 · Vite
        </p>
      </div>
    </footer>
  )
}
