import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import { Seo } from '../components/Seo'

const faqItems = [
  {
    q: 'Что такое Legal Design?',
    a: 'Подход к созданию юридических документов, при котором главное — понятность для читателя. Тот же юридический смысл, но в структуре, которую можно прочитать за три минуты.',
  },
  {
    q: 'Это законно?',
    a: 'Да. Legal Design не меняет юридическое содержание — только форму подачи. Документ остаётся полностью правомерным.',
  },
  {
    q: 'Чем отличается от обычного юриста?',
    a: 'Обычный юрист пишет для суда. Legal Design — для человека. Задача не просто составить документ, а сделать его работающим инструментом.',
  },
  {
    q: 'Сколько стоит?',
    a: 'Зависит от типа и объёма документа. Уточним на бесплатной консультации.',
  },
  {
    q: 'Сколько времени занимает?',
    a: 'От 3 до 10 рабочих дней в зависимости от сложности документа.',
  },
  {
    q: 'Можно переделать существующий документ?',
    a: 'Да — это один из самых частых запросов. Берём ваш текущий договор или оферту и делаем редизайн.',
  },
  {
    q: 'Для каких документов подходит?',
    a: 'Оферты, пользовательские соглашения, договоры с клиентами и подрядчиками, NDA, корпоративные документы, HR-политики.',
  },
  {
    q: 'Останется ли документ юридически грамотным?',
    a: 'Обязательно. Над документом работает юрист — содержание не упрощается, упрощается форма.',
  },
]

const audience = [
  {
    title: 'Стартапы и IT',
    text: 'Инвестиционные соглашения, оферты, политики — документы, которые инвесторы и пользователи реально читают',
  },
  {
    title: 'HoReCa',
    text: 'Договоры аренды, франшизные соглашения, трудовые договоры для сотрудников без юридического бэкграунда',
  },
  {
    title: 'Контентмейкеры',
    text: 'Авторские договоры и лицензии, которые понимают обе стороны сделки',
  },
  {
    title: 'Event',
    text: 'Договоры с площадками и подрядчиками, которые не оставляют двойных трактовок',
  },
  {
    title: 'Онлайн-школы',
    text: 'Оферта, политика возврата, пользовательское соглашение — чтобы клиенты знали, на что соглашаются',
  },
]

