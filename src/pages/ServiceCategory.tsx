import { Link, Navigate, useParams } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import { Seo } from '../components/Seo'
import { isServiceCategorySlug, serviceCategoryDetails } from '../data/serviceCategories'

export function ServiceCategory() {
  const { slug = '' } = useParams<{ slug: string }>()

  if (!isServiceCategorySlug(slug)) {
    return <Navigate to="/services" replace />
  }

  const detail = serviceCategoryDetails[slug]
  const desc =
    detail.intro ??
    `Что входит в направление «${detail.title}»: перечень типовых задач — уточняйте состав под ваш кейс.`

  return (
    <div className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
      <Seo
        title={`${detail.title} — Торопов Прав`}
        description={desc.slice(0, 160)}
      />
      <FadeIn>
        <nav className="text-sm text-[var(--color-ink-muted)]">
          <Link to="/services" className="font-medium text-[var(--color-accent)] hover:underline">
            Услуги
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span className="text-[var(--color-ink)]">{detail.title}</span>
        </nav>
        <h1
          className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {detail.title}
        </h1>
        {detail.intro && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-ink-muted)]">{detail.intro}</p>}
      </FadeIn>

      <FadeIn className="mt-10" delay={0.05}>
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">Что делаем</h2>
          <ul className="mt-4 space-y-2 text-[var(--color-ink-muted)]">
            {detail.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-[var(--color-accent)]">—</span>
                {b}
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <FadeIn className="mt-16 text-center">
        <Button to="/contact">Оставить заявку</Button>
      </FadeIn>
    </div>
  )
}
