import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

/** Обычная страница на всю ширину окна, без поля и внешней рамки */
export function Layout() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-[var(--color-surface)]">
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
