import { FadeIn } from '../components/FadeIn'
import { Seo } from '../components/Seo'

const posts = [
  {
    title: 'Что такое Legal Design и почему бизнес переходит на понятные документы',
    hint: 'SEO под страницу Legal Design, тема хорошо заходит в соцсетях',
  },
  {
    title: '5 ошибок в договорах, которые стоят бизнесу денег',
    hint: 'Практическая статья — удобно шарить в Telegram',
  },
  {
    title: 'Как защитить товарный знак стартапу: пошаговый гайд',
    hint: 'Трафик по запросам про ИС и товарные знаки',
  },
  {
    title: 'Уголовные риски для собственника бизнеса: что нужно знать',
    hint: 'Острая тема, высокий спрос',
  },
  {
    title: 'Оферта vs договор: что выбрать для онлайн-бизнеса',
    hint: 'Частый вопрос от digital-аудитории',
  },
]

export function Blog() {
  return (
    <div className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
      <Seo
        title="Блог — Торопов Прав"
        description="Статьи о Legal Design, договорах, интеллектуальной собственности и защите бизнеса. Экспертиза команды."
      />
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
          Блог
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-muted)]">
          SEO и демонстрация экспертизы команды. План — статьи от 1500 слов с оптимизацией; на старте показываем темы и
          анонсы.
        </p>
      </FadeIn>

      <ul className="mt-14 space-y-6">
        {posts.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <li className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-card)] transition hover:border-[var(--color-accent)]/30">
              <h2 className="text-xl font-semibold text-[var(--color-ink)]">{p.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{p.hint}</p>
              <p className="mt-3 text-xs text-[var(--color-ink-muted)]">Материал в работе — полный текст по готовности.</p>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  )
}
