import type { SVGProps } from 'react'

const stroke = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

type IconProps = SVGProps<SVGSVGElement>

export function IconEvent({ className, ...p }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...p}>
      <path {...stroke} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

export function IconDigital({ className, ...p }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...p}>
      <path {...stroke} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
}

export function IconHoReCa({ className, ...p }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...p}>
      <path
        {...stroke}
        d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zm0 0V6a2 2 0 012-2h8a2 2 0 012 2v2"
      />
    </svg>
  )
}

export function IconStartup({ className, ...p }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...p}>
      <path {...stroke} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

export function IconContent({ className, ...p }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...p}>
      <path {...stroke} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

export function IconIt({ className, ...p }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...p}>
      <path {...stroke} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
}
