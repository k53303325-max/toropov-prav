import { Link } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-mesh relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Юридические услуги для бизнеса
            </p>
            <h1
              className="mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Право без лишнего шума. Для тех, кто строит продукт.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Помогаем компаниям и командам в IT: договоры, проверка контрагентов, сопровождение сделок — говорим
              простым языком и оформляем документы так, чтобы ими реально пользовались.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/contacts">Обсудить задачу</Button>
              <Button to="/legal-design" variant="ghost">
                Что такое Legal Design
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Почему юристы так часто усложняют
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Часто в документах — цитаты закона подряд, канцелярит и «на всякий случай» ещё три страницы. Это не злой
              умысел. Так учили. Но бизнесу от этого не легче: договор не читают, условия трактуют по-разному, сделка
              тормозит.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-lg font-semibold text-[var(--color-ink)]">Почему это больно для бизнеса</h3>
              <ul className="mt-4 space-y-3 text-[var(--color-ink-muted)]">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  Руководитель не понимает риски — значит, не может быстро решить.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint)]" />
                  Юрист и продукт говорят на разных языках — растут сроки и стоимость.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  Документ лежит «для галочки» — в споре он не защищает, потому что им не пользовались.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solution */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Как мы работаем
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-[var(--color-ink-muted)]">
              Мы относимся к юридическому сопровождению как к продукту: ясная структура, понятные формулировки, дизайн
              документа — если это уместно. Юридическую основу сохраняем. Лишний шум убираем.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', t: 'Слушаем', d: 'Понимаем продукт, сделку и то, кто будет читать документ.' },
              { step: '02', t: 'Проектируем', d: 'Собираем структуру: разработка договоров или проверка договоров — с акцентами.' },
              { step: '03', t: 'Пишем ясно', d: 'Убираем канцелярит, поясняем спорные места в переписке или созвоне.' },
              { step: '04', t: 'Доводим до формата', d: 'Верстка, legal design, экспорт под ваш бренд — чтобы документ жил в работе.' },
            ].map((x, i) => (
              <FadeIn key={x.step} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-card)]">
                  <span className="text-xs font-bold text-[var(--color-accent)]">{x.step}</span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
                    {x.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{x.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                Услуги
              </h2>
              <p className="mt-2 max-w-xl text-[var(--color-ink-muted)]">
                Сопровождение бизнеса, разработка договоров и проверка договоров — под задачу, а не «пакет на всех».
              </p>
            </div>
            <Button to="/services" variant="ghost">
              Все услуги
            </Button>
          </div>
        </FadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Договоры и сделки', desc: 'От NDA до сложных B2B: структура, риски, переговоры.' },
            { title: 'IT и интеллектуальная собственность', desc: 'Лицензии, SaaS, передача прав, работа с контентом.' },
            { title: 'Ежедневное сопровождение', desc: 'Вопросы по текущим проектам — без оформления «на 20 страниц».' },
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <Link
                to="/services"
                className="block h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-[var(--shadow-card-hover)]"
              >
                <h3 className="font-semibold text-[var(--color-ink)]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{c.desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)]">Подробнее →</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Legal Design teaser */}
      <section className="border-y border-[var(--color-border)] bg-gradient-to-br from-[var(--color-accent-soft)]/50 to-[var(--color-mint-soft)]/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">Legal design</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                Документы, которые хочется открыть
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
                Оптимизируем текст и внешний вид: понятные блоки, акценты, иногда — иконки и сетка. Смысл для суда и
                сделки сохраняем. Подачу делаем человеческой.
              </p>
              <Button className="mt-8" to="/legal-design">
                Смотреть продукт
              </Button>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="gradient-border rounded-2xl">
                <div className="gradient-border-inner p-8">
                  <p className="text-sm font-medium text-[var(--color-ink)]">Мягко по форме — жёстко по сути</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    Как отдельное направление legal design помогает бизнесу быстрее согласовывать условия и реже спорить
                    о том, «что мы вообще подписали».
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
            О основателе
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-5">
            <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-border)] to-[var(--color-accent-soft)] lg:max-w-none">
              <div className="flex h-full items-end p-8">
                <p className="text-sm text-[var(--color-ink-muted)]">Место для фото — тёплый портрет, не «костюм на фоне колонн».</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="lg:col-span-7">
            <p className="text-xl font-semibold leading-snug text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Торопов
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Я пришёл в право из интереса к тому, как устроены сделки и продукты. Семь с лишним лет помогаю бизнесу и
              командам в IT: от стартапов до зрелых компаний. Видел сотни договоров, которые «никто не читал», и десятки
              споров, которые начинались с неясной формулировки в одном абзаце.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Поэтому я строю работу иначе: сначала — ясность для тех, кто принимает решения, потом — юридическая точность.
              Если документ можно сделать короче и понятнее без потери смысла, это не компромисс. Это стандарт.
            </p>
            <Link to="/about" className="mt-6 inline-block font-medium text-[var(--color-accent)] hover:underline">
              История целиком →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Cases */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <FadeIn className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                Кейсы и результаты
              </h2>
              <p className="mt-2 text-[var(--color-ink-muted)]">Коротко — о задаче и том, что изменилось после работы.</p>
            </div>
            <Button to="/cases" variant="ghost">
              Все кейсы
            </Button>
          </FadeIn>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              { tag: 'IT-продукт', title: 'Договор с заказчиком за 10 дней', r: 'Сократили цикл согласования с 4 недель.' },
              { tag: 'Стартап', title: 'Пакет для инвестраунда', r: 'Единый стиль документов — меньше вопросов от юристов фонда.' },
              { tag: 'Сервис', title: 'Оферта и политика для пользователей', r: 'Понятный текст — меньше обращений в поддержку.' },
            ].map((k, i) => (
              <FadeIn key={k.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">{k.tag}</span>
                  <h3 className="mt-3 font-semibold text-[var(--color-ink)]">{k.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{k.r}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <div className="rounded-3xl bg-[var(--color-ink)] px-8 py-14 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
              Расскажите, что у вас за задача
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-zinc-400">
              Напишите пару строк — ответим с вариантами формата работы и ориентиром по срокам.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contacts"
                className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-accent-soft)]"
              >
                Обсудить задачу
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
