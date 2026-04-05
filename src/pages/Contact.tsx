import { FadeIn } from '../components/FadeIn'
import { LeadForm } from '../components/LeadForm'
import { Seo } from '../components/Seo'

export function Contact() {
  return (
    <div className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
      <Seo
        title="Контакты — Торопов Прав"
        description="Свяжитесь с командой Торопов Прав. Ответим в течение одного рабочего дня."
      />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Свяжитесь с нами
          </h1>
          <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
            Расскажите о задаче — ответим в течение рабочего дня
          </p>
          <dl className="mt-10 space-y-4 text-[var(--color-ink-muted)]">
            <div>
              <dt className="text-sm font-semibold text-[var(--color-ink)]">Telegram</dt>
              <dd>
                <span className="text-[var(--color-ink-muted)]">@username — указать контакт Марка</span>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-[var(--color-ink)]">Email</dt>
              <dd>
                <a href="mailto:hello@toropovprav.ru" className="font-medium text-[var(--color-accent)] hover:underline">
                  hello@toropovprav.ru
                </a>
                <span className="block text-sm">— заменить на рабочий адрес</span>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-[var(--color-ink)]">Телефон</dt>
              <dd>По запросу или открыто — решение Марка</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-[var(--color-ink)]">Время ответа</dt>
              <dd>В течение 1 рабочего дня</dd>
            </div>
          </dl>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-card)]">
            <LeadForm submitLabel="Отправить" />
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
