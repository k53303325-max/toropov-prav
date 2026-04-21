import { Link, Navigate, useParams } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import { Seo } from '../components/Seo'
import { findTask, isServiceCategorySlug, serviceCategoryDetails } from '../data/serviceCategories'

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

const pageGutter = 'w-full max-w-[min(100%,90rem)] px-4 sm:px-10 lg:px-16 xl:px-24'

export function ServiceTaskPage() {
  const { slug = '', taskSlug = '' } = useParams<{ slug: string; taskSlug: string }>()

  if (!isServiceCategorySlug(slug)) {
    return <Navigate to="/services" replace />
  }

  const category = serviceCategoryDetails[slug]
  const task = findTask(slug, taskSlug)

  if (!task) {
    return <Navigate to={`/services/${slug}`} replace />
  }

  const desc = `${task.title}. ${category.title} — Торопов Прав.`

  return (
    <div className="w-full min-w-0">
      <Seo title={`${task.title} — ${category.title} | Торопов Прав`} description={desc.slice(0, 160)} />

      <section className="gradient-mesh relative overflow-hidden border-b border-[var(--color-border)]">
        <div
          className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[var(--color-accent)]/[0.07] blur-3xl"
          aria-hidden
        />
        <div className={`relative mx-auto ${pageGutter} pb-20 pt-10 sm:pb-28 sm:pt-12`}>
          <FadeIn>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-ink-muted)]" aria-label="Навигация">
              <Link
                to="/"
                className="rounded-lg px-1.5 py-0.5 font-medium text-[var(--color-ink-muted)] transition hover:bg-[var(--color-accent-soft)]/50 hover:text-[var(--color-ink)]"
              >
                Главная
              </Link>
              <ChevronIcon className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
              <Link
                to={`/services/${slug}`}
                className="max-w-[min(100%,12rem)] truncate rounded-lg px-1.5 py-0.5 font-medium text-[var(--color-ink-muted)] transition hover:bg-[var(--color-accent-soft)]/50 hover:text-[var(--color-ink)] sm:max-w-none"
              >
                {category.title}
              </Link>
              <ChevronIcon className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
              <span className="max-w-[min(100%,14rem)] truncate font-medium text-[var(--color-ink)] sm:max-w-none">
                {task.title}
              </span>
            </nav>

            <h1
              className="mt-10 w-full max-w-4xl text-[2rem] font-medium leading-[1.08] tracking-tight text-[var(--color-ink)] sm:text-4xl sm:leading-[1.06] lg:text-[2.75rem]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {task.title}
            </h1>
            <p className="mt-8 w-full max-w-3xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Юридическое сопровождение по этой задаче: сроки и формат работ согласуем после короткого брифа. Ниже —
              связаться с командой или вернуться к списку направления.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/contact">Обсудить задачу</Button>
              <Link
                to={`/services/${slug}`}
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-btn-secondary)] px-6 py-3 text-[15px] font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-btn-secondary-hover)]"
              >
                К списку направления
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className={`mx-auto ${pageGutter} py-12 lg:py-16`}>
          <FadeIn>
            <p className="max-w-2xl text-[var(--color-ink-muted)]">
              Текст раздела можно дополнить под вашу практику: типовые риски, этапы, документы.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