export function LegalDesign() {
  useEffect(() => {
    const id = 'schema-faq-legal-design'
    const existing = document.getElementById(id)
    if (existing) existing.remove()
    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    })
    document.head.appendChild(script)
    return () => {
      document.getElementById(id)?.remove()
    }
  }, [])

  return (
    <div>
      <Seo
        title="Legal Design — понятные юридические документы для бизнеса | Торопов Прав"
        description="Legal Design: создаём договоры, оферты и политики, которые люди реально читают. Реинжиниринг, дизайн, оптимизация юридических документов."
      />

      <section className="gradient-mesh border-b border-[var(--color-border)]">
        <div className="w-full px-4 py-24 text-center sm:px-8 lg:px-12 sm:py-32">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">Продукт</p>
            <h1
              className="mt-6 text-4xl font-medium leading-[1.08] tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Legal Design:
              <br />
              документы, которые работают на бизнес
            </h1>
            <p className="mx-auto mt-6 max-w-[42rem] text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Обычный договор дочитывают до конца меньше 5% подписантов. Документ в стиле Legal Design — читают, понимают и
              выполняют.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact">Заказать Legal Design</Button>
              <a
                href="#primery"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-btn-secondary)] px-6 py-3 text-[15px] font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-btn-secondary-hover)]"
              >
                Смотреть примеры
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
            Что такое Legal Design — и зачем он нужен вашему бизнесу
          </h2>
        </FadeIn>
        <FadeIn className="mt-8 space-y-5 text-[var(--color-ink-muted)]" delay={0.05}>
          <p>
            Legal Design — это подход к созданию юридических документов, при котором на первом месте стоит понятность для
            читателя. Классический текст часто пишется «для толстой папки»: сложные конструкции, отсылки к статьям,
            многоуровневые условия. Для суда это может быть оправдано — но для сотрудника, клиента или партнёра такой
            договор превращается в стену текста. В итоге его не читают, условия помнят по-разному, а споры начинаются с
            фразы «мы думали, что тут другое».
          </p>
          <p>
            Legal Design меняет логику подачи. Документ проектируется как продукт: чёткая структура, визуальные акценты,
            понятный язык. Таблицы вместо сплошного полотна. Схемы там, где так проще ухватить суть. Иконки и выноски —
            чтобы глаз цеплялся за важное, а не терялся в нумерации. Для российского бизнеса это особенно актуально: и
            собственник, и руководитель отдела, и контрагент из другой сферы должны понимать, что подписывают — без
            «перевода» через юриста каждый раз.
          </p>
          <p>
            Юридическая сила при этом не «размывается». Меняется форма, а не произвольное искажение смысла: сложные блоки
            можно вынести в приложения, сноски или отдельные разделы для специалистов. Клиент подписывает то, что осознал.
            Сотрудник соблюдает то, что прочитал. Меньше недопонимания — меньше конфликтов и быстрее сделки. Именно так
            legal design связывается с разработкой договоров и проверкой договоров в нашей работе: мы не украшаем текст
            ради картинки — мы делаем его рабочим инструментом сопровождения бизнеса.
          </p>
          <p>
            Если коротко: Legal Design — это когда юридические услуги для бизнеса включают не только «правильные
            формулировки», но и подачу, которой люди реально пользуются. Это отдельное направление в «Торопов Прав»: над
            ним работают юристы вместе с логикой документа и визуальной структурой — чтобы и регулятор, и контрагент
            видели в тексте не угрозу, а ясные правила игры.
          </p>
        </FadeIn>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Три составляющих услуги
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: 'Реинжиниринг',
                d: 'Переработка структуры и логики документа. Убираем лишнее, расставляем приоритеты, делаем навигацию по тексту.',
              },
              {
                t: 'Дизайн',
                d: 'Визуальное оформление: схемы, таблицы, иконки, цветовые акценты. Документ становится удобным для чтения.',
              },
              {
                t: 'Оптимизация',
                d: 'Упрощение языка без потери юридической силы. Сложные конструкции — в понятные фразы.',
              },
            ].map((x, i) => (
              <FadeIn key={x.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">{x.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{x.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
            Кому нужен Legal Design
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {audience.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
                <h3 className="font-semibold text-[var(--color-ink)]">{a.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{a.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="primery" className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
              Разница между обычным договором и Legal Design
            </h2>
            <p className="mt-3 text-[var(--color-ink-muted)]">
              Примеры из реальных кейсов — по запросу. Ниже — схематичный mock-up: «до» и «после».
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-[var(--color-border)] bg-zinc-200/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">До</p>
                <p className="mt-4 font-mono text-xs leading-relaxed text-zinc-700">
                  Сплошной текст без подзаголовков……………… длинные абзацы………… отсылки к статьям подряд………… одна
                  нумерация на пять страниц…………
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-2xl border-2 border-[var(--color-accent)]/40 bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-card)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">После</p>
                <div className="mt-4 space-y-2 text-sm text-[var(--color-ink-muted)]">
                  <div className="rounded-lg bg-[var(--color-accent-soft)] px-3 py-2 font-medium text-[var(--color-ink)]">
                    Блок 1 · Суть сделки
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded border border-[var(--color-border)] p-2">Таблица сроков</div>
                    <div className="rounded border border-[var(--color-border)] p-2">Таблица оплат</div>
                  </div>
                  <p>Короткие абзацы, иконки у ключевых обязательств, сноски для юристов — внизу страницы.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
            Вопросы и ответы
          </h2>
        </FadeIn>
        <dl className="mt-10 space-y-6">
          {faqItems.map((item, i) => (
            <FadeIn key={item.q} delay={i * 0.03}>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-4">
                <dt className="font-semibold text-[var(--color-ink)]">{item.q}</dt>
                <dd className="mt-2 text-sm text-[var(--color-ink-muted)]">{item.a}</dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </section>

      <section className="w-full px-4 pb-20 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="rounded-3xl bg-[var(--color-ink)] px-8 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-medium text-[#f7f3f0]" style={{ fontFamily: 'var(--font-display)' }}>
              Заказать Legal Design
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[#c4bbb5]">Расскажите о документе — подберём формат и сроки.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-[#f7f3f0] px-8 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-accent-soft)]"
            >
              Перейти к заявке
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
