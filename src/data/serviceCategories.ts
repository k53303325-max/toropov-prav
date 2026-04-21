/** Направления услуг: карточки, меню и контент подстраниц */
export type ServiceCategorySlug =
  | 'dogovory-i-sdelki'
  | 'korporativnye-voprosy'
  | 'predstavitelstvo'
  | 'intellektualnaya-sobstvennost'
  | 'zakupki-i-tendery'
  | 'bankrotstvo'
  | 'ugolovnaya-zashchita-biznesa'

export type ServiceNavItem = {
  /** Полный путь: /services/... или /legal-design */
  path: string
  title: string
  shortDescription: string
}

export const serviceNavItems: ServiceNavItem[] = [
  {
    path: '/services/dogovory-i-sdelki',
    title: 'Договоры и сделки',
    shortDescription: 'Подготовка, экспертиза и сопровождение — минимизируем риски по сделке',
  },
  {
    path: '/services/korporativnye-voprosy',
    title: 'Корпоративные вопросы',
    shortDescription: 'Регистрация, M&A, сделки с долями и корпоративные споры',
  },
  {
    path: '/services/predstavitelstvo',
    title: 'Представительство',
    shortDescription: 'в судах и государственных органах',
  },
  {
    path: '/services/intellektualnaya-sobstvennost',
    title: 'Интеллектуальная собственность',
    shortDescription: 'ТМ, патенты, договоры по ИС и защита в интернете',
  },
  {
    path: '/services/zakupki-i-tendery',
    title: 'Закупки и тендеры',
    shortDescription: 'Экспертиза контрактов, обжалование, защита от РНП',
  },
  {
    path: '/services/bankrotstvo',
    title: 'Банкротство',
    shortDescription: 'Физлица и юрлица, субсидиарная ответственность',
  },
  {
    path: '/legal-design',
    title: 'Legal Design',
    shortDescription: 'Понятные документы: реинжиниринг, визуал, язык без потери силы',
  },
  {
    path: '/services/ugolovnaya-zashchita-biznesa',
    title: 'Уголовная защита бизнеса',
    shortDescription: 'Собственники и руководители: проверка, следствие, суд',
  },
]

export type ServiceCategoryDetail = {
  title: string
  intro?: string
  bullets: string[]
}

export const serviceCategoryDetails: Record<ServiceCategorySlug, ServiceCategoryDetail> = {
  'dogovory-i-sdelki': {
    title: 'Договоры и сделки',
    intro:
      'Подготовка, экспертиза и сопровождение договоров для бизнеса и частных клиентов. Грамотно оформим правовые отношения, минимизируем риски, защитим интересы.',
    bullets: [
      'Договор оказания услуг',
      'Договор подряда (выполнение работ)',
      'Договор поставки',
      'Оферта',
      'Рамочный договор на услуги / работы',
      'Трудовой договор',
      'Соглашение о неразглашении с работником / контрагентом (NDA)',
      'Агентский договор',
      'Договор аутстаффинга',
      'Договор Time and Material',
      'Договор по организации мероприятий',
      'Соглашение о расторжении договора',
      'Договор уступки права требования (цессия)',
      'Договор отчуждения исключительного права',
      'Договор авторского заказа',
      'Договор коммерческой концессии (франчайзинга)',
      'Абонентский договор',
      'Опционный договор',
    ],
  },
  'korporativnye-voprosy': {
    title: 'Корпоративные вопросы',
    bullets: [
      'Регистрация, структурирование, реорганизация, ликвидация бизнеса',
      'Регистрация ООО под ключ',
      'Регистрация АО под ключ',
      'Регистрация ИП под ключ',
      'Правовой аудит (due diligence)',
      'Оформление инвестиций',
      'Слияние и поглощение (M&A)',
      'Сделки с долями',
      'Корпоративные споры',
    ],
  },
  'predstavitelstvo': {
    title: 'Представительство',
    bullets: [
      'Досудебное урегулирование споров',
      'Арбитражные споры',
      'Споры в третейских судах',
      'Споры с государственными органами',
      'Споры в ФАС',
      'Споры в Суде по интеллектуальным правам',
      'Взыскание задолженности',
    ],
  },
  'intellektualnaya-sobstvennost': {
    title: 'Интеллектуальная собственность',
    bullets: [
      'Оформление прав на интеллектуальную собственность',
      'Разработка договоров в сфере ИС',
      'Регистрация товарного знака и патентование',
      'Защита коммерческой тайны',
      'Защита интеллектуальной собственности в интернете',
    ],
  },
  'zakupki-i-tendery': {
    title: 'Закупки и тендеры',
    bullets: ['Экспертиза контрактов', 'Обжалование результатов закупок', 'Жалоба в ФАС', 'Защита от включения в РНП'],
  },
  'bankrotstvo': {
    title: 'Банкротство',
    bullets: ['Банкротство физических лиц', 'Банкротство юридических лиц', 'Защита от субсидиарной ответственности'],
  },
  'ugolovnaya-zashchita-biznesa': {
    title: 'Уголовная защита бизнеса и собственников',
    intro:
      'Защита руководителей и владельцев бизнеса по экономическим и предпринимательским статьям.',
    bullets: [
      'Защита на стадии проверки и следствия',
      'Представительство в суде',
      'Минимизация рисков уголовного преследования',
    ],
  },
}

/** Классы Tailwind для сетки пунктов (без длинных одноколоночных списков) */
export const serviceBulletGridClass: Record<ServiceCategorySlug, string> = {
  /** 18 пунктов: 6×3 на lg+ */
  'dogovory-i-sdelki': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  /** 9 пунктов: 3×3 */
  'korporativnye-voprosy': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  /** 7 пунктов */
  'predstavitelstvo': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  /** 5 пунктов */
  'intellektualnaya-sobstvennost': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  /** 4 пункта: 2×2 */
  'zakupki-i-tendery': 'grid-cols-1 sm:grid-cols-2',
  /** 3 пункта в ряд */
  'bankrotstvo': 'grid-cols-1 sm:grid-cols-3',
  'ugolovnaya-zashchita-biznesa': 'grid-cols-1 sm:grid-cols-3',
}

export function isServiceCategorySlug(s: string): s is ServiceCategorySlug {
  return s in serviceCategoryDetails
}
