import { useState, type FormEvent } from 'react'
import { FadeIn } from '../components/FadeIn'

export function Contacts() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">Контакты</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Обсудим задачу
          </h1>
          <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
            Напишите, что за проект или сделка, и как с вами связаться. Ответим обычно в течение одного рабочего дня.
          </p>
          <div className="mt-8 space-y-3 text-[var(--color-ink-muted)]">
            <p>
              <span className="font-medium text-[var(--color-ink)]">Email:</span>{' '}
              <a href="mailto:hello@toropovprav.ru" className="text-[var(--color-accent)] hover:underline">
                hello@toropovprav.ru
              </a>
            </p>
            <p>
              <span className="font-medium text-[var(--color-ink)]">Телефон / мессенджеры:</span> укажите ваши реальные
              номера вместо заглушки.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-card)]">
            {sent ? (
              <p className="text-center font-medium text-[var(--color-ink)]">
                Спасибо! Заявка отправлена (демо: форма без бэкенда — подключите свой сервис отправки).
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)]">
                    Имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-1.5 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
                    placeholder="Как к вам обращаться"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
                    placeholder="you@company.ru"
                  />
                </div>
                <div>
                  <label htmlFor="msg" className="block text-sm font-medium text-[var(--color-ink)]">
                    Задача
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    required
                    rows={4}
                    className="mt-1.5 w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
                    placeholder="Коротко: продукт, сделка, что нужно по срокам"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
                >
                  Отправить
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
