import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { servicesMegaMenuColumns } from '../data/servicesMegaMenu'

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? '-rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-xl px-3 py-2 text-sm font-medium transition-colors',
    isActive ? 'bg-[var(--color-cta-delphi)] text-[var(--color-cta-delphi-text)]' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]',
  ].join(' ')

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (servicesWrapRef.current && !servicesWrapRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    if (servicesOpen) {
      document.addEventListener('mousedown', handle)
      return () => document.removeEventListener('mousedown', handle)
    }
  }, [servicesOpen])

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md">
      <div ref={servicesWrapRef} className="relative">
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:h-[4.25rem] sm:px-6">
          {/* Слева: desktop — Услуги + О компании + Кейсы; mobile — бургер */}
          <div className="flex min-w-0 items-center justify-start gap-1">
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Разделы">
              <div className="relative">
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-mega-menu"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={[
                    'inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                    servicesOpen
                      ? 'bg-[var(--color-cta-delphi)] text-[var(--color-cta-delphi-text)]'
                      : 'text-[var(--color-ink-muted)] hover:bg-[var(--color-cta-delphi)]/50 hover:text-[var(--color-ink)]',
                  ].join(' ')}
                >
                  Услуги
                  <Chevron open={servicesOpen} />
                </button>
              </div>
              <NavLink to="/about" className={navLinkClass}>
                О компании
              </NavLink>
              <NavLink to="/cases" className={navLinkClass}>
                Кейсы
              </NavLink>
            </nav>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] lg:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">Меню</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-[var(--color-ink)] transition ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
                />
                <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition ${mobileOpen ? 'opacity-0' : ''}`} />
                <span
                  className={`block h-0.5 w-5 bg-[var(--color-ink)] transition ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
                />
              </div>
            </button>
          </div>

          {/* По центру: логотип */}
          <Link
            to="/"
            className="text-center text-xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-[1.35rem]"
            style={{ fontFamily: 'var(--font-display)' }}
            onClick={() => setServicesOpen(false)}
          >
            Торопов <span className="text-[var(--color-accent)]">Прав</span>
          </Link>

          {/* Справа: заявка в стиле My Delphi */}
          <div className="flex items-center justify-end">
            <Link
              to="/contact"
              className="hidden rounded-2xl bg-[var(--color-cta-delphi)] px-5 py-2.5 text-sm font-semibold text-[var(--color-cta-delphi-text)] transition-colors hover:bg-[var(--color-cta-delphi-hover)] sm:inline-flex"
            >
              Оставить заявку
            </Link>
            <Link
              to="/contact"
              className="inline-flex rounded-2xl bg-[var(--color-cta-delphi)] px-3 py-2 text-xs font-semibold text-[var(--color-cta-delphi-text)] sm:hidden"
            >
              Заявка
            </Link>
          </div>
        </div>

        {/* Mega menu — как Industries на delphi.ai */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              id="services-mega-menu"
              role="region"
              aria-label="Направления услуг"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full z-50 border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-8 shadow-[0_24px_48px_-12px_rgba(26,19,16,0.12)] sm:px-6"
            >
              <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 md:gap-12">
                {servicesMegaMenuColumns.map((col, ci) => (
                  <ul key={ci} className="flex flex-col gap-6">
                    {col.map((item) => (
                      <li key={item.title}>
                        <Link
                          to={item.to}
                          className="group block rounded-2xl p-1 transition-colors hover:bg-[var(--color-cta-delphi)]/40"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="block font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-sm leading-snug text-[var(--color-ink-muted)]">
                            {item.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <div className="mx-auto mt-8 max-w-4xl border-t border-[var(--color-border)] pt-6 text-center">
                <Link
                  to="/services"
                  className="text-sm font-semibold text-[var(--color-accent)] hover:underline"
                  onClick={() => setServicesOpen(false)}
                >
                  Все услуги и полный список →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--color-border)] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Мобильное меню">
              <Link
                to="/"
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--color-ink-muted)] hover:bg-[var(--color-accent-soft)]"
                onClick={() => setMobileOpen(false)}
              >
                Главная
              </Link>
              <Link
                to="/services"
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--color-ink-muted)] hover:bg-[var(--color-accent-soft)]"
                onClick={() => setMobileOpen(false)}
              >
                Услуги
              </Link>
              <Link
                to="/legal-design"
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--color-ink-muted)] hover:bg-[var(--color-accent-soft)]"
                onClick={() => setMobileOpen(false)}
              >
                Legal Design
              </Link>
              <NavLink
                to="/about"
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--color-ink-muted)] hover:bg-[var(--color-accent-soft)]"
                onClick={() => setMobileOpen(false)}
              >
                О компании
              </NavLink>
              <NavLink
                to="/cases"
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--color-ink-muted)] hover:bg-[var(--color-accent-soft)]"
                onClick={() => setMobileOpen(false)}
              >
                Кейсы
              </NavLink>
              <Link
                to="/blog"
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--color-ink-muted)] hover:bg-[var(--color-accent-soft)]"
                onClick={() => setMobileOpen(false)}
              >
                Блог
              </Link>
              <Link
                to="/contact"
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-[var(--color-ink-muted)] hover:bg-[var(--color-accent-soft)]"
                onClick={() => setMobileOpen(false)}
              >
                Контакты
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
