import { FadeIn } from '../components/FadeIn'
import { Seo } from '../components/Seo'

const pdfPath = '/politika-obrabotki-personalnyh-dannyh.pdf'

export function PrivacyPolicy() {
  return (
    <div className="w-full px-4 py-16 sm:px-8 lg:px-12 sm:py-20">
      <Seo
        title="Политика обработки персональных данных — Торопов Прав"
        description="Политика обработки персональных данных компании Торопов Прав."
      />
      <FadeIn>
        <h1
          className="text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Политика обработки персональных данных
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-muted)]">
          Ниже — актуальный текст в формате PDF. При необходимости документ можно сохранить к себе на устройство.
        </p>
        <p className="mt-4">
          <a
            href={pdfPath}
            download
            className="inline-flex font-medium text-[var(--color-accent)] underline underline-offset-2 hover:text-[var(--color-accent-hover)]"
          >
            Скачать PDF
          </a>
        </p>
        <div className="mt-10 w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-card)]">
          <iframe
            title="Политика обработки персональных данных (PDF)"
            src={`${pdfPath}#view=FitH`}
            className="h-[min(75vh,900px)] w-full min-h-[480px]"
          />
        </div>
        <p className="mt-4 text-sm text-[var(--color-ink-muted)]">
          Если документ не отображается в браузере, воспользуйтесь ссылкой «Скачать PDF» выше.
        </p>
      </FadeIn>
    </div>
  )
}
