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

const HOVER_CLOSE_MS = 160

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const hoverCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelCloseTimer = () => {
    if (hoverCloseTimer.current) {
      clearTimeout(hoverCloseTimer.current)
      hoverCloseTimer.current = null
    }
  }

  const openServices = () => {
    cancelCloseTimer()
    setServicesOpen(true)
  }

  const scheduleCloseServices = () => {
    cancelCloseTimer()
    hoverCloseTimer.current = setTimeout(() => setServicesOpen(false), HOVER_CLOSE_MS)
  }

  useEffect(() => () => cancelCloseTimer(), [])

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md">
      <div className="relative">
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:h-[4.25rem] sm:px-8 lg:px-12">
          <div className="flex min-w-0 items-center justify-start gap-1">
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Разделы">
              {/* Услуги: раскрытие по hover (как Industries на delphi.ai), компактная панель */}
              <div
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-mega-menu"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={[
                    'inline-flex items-center gap-1.5 rounded-xl border border-transparent px-3 py-2 text-sm font-medium transition-colors',
                    servicesOpen
                      ? 'border-[var(--color-border)] bg-[var(--color-cta-delphi)] text-[var(--color-cta-delphi-text)]'
                      : 'text-[var(--color-ink-muted)] hover:border-[var(--color-border)] hover:bg-[var(--color-cta-delphi)]/40 hover:text-[var(--color-ink)]',
                  ].join(' ')}
                >
                  Услуги
                  <Chevron open={servicesOpen} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      id="services-mega-menu"
                      role="region"
                      aria-label="Направления услуг"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-50 flex flex-col"
                    >
                      {/* мост между кнопкой и карточкой — курсор не «рвёт» hover */}
                      <div className="h-2 w-[min(calc(100vw-2rem),34rem)] shrink-0" aria-hidden />
                      <div className="-mt-2 w-[min(calc(100vw-2rem),28rem)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4 shadow-[0_16px_40px_-8px_rgba(26,19,16,0.14)] md:w-[34rem] md:p-5">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-3.5">
                          {servicesMegaMenuColumns.map((col, ci) => (
                            <ul key={ci} className="flex flex-col gap-3 md:gap-3">
                              {col.map((item) => (
                                <li key={item.title}>
                                  <Link
                                    to={item.to}
                                    className="group block rounded-xl px-1 py-0.5 transition-colors hover:bg-[var(--color-accent-soft)]/60"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    <span className="block text-[13px] font-semibold leading-tight text-[var(--color-ink)] group-hover:text-[var(--color-accent)] md:text-sm">
                                      {item.title}
                                    </span>
                                    <span className="mt-0.5 block text-[11px] leading-snug text-[var(--color-ink-muted)] md:text-xs">
                                      {item.description}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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

          <Link
            to="/"
            className="text-center text-xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-[1.35rem]"
            style={{ fontFamily: 'var(--font-display)' }}
            onClick={() => setServicesOpen(false)}
          >
            Торопов <span className="text-[var(--color-accent)]">Прав</span>
          </Link>

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
