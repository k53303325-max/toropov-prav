import { FadeIn } from '../components/FadeIn'
import { Button } from '../components/Button'

const cases = [
  {
    area: 'B2B SaaS',
    title: 'Договор на внедрение и сопровождение',
    task: 'Клиенту нужно было согласовать типовой договор с крупным заказчиком за ограниченный срок.',
    result: 'Разложили риски по зонам ответственности, вынесли технические приложения в отдельные блоки. Согласование сократилось по раундам переписки.',
  },
  {
    area: 'Стартап',
    title: 'Инвестиционный раунд и пакет документов',
    task: 'Много разных форматов от фонда — нужна единая подача и понятные формулировки для команды.',
    result: 'Выровняли терминологию, сократили дубли между документами. Юристы со стороны инвестора получили структурированный пакет — меньше уточняющих вопросов.',
  },
  {
    area: 'Маркетплейс / сервис',
    title: 'Оферта и правила для пользователей',
    task: 'Длинный юридический текст не читали ни пользователи, ни саппорт — росло число однотипных обращений.',
    result: 'Переписали блоки в логике «сценарий пользователя», добавили визуальную иерархию. Поддержка зафиксировала снижение повторяющихся вопросов по ключевым темам.',
  },
  {
    area: 'Аутсорс / IT',
    title: 'Договор с подрядчиком и передача прав',
    task: 'Нужно было чётко разделить права на результат, доступы и ответственность за сроки.',
    result: 'Собрали матрицу «кто что отдаёт и когда», убрали размытые формулировки. Стороны подписали без дополнительного раунда правок.',
  },
]

export function Cases() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">Опыт</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
          Кейсы
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-muted)]">
          Ниже — обезличенные примеры: мы не раскрываем имена клиентов без письменного разрешения, но сами истории
          настоящие по типу задачи и результату.
        </p>
      </FadeIn>

      <div className="mt-14 space-y-8">
        {cases.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.05}>
            <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)]">
              <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">{c.area}</span>
              <h2 className="mt-3 text-2xl font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                {c.title}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">Задача</p>
                  <p className="mt-2 text-[var(--color-ink-muted)]">{c.task}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-mint)]">Результат</p>
                  <p className="mt-2 text-[var(--color-ink-muted)]">{c.result}</p>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-16 text-center">
        <Button to="/contacts">Хочу похожий результат</Button>
      </FadeIn>
    </div>
  )
}
