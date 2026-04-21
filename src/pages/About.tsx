import { Link } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import { Seo } from '../components/Seo'

const industries = [
  'Event и мероприятия',
  'Digital-продукты',
  'HoReCa',
  'Стартапы',
  'Контентмейкеры',
  'IT-продукты и платформы',
  'Онлайн-сервисы',
  'Уголовная защита бизнеса и собственников',
]

const team = [
  { role: 'Юрист по интеллектуальной собственности', fact: 'ТМ, лицензии, споры в СИП' },
  { role: 'Специалист по корпоративному праву', fact: 'Сделки с долями, инвестиции' },
  { role: 'Юрист по договорам и сделкам', fact: 'B2B, подряд, типовые и нестандартные модели' },
  { role: 'Специалист по Legal Design', fact: 'Реинжиниринг и подача документов' },
]

export function About() {
  return (
    <div>
      <Seo
        title="О компании — Торопов Прав | Правовое сопровождение бизнеса"
        description="Торопов Прав — команда юристов для бизнеса. Основатель — Марк Торопов: сделки, споры, Legal Design, IT и digital. О компании и подходе."
      />

      <div className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Торопов Прав — юридическая компания для бизнеса
          </h1>
        </FadeIn>

        <section className="mt-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Команда и подход
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
              <p>
                Мы объединяем юристов по направлениям: договоры и сделки, интеллектуальная собственность, корпоративное
                право, споры, Legal Design. Фокус — на задачах клиента и измеримом результате, без лишней риторики.
              </p>
              <p>
                Каждый юрист углубляется в отрасль клиента — от event и digital до HoReCa и IT. На ключевых этапах качество
                и стратегию выстраивает руководство компании.
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="mt-20 grid gap-12 lg:grid-cols-12 lg:items-start">
          <FadeIn className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-card)]">
              <img
                src="/mark-toropov.png"
                alt="Марк Торопов, основатель и управляющий партнёр"
                className="aspect-[3/4] w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
          <FadeIn className="lg:col-span-7" delay={0.06}>
            <h2 className="text-2xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Об основателе
            </h2>
            <p className="mt-3 font-semibold text-[var(--color-ink)]">Марк Торопов — основатель и управляющий партнёр</p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--color-ink-muted)]">
              <p>
                Марк Торопов — юрист с более чем 7-летним опытом сопровождения бизнеса. Специализируется на работе с малым и
                средним бизнесом, IT- и digital-компаниями, а также корпоративными структурами.
              </p>
              <p>
                В его практике — комплексное сопровождение коммерческих проектов: структурирование бизнеса, сопровождение
                сделок и инвестиций, ведение переговоров и представление интересов в арбитражных судах.
              </p>
              <p>
                Подход Марка основан на глубоком понимании бизнес-процессов. Он рассматривает юридические задачи в контексте
                экономики и стратегии компании, предлагая решения, которые одновременно защищают интересы и поддерживают
                развитие бизнеса.
              </p>
              <p>
                В работе он сочетает классическую юридическую экспертизу с современными инструментами: применяет принципы{' '}
                <Link to="/legal-design" className="font-medium text-[var(--color-accent)] underline-offset-2 hover:underline">
                  Legal Design
                </Link>{' '}
                и использует ИИ для анализа и подготовки правовых позиций.
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="mt-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Юристы по направлениям
            </h2>
            <p className="mt-3 text-[var(--color-ink-muted)]">Имена можно заменить на реальные — или оставить роли, как в ТЗ.</p>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {team.map((m, i) => (
              <FadeIn key={m.role} delay={i * 0.05}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-semibold text-[var(--color-ink)]">{m.role}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{m.fact}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              С кем мы работаем
            </h2>
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-2">
            {industries.map((tag, i) => (
              <FadeIn key={tag} delay={i * 0.02}>
                <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-ink)]">
                  {tag}
                </span>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-8">
          <FadeIn>
            <h2 className="text-xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Образование и достижения
            </h2>
            <p className="mt-3 text-[var(--color-ink-muted)]">
              Заполнить перед запуском: вуз, специализация, курсы, выступления, публикации, медиа.
            </p>
          </FadeIn>
        </section>

        <FadeIn className="mt-16 text-center">
          <Button to="/contact">Связаться с нами</Button>
        </FadeIn>
      </div>
    </div>
  )
}
