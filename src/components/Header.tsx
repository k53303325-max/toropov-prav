import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const nav = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/legal-design', label: 'Legal Design' },
  { to: '/about', label: 'О компании' },
  { to: '/cases', label: 'Кейсы' },
  { to: '/blog', label: 'Блог' },
  { to: '/contact', label: 'Контакты' },
]

function linkClass({ isActive }: { isActive: boolean }) {
  return [
    'text-[15px] font-medium transition-colors',
    isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]',
  ].join(' ')
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/80 bg-[var(--color-surface)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="group flex items-baseline gap-1">
          <span
            className="text-lg font-bold tracking-tight text-[var(--color-ink)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Торопов
          </span>
          <span className="text-sm font-semibold text-[var(--color-accent)]">Прав</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Основное меню">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            to="/contact"
            className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
          >
            Оставить заявку
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] xl:hidden"
          aria-expanded={open}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Меню</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-[var(--color-ink)] transition ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-5 bg-[var(--color-ink)] transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--color-border)] xl:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Мобильное меню">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-3 py-2 text-[15px] font-medium text-[var(--color-ink-muted)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-ink)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-2 rounded-full bg-[var(--color-ink)] px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Оставить заявку
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
