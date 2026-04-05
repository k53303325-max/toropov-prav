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
        description="Торопов Прав — юридическая компания под руководством Марка Торопова. 8 лет, специализация в digital, event, HoReCa, IT, стартапы. Команда юристов по направлениям."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Торопов Прав — юридическая компания с личной ответственностью
          </h1>
        </FadeIn>

        <section className="mt-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Мы — команда юристов под брендом Торопов Прав
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
              <p>
                «Торопов Прав» — это не просто красивое название. Это обещание. Фамилия основателя в названии означает,
                что за каждым проектом стоит личная репутация Марка Торопова.
              </p>
              <p>
                Мы работаем как команда специалистов по направлениям — каждый юрист компании знает свою отрасль изнутри.
                Марк лично контролирует качество и участвует в ключевых проектах.
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="mt-20 grid gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-border)] to-[var(--color-accent-soft)]">
              <div className="flex h-full items-end p-8">
                <p className="text-sm text-[var(--color-ink-muted)]">Живое фото Марка — не сток, не пафосный костюм на фоне колонн.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="lg:col-span-7" delay={0.06}>
            <h2 className="text-2xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Основатель
            </h2>
            <p className="mt-2 font-semibold text-[var(--color-ink)]">Марк Торопов — основатель и управляющий партнёр</p>
            <blockquote className="mt-6 border-l-4 border-[var(--color-accent)] pl-6 text-lg font-medium leading-relaxed text-[var(--color-ink)]">
              Я создал компанию, потому что верю: право должно помогать бизнесу расти, а не тормозить его
            </blockquote>
            <div className="mt-8 space-y-4 text-[var(--color-ink-muted)]">
              <p>
                Биографию в деталях заполняет Марк: когда и почему пришёл в право, что понял про бизнес за 8 лет практики,
                почему выбрал собственный бренд, а не крупную фирму, и что значит Legal Design для него лично. Здесь —
                живой голос, без казённых оборотов.
              </p>
              <p className="text-sm italic">Текст от основателя — вставьте 2–3 абзаца своими словами по ТЗ.</p>
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
              Блок для Марка: вуз, специализация, курсы, выступления, публикации, медиа — заполнить перед запуском.
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
