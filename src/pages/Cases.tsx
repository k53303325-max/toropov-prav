import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'
import { Seo } from '../components/Seo'

const cases = [
  {
    title: 'Оферта для SaaS-платформы — редизайн в стиле Legal Design',
    client: 'IT-стартап, ~30 человек',
    task: 'Длинная оферта на юридическом языке: пользователи не доходили до важных блоков, поддержка отвечала на одни и те же вопросы.',
    solution: [
      'Разобрали структуру по сценариям пользователя',
      'Вынесли ключевые условия в таблицы и блоки с акцентами',
      'Согласовали формулировки с продуктом и юристами',
      'Подготовили версии для сайта и для email-рассылки при регистрации',
    ],
    result: 'Прозрачнее условия оплаты и ответственности; меньше типовых обращений в поддержку. Подписываемость и дочитываемость выросли по внутренней аналитике.',
    visual: 'legal-design',
  },
  {
    title: 'Пакет договоров для digital-агентства и event-подрядчиков',
    client: 'Агентство полного цикла, event и digital',
    task: 'Разные шаблоны из прошлых лет, внутри — разная терминология и дубли условий.',
    solution: [
      'Единый глоссарий и структура для типовых договоров',
      'Проверка договоров контрагентов по чек-листу рисков',
      'Обучение проджект-менеджеров, где искать ответы в тексте',
    ],
    result: 'Быстрее запуск проектов со стороны юридического согласования; меньше споров о «что мы согласовали в переписке».',
    visual: 'text',
  },
  {
    title: 'Франшиза и HoReCa: договор коммерческой концессии',
    client: 'Сеть в сфере общепита',
    task: 'Нужна понятная модель для франчайзи без юридического бэкграунда.',
    solution: [
      'Разработка договоров с пошаговыми схемами роялти и отчётности',
      'Отдельные приложения под разные форматы точек',
    ],
    result: 'Короче цикл согласования с партнёрами; меньше запросов «переформулировать одно и то же».',
    visual: 'text',
  },
  {
    title: 'Инвестиционный раунд: согласованность пакета документов',
    client: 'Стартап, продукт и IT',
    task: 'Несколько документов от разных источников — дубли и противоречия в терминах.',
    solution: [
      'Сверка терминологии и ссылок между документами',
      'Единый стиль и оглавление для передачи стороне инвестора',
    ],
    result: 'Меньше раундов вопросов от юридической службы фонда; быстрее переход к подписанию.',
    visual: 'text',
  },
]

export function Cases() {
  return (
    <div className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
      <Seo
        title="Кейсы — Торопов Прав"
        description="Примеры работ: Legal Design, договоры, сопровождение бизнеса. Обезличенные кейсы по типу задачи и результату."
      />
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
          Кейсы
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-muted)]">
          Особенно важны примеры по Legal Design — здесь есть и текстовые истории, и место под визуал «до / после»,
          когда Марк предоставит материалы.
        </p>
      </FadeIn>

      <div className="mt-14 space-y-12">
        {cases.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.04}>
            <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                {c.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-[var(--color-accent)]">Клиент: {c.client}</p>
              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">Задача</p>
                  <p className="mt-2 text-[var(--color-ink-muted)]">{c.task}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-mint)]">Решение</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-[var(--color-ink-muted)]">
                    {c.solution.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 rounded-xl bg-[var(--color-accent-soft)]/50 px-4 py-3 text-[var(--color-ink-muted)]">
                <span className="font-semibold text-[var(--color-ink)]">Результат: </span>
                {c.result}
              </p>
              {c.visual === 'legal-design' && (
                <p className="mt-4 text-sm text-[var(--color-ink-muted)]">
                  Визуал: для этого кейса предусмотрен блок «до / после» — добавьте скриншоты или PDF с согласия клиента.
                </p>
              )}
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-16 text-center">
        <Button to="/contact">Обсудить похожую задачу</Button>
      </FadeIn>
    </div>
  )
}
