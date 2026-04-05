/** Направления для выпадающего меню «Услуги» (как Industries на delphi.ai) */
export type MegaMenuItem = {
  title: string
  description: string
  to: string
}

export const servicesMegaMenuColumns: [MegaMenuItem[], MegaMenuItem[]] = [
  [
    {
      title: 'Договоры и сделки',
      description: 'Подготовка, экспертиза и сопровождение — минимизируем риски по сделке',
      to: '/services',
    },
    {
      title: 'Корпоративные вопросы',
      description: 'Регистрация, M&A, сделки с долями и корпоративные споры',
      to: '/services',
    },
    {
      title: 'Представительство',
      description: 'Арбитраж, ФАС, СИП, досудебное урегулирование и взыскание',
      to: '/services',
    },
    {
      title: 'Интеллектуальная собственность',
      description: 'ТМ, патенты, договоры по ИС и защита в интернете',
      to: '/services',
    },
  ],
  [
    {
      title: 'Закупки и тендеры',
      description: 'Экспертиза контрактов, обжалование, защита от РНП',
      to: '/services',
    },
    {
      title: 'Банкротство',
      description: 'Физлица и юрлица, субсидиарная ответственность',
      to: '/services',
    },
    {
      title: 'Legal Design',
      description: 'Понятные документы: реинжиниринг, визуал, язык без потери силы',
      to: '/legal-design',
    },
    {
      title: 'Уголовная защита бизнеса',
      description: 'Собственники и руководители: проверка, следствие, суд',
      to: '/services',
    },
  ],
]
