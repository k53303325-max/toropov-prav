import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'

const steps = [
  {
    title: 'Текст и каркас',
    bullets: ['Убираем канцелярит и лишние цитаты закона.', 'Меняем верстку: заголовки, списки, акценты.', 'Смысл для суда и сделки не теряем.'],
  },
  {
    title: 'Синергия текста и макета',
    bullets: ['Продумываем макет будущего документа.', 'Добавляем дизайн-элементы и иконки там, где они помогают.', 'Не украшаем ради картинки.'],
  },
  {
    title: 'Интеграция в макет',
    bullets: ['Вносим текст в готовую сетку.', 'Расставляем визуальные акценты.', 'Согласуем черновик с вами до финала.'],
  },
  {
    title: 'Финиш и масштаб',
    bullets: ['Дорабатываем цвет, отступы, чтение на экране.', 'Готовим экспорт под PDF, печать, презентацию.', 'При желании — под ваш брендбук.'],
  },
]

const benefits = [
  { title: 'Быстрее сделки', text: 'Меньше раундов «а что тут написано?» — быстрее подпись.' },
  { title: 'Меньше споров', text: 'Понятные условия снижают риск разных трактовок потом.' },
  { title: 'Понятные условия', text: 'CEO, продукт и финансы читают один и тот же смысл.' },
]

export function LegalDesign() {
  return (
    <div>
      <section className="gradient-mesh border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">Продукт</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-display)' }}>
              Legal design: документы, которые работают на бизнес
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Legal design — это когда юридический текст не «простыня», а понятный продукт: структура, визуальная иерархия,
              иногда — иконки и сетка. Мы оптимизируем и слова, и подачу. Юридическую основу сохраняем.
            </p>
            <Button className="mt-10" to="/contacts">
              Запросить примеры
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
            Почему «обычные» договоры часто не работают
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-muted)]">
            Они написаны «на все случаи», копируются из старых шаблонов и раздуваются «на всякий случай». В итоге их не
            читают до конца, условия помнят по-разному, а в споре каждый тянет договор в свою сторону. Это не
            профессионально — это дорого по времени и нервам.
          </p>
        </FadeIn>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Как мы упрощаем документы
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--color-ink-muted)]">
              Логика близка к тому, как делают сильные продуктовые команды: сначала ясность, потом — детализация. Ниже —
              типичный каркас этапов (как в студиях вроде{' '}
              <a href="https://mollislex.ru/legal-design" className="font-medium text-[var(--color-accent)] hover:underline" target="_blank" rel="noreferrer">
                Mollis Lex
              </a>
              , но без воды и дублей на странице).
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {steps.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <span className="text-xs font-bold text-[var(--color-accent)]">Этап {i + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--color-ink)]">{s.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink-muted)]">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-[var(--color-mint)]">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
            До и после
          </h2>
          <p className="mt-3 text-[var(--color-ink-muted)]">Условный фрагмент — не юридическая консультация, а иллюстрация подхода.</p>
        </FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl border border-[var(--color-border)] bg-zinc-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">До</p>
              <p className="mt-4 font-mono text-sm leading-relaxed text-zinc-700">
                «В соответствии с положениями ст. N … ст. M … Стороны, руководствуясь вышеизложенным, в целях реализации
                договорённостей, достигнутых в ходе переговоров, осуществляют взаимодействие…»
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-card)]">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">После</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                <strong className="text-[var(--color-ink)]">Что делаем:</strong> вы передаёте материалы до среды; мы
                готовим черновик к пятнице. <br />
                <br />
                <strong className="text-[var(--color-ink)]">Если срок срывается:</strong> пишем заранее, согласуем новую
                дату. Ссылки на статьи закона — в сносках для юристов, не в теле письма для CEO.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Structure examples */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Примеры структуры
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--color-ink-muted)]">
              Так может выглядеть каркас B2B-договора или оферты — с акцентами для читателя.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { t: 'Коротко о сделке', d: 'Кто, что поставляет, ключевой результат, срок.' },
              { t: 'Деньги и порядок', d: 'Стоимость, акты, счета, что считается приёмкой.' },
              { t: 'Риски и выход', d: 'Ответственность, конфиденциальность, как расторгнуть без войны.' },
            ].map((x, i) => (
              <FadeIn key={x.t} delay={i * 0.06}>
                <div className="rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5">
                  <div className="text-xs font-bold text-[var(--color-accent)]">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="mt-2 font-semibold text-[var(--color-ink)]">{x.t}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{x.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
            Выгоды для бизнеса
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.07}>
              <div className="rounded-2xl bg-[var(--color-ink)] p-8 text-white">
                <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{b.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-br from-[var(--color-accent-soft)] to-[var(--color-mint-soft)] px-8 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Где применим legal design
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[var(--color-ink-muted)]">
              Почти для любых документов: договоры, корпоративные акты, судебные материалы (где уместно), локальные
              положения, IP &amp; IT. Ограничений по отраслям нет — важнее задача и аудитория.
            </p>
            <Button className="mt-8" to="/contacts">
              Обсудить Legal Design
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
