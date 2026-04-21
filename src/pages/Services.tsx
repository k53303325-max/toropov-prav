import { Link } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import { Seo } from '../components/Seo'
import { serviceNavItems } from '../data/serviceCategories'

export function Services() {
  return (
    <div className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
      <Seo
        title="Юридические услуги для бизнеса — Торопов Прав"
        description="Договоры и сделки, интеллектуальная собственность, корпоративное право, Legal Design, уголовная защита бизнеса. Правовое сопровождение среднего бизнеса."
      />
      <FadeIn>
        <p className="max-w-2xl text-lg text-[var(--color-ink-muted)]">
          Команда «Торопов Прав» ведёт проекты по всем перечисленным направлениям — от договоров до Legal Design. Выберите
          раздел, чтобы посмотреть состав работ.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {serviceNavItems.map((item, i) => (
          <FadeIn key={item.path} delay={i * 0.03}>
            <Link
              to={item.path}
              className="group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-card)] transition hover:border-[var(--color-accent)]/35"
            >
              <h2
                className="text-xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{item.shortDescription}</p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)] group-hover:underline">
                Подробнее →
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-16 text-center">
        <Button to="/contact">Оставить заявку</Button>
      </FadeIn>
    </div>
  )
}
