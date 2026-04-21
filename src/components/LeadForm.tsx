import { useState, type FormEvent } from 'react'

type Props = {
  id?: string
  submitLabel?: string
  className?: string
}

export function LeadForm({ id, submitLabel = 'Отправить заявку', className = '' }: Props) {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <p className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-8 text-center font-medium text-[var(--color-ink)] ${className}`}>
        Спасибо! Мы ответим в течение рабочего дня. (Демо: подключите отправку на сервер или CRM.)
      </p>
    )
  }

  return (
    <form id={id} onSubmit={onSubmit} className={`space-y-5 ${className}`}>
      <div>
        <label htmlFor="lead-name" className="block text-sm font-medium text-[var(--color-ink)]">
          Имя
        </label>
        <input
          id="lead-name"
          name="name"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
          placeholder="Как к вам обращаться"
        />
      </div>
      <div>
        <label htmlFor="lead-contact" className="block text-sm font-medium text-[var(--color-ink)]">
          Телефон или Telegram
        </label>
        <input
          id="lead-contact"
          name="contact"
          required
          className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
          placeholder="+7 … или @username"
        />
      </div>
      <div>
        <label htmlFor="lead-task" className="block text-sm font-medium text-[var(--color-ink)]">
          Коротко о задаче
        </label>
        <textarea
          id="lead-task"
          name="task"
          required
          rows={4}
          className="mt-2 w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
          placeholder="Например: проверить договор с подрядчиком, оферта для сайта…"
        />
      </div>
      <div className="flex gap-3 pt-0.5">
        <input
          id="lead-pd-consent"
          name="pdConsent"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-accent)] accent-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/30"
        />
        <label htmlFor="lead-pd-consent" className="text-sm leading-snug text-[var(--color-ink-muted)]">
          Я согласен на обработку персональных данных в соответствии с{' '}
          <a
            href="/politika-obrabotki-personalnyh-dannyh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-accent)] underline underline-offset-2 hover:text-[var(--color-accent-hover)]"
          >
            Политикой
          </a>
          .
        </label>
      </div>
      <button
        type="submit"
        className="mt-1 w-full rounded-full bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[#f7f3f0] transition hover:bg-[var(--color-accent)]"
      >
        {submitLabel}
      </button>
    </form>
  )
}
