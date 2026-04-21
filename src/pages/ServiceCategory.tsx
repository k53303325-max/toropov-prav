import { Link, Navigate, useParams } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import { LeadForm } from '../components/LeadForm'
import { Seo } from '../components/Seo'
import {
  isServiceCategorySlug,
  serviceCategoryDetails,
  serviceNavItems,
  type ServiceCategorySlug,
} from '../data/serviceCategories'

const HERO_BADGE: Record<ServiceCategorySlug, string> = {
  'dogovory-i-sdelki': 'Договоры',
  'korporativnye-voprosy': 'Корпоратив',
  'predstavitelstvo': 'Споры',
  'intellektualnaya-sobstvennost': 'ИС',
  'zakupki-i-tendery': 'Закупки',
  'bankrotstvo': 'Банкротство',
  'ugolovnaya-zashchita-biznesa': 'Защита бизнеса',
}

function Breadcrumb({ title }: { title: string }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-ink-muted)]" aria-label="Навигация">
      <Link
        to="/"
        className="rounded-lg px-1.5 py-0.5 font-medium text-[var(--color-ink-muted)] transition hover:bg-[var(--color-accent-soft)]/50 hover:text-[var(--color-ink)]"
      >
        Главная
      </Link>
      <ChevronIcon className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
      <Link
        to="/services"
        className="rounded-lg px-1.5 py-0.5 font-medium text-[var(--color-ink-muted)] transition hover:bg-[var(--color-accent-soft)]/50 hover:text-[var(--color-ink)]"
      >
        Услуги
      </Link>
      <ChevronIcon className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
      <span className="max-w-[min(100%,14rem)] truncate font-medium text-[var(--color-ink)] sm:max-w-none">{title}</span>
    </nav>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

function ListCheckIcon() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

const WORK_STEPS = [
  { step: '01', title: 'Заявка', text: 'Кратко опишите задачу — ответим в течение рабочего дня.' },
  { step: '02', title: 'Разбор', text: 'Согласуем состав работ, сроки и формат взаимодействия.' },
  { step: '03', title: 'Результат', text: 'Выполняем договорённости и остаёмся на связи по проекту.' },
]

export function ServiceCategory() {
  const { slug = '' } = useParams<{ slug: string }>()

  if (!isServiceCategorySlug(slug)) {
    return <Navigate to="/services" replace />
  }

  const detail = serviceCategoryDetails[slug]
  const badge = HERO_BADGE[slug]
  const navItem = serviceNavItems.find((item) => item.path === `/services/${slug}`)
  const lede = detail.intro ?? navItem?.shortDescription ?? ''
  const desc = (detail.intro ?? lede).slice(0, 160)

  return (
    <div>
      <Seo title={`${detail.title} — Торопов Прав`} description={desc} />

      {/* Hero */}
      <section className="gradient-mesh relative overflow-hidden border-b border-[var(--color-border)]">
        <div
          className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[var(--color-accent)]/[0.07] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[var(--color-accent-soft)]/80 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-[56rem] px-4 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-12 lg:px-12">
          <FadeIn>
            <Breadcrumb title={detail.title} />
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)] sm:text-sm">
              {badge}
            </p>
            <h1
              className="mt-4 max-w-[22ch] text-[2.35rem] font-medium leading-[1.06] tracking-tight text-[var(--color-ink)] sm:max-w-none sm:text-5xl sm:leading-[1.05] lg:text-[3.25rem]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {detail.title}
            </h1>
            {lede && (
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-muted)] sm:text-xl sm:leading-relaxed">
                {lede}
              </p>
            )}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/contact">Обсудить задачу</Button>
              <Button to="/services" variant="ghost">
                Все услуги
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Состав работ */}
      <section className="relative border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto w-full max-w-[56rem] px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
          <FadeIn>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Состав работ
                </h2>
                <p className="mt-2 max-w-xl text-[var(--color-ink-muted)]">
                  Перечень типовых задач по направлению. Итоговый пакет согласуем под ваш кейс.
                </p>
              </div>
              <span className="hidden shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-2 text-sm font-medium text-[var(--color-ink-muted)] sm:inline-flex">
                {detail.bullets.length} позиций
              </span>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {detail.bullets.map((b, i) => (
              <FadeIn key={b} delay={Math.min(i * 0.02, 0.24)}>
                <div className="group relative flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 shadow-[var(--shadow-card)] transition duration-200 hover:border-[var(--color-accent)]/25 hover:shadow-[var(--shadow-card-hover)]">
                  <div
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/35 to-transparent opacity-0 transition group-hover:opacity-100"
                    aria-hidden
                  />
                  <ListCheckIcon />
                  <p className="text-[15px] leading-snug text-[var(--color-ink)]">{b}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Как работаем */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className="mx-auto w-full max-w-[56rem] px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
          <FadeIn>
            <h2
              className="text-center text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Как мы работаем
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-[var(--color-ink-muted)]">
              Прозрачный процесс без лишних этапов
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WORK_STEPS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.06}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center shadow-[var(--shadow-card)] md:text-left">
                  <span
                    className="font-display text-4xl font-medium tabular-nums leading-none text-[var(--color-accent)]/35"
                    style={{ fontFamily: 'var(--font-display)' }}
                    aria-hidden
                  >
                    {s.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--color-ink)]">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">{s.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Заявка */}
      <section id="zayavka" className="bg-[var(--color-surface)]">
        <div className="mx-auto w-full max-w-[56rem] px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
            <FadeIn className="lg:col-span-5">
              <h2
                className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Заявка по направлению
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
                Опишите ситуацию — подключим профильного юриста и вернёмся с обратной связью в течение рабочего дня.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-[var(--color-ink-muted)]">
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)]">—</span>
                  Конфиденциально, без рассылок
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)]">—</span>
                  Можно приложить файлы в переписке после первого ответа
                </li>
              </ul>
            </FadeIn>
            <FadeIn className="lg:col-span-7" delay={0.06}>
              <div className="gradient-border rounded-2xl shadow-[var(--shadow-card)]">
                <div className="gradient-border-inner p-6 sm:p-8">
                  <LeadForm submitLabel="Отправить" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
