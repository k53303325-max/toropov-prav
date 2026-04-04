import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'

const blocks = [
  {
    title: 'Договоры и сделки',
    items: [
      'Разработка договоров под вашу модель: подряд, услуги, лицензии, партнёрства.',
      'Проверка договоров контрагентов: риски, зоны торга, что поправить до подписи.',
      'Сопровождение переговоров — в переписке и на звонке, без лишней бюрократии.',
    ],
  },
  {
    title: 'IT, продукт и интеллектуальная собственность',
    items: [
      'SaaS, внедрение, интеграции: кто владеет кодом и данными, что с персональными данными.',
      'Лицензии на контент, софт, бренд; работа с подрядчиками и фрилансерами.',
      'Локальные акты и внутренние регламенты, если команда растёт.',
    ],
  },
  {
    title: 'Сопровождение бизнеса',
    items: [
      'Регулярные вопросы по текущим проектам — формат «как есть», без искусственного раздувания.',
      'Помощь при смене модели: новый продукт, новый рынок, новый контрагент.',
      'Связка с legal design: когда документ должен выглядеть как часть продукта.',
    ],
  },
]

export function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">Услуги</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
          Юридические услуги для бизнеса — по делу
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-muted)]">
          Мы не продаём «всё подряд». Фокус — на понятном сопровождении бизнеса, разработке договоров и проверке договоров,
          когда это реально нужно вашей сделке или продукту.
        </p>
      </FadeIn>

      <div className="mt-16 space-y-12">
        {blocks.map((b, i) => (
          <FadeIn key={b.title} delay={i * 0.06}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                {b.title}
              </h2>
              <ul className="mt-6 space-y-4 text-[var(--color-ink-muted)]">
                {b.items.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-16 text-center">
        <p className="text-lg text-[var(--color-ink-muted)]">Не уверены, что подойдёт? Напишите в двух предложениях — мы честно скажем.</p>
        <Button className="mt-6" to="/contacts">
          Обсудить задачу
        </Button>
      </FadeIn>
    </div>
  )
}
