import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

/**
 * Как на delphi.ai: по краям поле теплее фона, внутри — панель с тонкой обводкой и скруглением.
 */
export function Layout() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-[var(--color-frame-outer)] p-[min(12px,0.5cm)] sm:p-[0.5cm]">
      <div
        className="flex min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden rounded-[1.25rem] border border-solid border-[var(--color-frame-border)] bg-[var(--color-surface)] shadow-[0_1px_2px_rgb(26_19_16_/_0.05)]"
        style={{ boxSizing: 'border-box' }}
      >
        <Header />
        <main className="w-full flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
