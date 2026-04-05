import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[min(100%,1200px)] flex-col border-x border-[var(--color-frame-border)] bg-[var(--color-surface)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
