import { Link } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import {
  IconContent,
  IconDigital,
  IconEvent,
  IconHoReCa,
  IconIt,
  IconStartup,
} from '../components/IndustryIcons'
import { LeadForm } from '../components/LeadForm'
import { Seo } from '../components/Seo'

/** Каждая отрасль — карточка с иконкой слева */
const industries = [
  { label: 'Event и мероприятия', Icon: IconEvent },
  { label: 'Digital-продукты', Icon: IconDigital },
  { label: 'HoReCa', Icon: IconHoReCa },
  { label: 'Стартапы', Icon: IconStartup },
  { label: 'Контентмейкеры', Icon: IconContent },
  { label: 'IT-продукты и платформы', Icon: IconIt },
]

const processSteps = [
  {
    n: 1,
    title: 'Заявка',
    text: 'Опишите задачу — ответим в течение рабочего дня.',
  },
  {
    n: 2,
    title: 'Разбор',
    text: 'Профильный юрист изучает ситуацию, стратегию согласовывает руководство.',
  },
  {
    n: 3,
    title: 'Работа',
    text: 'Фиксированные сроки, понятный результат.',
  },
  {
    n: 4,
    title: 'Поддержка',
    text: 'Остаётесь на связи после закрытия задачи.',
  },
]

const pagePad = 'w-full max-w-[min(100%,90rem)] px-4 sm:px-8 lg:px-12'

export function Home() {
  return (
    <div>
      <Seo
        title="Правовое сопровождение бизнеса — Торопов Прав"
        description="Торопов Прав — команда юристов для бизнеса. Основатель Марк Торопов. Договоры, ИС, Legal Design, споры. Средний бизнес, IT и digital."
      />

      <section className="gradient-mesh relative overflow-hidden border-b border-[var(--color-border)]">
        <div className={`${pagePad} py-24 text-center sm:py-32 lg:py-40`}>
          <FadeIn>
            <Link
              to="/legal-design"
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-pill-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium tracking-tight text-[var(--color-accent)] transition hover:border-[var(--color-accent)]/35 hover:bg-[var(--color-surface-elevated)]"
            >
              <span className="text-left">Legal Design — документы, которые читают</span>
              <span aria-hidden className="shrink-0 opacity-90">
                →
              </span>
            </Link>

            <h1
              className="mt-10 text-[2.75rem] font-medium leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-6xl sm:leading-[1.04] lg:text-7xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Правовое сопровождение
              <br />
              бизнеса
            </h1>

            <p className="mx-auto mt-6 max-w-[42rem] text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">
              Берём на себя юридическую сторону вашего бизнеса — чтобы вы занимались развитием, а не бумагами.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#zayavka"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-8 py-3.5 text-[15px] font-semibold text-[#f7f3f0] shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:bg-[var(--color-accent)]"
              >
                Оставить заявку
              </a>
              <Button to="/services" variant="ghost">
                Наши услуги
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Компания и основатель */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className={`${pagePad} py-16 sm:py-20 lg:py-24`}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:gap-16">
            <FadeIn className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[260px] shrink-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-card)] lg:max-w-[280px]">
                <img
                  src="/mark-toropov.png"
                  alt="Марк Торопов, основатель и управляющий партнёр"
                  className="aspect-[3/4] h-auto max-h-[min(340px,52vh)] w-full object-cover object-[center_16%] lg:max-h-[360px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </FadeIn>
            <FadeIn className="min-w-0" delay={0.06}>
              <h2
                className="text-2xl font-bold text-[var(--color-ink)] sm:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Об основателе
              </h2>
              <p className="mt-3 font-semibold text-[var(--color-ink)]">Марк Торопов — основатель и управляющий партнёр</p>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
                <p>
                  Юрист с более чем 7-летним опытом сопровождения бизнеса. Специализируется на работе с малым и средним
                  бизнесом, IT- и digital-компаниями и корпоративными структурами.
                </p>
                <p>
                  В практике — структурирование бизнеса, сопровождение сделок и инвестиций, переговоры и представительство в
                  арбитражных судах. Сочетает классическую экспертизу с{' '}
                  <Link to="/legal-design" className="font-medium text-[var(--color-accent)] underline-offset-2 hover:underline">
                    Legal Design
                  </Link>{' '}
                  и ИИ для анализа и подготовки правовых позиций.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Отрасли */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className={`${pagePad} py-16 sm:py-20 lg:py-24`}>
          <FadeIn>
            <h2
              className="max-w-3xl text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Знаем специфику вашей сферы
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-muted)]">
              Не работаем со всем подряд. Специализируемся на бизнесе в конкретных отраслях — понимаем процессы, договоры и
              риски изнутри.
            </p>
          </FadeIn>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
            {industries.map(({ label, Icon }, i) => (
              <FadeIn key={label} delay={Math.min(i * 0.04, 0.28)}>
                <div className="flex h-full min-h-[5.5rem] flex-row items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] transition hover:border-[var(--color-accent)]/25 sm:min-h-[6rem] sm:gap-4 sm:p-5">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/12 text-[var(--color-accent)] sm:h-12 sm:w-12"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3
                    className="text-balance text-left text-base font-semibold leading-snug text-[var(--color-ink)] sm:text-lg"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {label}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className={`${pagePad} py-16 sm:py-20`}>
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)] sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
              В цифрах
            </h2>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">Показатели обновляются по мере согласования.</p>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '8 лет', d: 'На рынке правового сопровождения бизнеса' },
              { n: '200+', d: 'Клиентов — компаний и предпринимателей' },
              { n: '500+', d: 'Договоров составлено и проверено' },
              { n: '6', d: 'Отраслей специализации' },
            ].map((x, i) => (
              <FadeIn key={x.n} delay={i * 0.05}>
                <div className="min-h-[10rem] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 text-center shadow-[var(--shadow-card)] sm:min-h-[11rem]">
                  <div className="text-3xl font-bold text-[var(--color-accent)] sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                    {x.n}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)] sm:text-base">{x.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс — 2×2 */}
      <section className="bg-[var(--color-surface-elevated)]">
        <div className={`${pagePad} py-16 sm:py-20 lg:py-24`}>
          <FadeIn>
            <h2
              className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Прозрачно. Быстро. Без лишнего
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
            {processSteps.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <div className="flex h-full min-h-[13rem] flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)] sm:min-h-[14rem] sm:p-10">
                  <h3 className="flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:gap-x-3">
                    <span
                      className="shrink-0 text-4xl font-medium tabular-nums leading-none text-[var(--color-accent)]/40"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {s.n}.
                    </span>
                    <span className="text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">{s.title}</span>
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">{s.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="zayavka" className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className={`${pagePad} py-16 sm:py-20`}>
          <div className="w-full">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold text-[var(--color-ink)] sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                Есть юридический вопрос?
              </h2>
              <p className="mt-3 text-center text-lg text-[var(--color-ink-muted)]">
                Расскажите о задаче — ответим в течение рабочего дня
              </p>
            </FadeIn>
            <FadeIn className="mt-10" delay={0.08}>
              <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-card)]">
                <LeadForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
