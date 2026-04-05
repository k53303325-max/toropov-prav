import { Link } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import { LeadForm } from '../components/LeadForm'
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

export function Home() {
  return (
    <div>
      <Seo
        title="Правовое сопровождение бизнеса — Торопов Прав"
        description="Команда юристов под руководством Марка Торопова. Юридические услуги для среднего бизнеса: договоры, ИС, Legal Design."
      />

      <section className="gradient-mesh relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
          <FadeIn>
            <Link
              to="/legal-design"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/90 px-4 py-2.5 text-sm font-medium text-[var(--color-accent)] shadow-sm backdrop-blur-sm transition hover:border-[var(--color-accent)]/50"
            >
              <span>Legal Design — документы, которые читают</span>
              <span aria-hidden>→</span>
            </Link>

            <h1
              className="mt-10 text-[2.75rem] font-medium leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-6xl sm:leading-[1.04] lg:text-7xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Правовое сопровождение
              <br />
              бизнеса
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">
              Команда юристов под руководством Марка Торопова. Берём на себя юридическую сторону вашего бизнеса —
              чтобы вы занимались бизнесом, а не бумагами.
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

            <p className="mx-auto mt-14 max-w-md text-xs leading-relaxed text-[var(--color-ink-muted)]/80">
              Визуал: фото Марка с командой или живой рабочий момент — не стоковые люди в костюмах.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
            Основные услуги
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Договоры и сделки',
              quote: 'Грамотно оформим правовые отношения, минимизируем риски',
              line: 'Подготовка, экспертиза, сопровождение',
            },
            {
              title: 'Интеллектуальная собственность',
              quote: 'Ваш продукт, бренд и контент — юридически защищённые активы',
              line: 'ТМ, авторские права, лицензии, защита в интернете',
            },
            {
              title: 'Legal Design',
              quote: 'Документы, которые люди реально читают и выполняют',
              line: 'Реинжиниринг, дизайн, оптимизация',
              link: '/legal-design',
            },
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-card)] transition hover:border-[var(--color-accent)]/30">
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">{c.title}</h3>
                <p className="mt-3 text-[var(--color-ink-muted)]">«{c.quote}»</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{c.line}</p>
                {c.link ? (
                  <Link to={c.link} className="mt-auto pt-6 text-sm font-medium text-[var(--color-accent)] hover:underline">
                    Подробнее →
                  </Link>
                ) : (
                  <Link to="/services" className="mt-auto pt-6 text-sm font-medium text-[var(--color-accent)] hover:underline">
                    Смотреть в услугах →
                  </Link>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="font-medium text-[var(--color-accent)] hover:underline">
            Все услуги →
          </Link>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Знаем специфику вашей сферы
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-muted)]">
              Не работаем со всем подряд. Специализируемся на бизнесе в конкретных отраслях — понимаем их процессы,
              договоры и риски изнутри.
            </p>
          </FadeIn>
          <div className="mt-10 flex flex-wrap gap-2">
            {industries.map((tag, i) => (
              <FadeIn key={tag} delay={i * 0.03}>
                <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-ink)]">
                  {tag}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <FadeIn className="lg:col-span-5">
            <div className="aspect-[4/5] max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-border)] to-[var(--color-accent-soft)] lg:max-w-none">
              <div className="flex h-full items-end p-8">
                <p className="text-sm text-[var(--color-ink-muted)]">
                  Фото Марка: живой портрет, уверенный — не постановочный корпоратив.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="lg:col-span-7" delay={0.06}>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Об основателе
            </h2>
            <p className="mt-2 font-semibold text-[var(--color-ink)]">Марк Торопов — основатель и управляющий партнёр</p>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink-muted)]">
              8 лет я строю команду, которая понимает бизнес, а не только право. Каждый юрист компании специализируется в
              своей отрасли. Я лично контролирую качество каждого проекта.
            </p>
            <Link to="/about" className="mt-6 inline-block font-medium text-[var(--color-accent)] hover:underline">
              О компании →
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              В цифрах
            </h2>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">Цифры уточняются с Марком — лучше скромные и точные.</p>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '8 лет', d: 'На рынке правового сопровождения бизнеса' },
              { n: '200+', d: 'Клиентов — компаний и предпринимателей' },
              { n: '500+', d: 'Договоров составлено и проверено' },
              { n: '8', d: 'Отраслей специализации' },
            ].map((x, i) => (
              <FadeIn key={x.n} delay={i * 0.05}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 text-center shadow-[var(--shadow-card)]">
                  <div className="text-3xl font-bold text-[var(--color-accent)]" style={{ fontFamily: 'var(--font-display)' }}>
                    {x.n}
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{x.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
            Прозрачно. Быстро. Без лишнего
          </h2>
        </FadeIn>
        <div className="mt-10 space-y-4 text-[var(--color-ink-muted)]">
          {[
            'Заявка — опишите задачу, мы ответим в течение дня',
            'Разбор — профильный юрист изучает ситуацию, Марк согласует стратегию',
            'Работа — фиксированные сроки, понятный результат',
            'Поддержка — остаётесь на связи после закрытия задачи',
          ].map((line, i) => (
            <FadeIn key={line} delay={i * 0.05} className="flex gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-4">
              <span className="font-semibold text-[var(--color-accent)]">{i + 1}.</span>
              <span>{line}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="zayavka" className="border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-xl">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                Есть юридический вопрос?
              </h2>
              <p className="mt-3 text-center text-[var(--color-ink-muted)]">
                Расскажите о задаче — ответим в течение рабочего дня
              </p>
            </FadeIn>
            <FadeIn className="mt-10" delay={0.08}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)]">
                <LeadForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
