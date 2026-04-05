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
    <form id={id} onSubmit={onSubmit} className={`space-y-4 ${className}`}>
      <div>
        <label htmlFor="lead-name" className="block text-sm font-medium text-[var(--color-ink)]">
          Имя
        </label>
        <input
          id="lead-name"
          name="name"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
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
          className="mt-1.5 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
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
          className="mt-1.5 w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
          placeholder="Например: проверить договор с подрядчиком, оферта для сайта…"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[#f7f3f0] transition hover:bg-[var(--color-accent)]"
      >
        {submitLabel}
      </button>
    </form>
  )
}
