import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

/** Внешний отступ + рамка 0.5 см со всех сторон и скругление в духе delphi.ai */
export function Layout() {
  return (
    <div className="box-border min-h-screen bg-[var(--color-frame-outer)] p-[0.5cm]">
      <div
        className="mx-auto flex min-h-[calc(100svh-1cm)] w-full max-w-[min(100%,1200px)] flex-col rounded-[1.25rem] border-[0.5cm] border-solid border-[var(--color-frame-border)] bg-[var(--color-surface)] shadow-sm"
        style={{ boxSizing: 'border-box' }}
      >
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
