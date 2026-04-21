import { Link, Navigate, useParams } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import { LeadForm } from '../components/LeadForm'
import { Seo } from '../components/Seo'
import { isServiceCategorySlug, serviceCategoryDetails, serviceNavItems } from '../data/serviceCategories'

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
      <span className="font-medium text-[var(--color-ink)]">{title}</span>
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

const WORK_STEPS = [
  { step: '01', title: 'Заявка', text: 'Кратко опишите задачу — ответим в течение рабочего дня.' },
  { step: '02', title: 'Разбор', text: 'Согласуем объём работ, сроки и формат взаимодействия.' },
  { step: '03', title: 'Результат', text: 'Выполняем договорённости и остаёмся на связи по проекту.' },
]

const pageGutter = 'w-full max-w-[min(100%,90rem)] px-4 sm:px-10 lg:px-16 xl:px-24'

export function ServiceCategory() {
  const { slug = '' } = useParams<{ slug: string }>()

  if (!isServiceCategorySlug(slug)) {
    return <Navigate to="/services" replace />
  }

  const detail = serviceCategoryDetails[slug]
  const navItem = serviceNavItems.find((item) => item.path === `/services/${slug}`)
  const lede = detail.intro ?? navItem?.shortDescription ?? ''
  const desc = (detail.intro ?? lede).slice(0, 160)

  return (
    <div className="w-full min-w-0">
      <Seo title={`${detail.title} — Торопов Прав`} description={desc} />

      <section className="gradient-mesh relative overflow-hidden border-b border-[var(--color-border)]">
        <div
          className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[var(--color-accent)]/[0.07] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[var(--color-accent-soft)]/80 blur-3xl"
          aria-hidden
        />
        <div className={`relative mx-auto ${pageGutter} pb-20 pt-10 sm:pb-28 sm:pt-12`}>
          <FadeIn>
            <Breadcrumb title={detail.title} />
            <h1
              className="mt-10 w-full max-w-5xl text-[2.35rem] font-medium leading-[1.06] tracking-tight text-[var(--color-ink)] sm:text-5xl sm:leading-[1.05] lg:text-[3.35rem]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {detail.title}
            </h1>
            {lede && (
              <p className="mt-8 w-full max-w-4xl text-lg leading-relaxed text-[var(--color-ink-muted)] sm:text-xl sm:leading-relaxed lg:max-w-5xl">
                {lede}
              </p>
            )}
            <div className="mt-10">
              <Button to="/contact">Обсудить задачу</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className={`mx-auto ${pageGutter} py-16 lg:py-20`}>
          <FadeIn>
            <h2
              className="w-full max-w-4xl text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl lg:max-w-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Как мы работаем
            </h2>
            <p className="mt-3 w-full max-w-3xl text-[var(--color-ink-muted)] lg:max-w-4xl">
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

      <section id="zayavka" className="bg-[var(--color-surface)]">
        <div className={`mx-auto ${pageGutter} py-16 lg:py-20`}>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
            <FadeIn className="lg:col-span-5">
              <h2
                className="w-full max-w-xl text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Заявка по направлению
              </h2>
              <p className="mt-4 w-full max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
                Опишите ситуацию — подключим профильного юриста и вернёмся с обратной связью в течение рабочего дня.
              </p>
              <ul className="mt-8 max-w-xl space-y-3 text-sm text-[var(--color-ink-muted)]">
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
            <FadeIn className="min-w-0 lg:col-span-7" delay={0.06}>
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
