import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
      <div className="grid w-full gap-10 px-4 py-14 sm:px-8 lg:grid-cols-3 lg:px-12">
        <div>
          <p className="text-lg font-bold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
            Торопов <span className="text-[var(--color-accent)]">Прав</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-ink-muted)]">
            Правовое сопровождение бизнеса: договоры, интеллектуальная собственность, Legal Design, споры и корпоративное
            право.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-[var(--color-ink)]">Навигация</span>
          <Link className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]" to="/services">
            Услуги
          </Link>
          <Link className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]" to="/legal-design">
            Legal Design
          </Link>
          <Link className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]" to="/cases">
            Кейсы
          </Link>
          <Link className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]" to="/blog">
            Блог
          </Link>
          <Link className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]" to="/politika-personalnyh-dannyh">
            Персональные данные
          </Link>
        </div>
        <div className="text-sm">
          <span className="font-semibold text-[var(--color-ink)]">Связь</span>
          <p className="mt-2 text-[var(--color-ink-muted)]">
            Реквизиты (ИНН/ОГРНИП, юр. адрес) и актуальные контакты — вставьте в футер перед запуском.
          </p>
          <a
            href="mailto:hello@toropovprav.ru"
            className="mt-2 block font-medium text-[var(--color-accent)] hover:underline"
          >
            hello@toropovprav.ru
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] py-6 text-center text-xs text-[var(--color-ink-muted)]">
        © {new Date().getFullYear()} Торопов Прав. Все права защищены.
      </div>
    </footer>
  )
}
