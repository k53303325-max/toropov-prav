/** Направления услуг: карточки, меню и контент подстраниц */
export type ServiceCategorySlug =
  | 'dogovory-i-sdelki'
  | 'korporativnye-voprosy'
  | 'predstavitelstvo'
  | 'intellektualnaya-sobstvennost'
  | 'zakupki-i-tendery'
  | 'bankrotstvo'
  | 'ugolovnaya-zashchita-biznesa'

export type ServiceTask = {
  slug: string
  title: string
}

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
  tasks: ServiceTask[]
}

export const serviceCategoryDetails: Record<ServiceCategorySlug, ServiceCategoryDetail> = {
  'dogovory-i-sdelki': {
    title: 'Договоры и сделки',
    intro:
      'Подготовка, экспертиза и сопровождение договоров для бизнеса и частных клиентов. Грамотно оформим правовые отношения, минимизируем риски, защитим интересы.',
    tasks: [
      { slug: 'dogovor-okazaniya-uslug', title: 'Договор оказания услуг' },
      { slug: 'dogovor-podryada', title: 'Договор подряда (выполнение работ)' },
      { slug: 'dogovor-postavki', title: 'Договор поставки' },
      { slug: 'oferta', title: 'Оферта' },
      { slug: 'ramochnyj-dogovor', title: 'Рамочный договор на услуги / работы' },
      { slug: 'trudovoj-dogovor', title: 'Трудовой договор' },
      { slug: 'soglashenie-nda', title: 'Соглашение о неразглашении с работником / контрагентом (NDA)' },
      { slug: 'agentskij-dogovor', title: 'Агентский договор' },
      { slug: 'dogovor-autstaffinga', title: 'Договор аутстаффинга' },
      { slug: 'dogovor-time-and-material', title: 'Договор Time and Material' },
      { slug: 'dogovor-meropriyatij', title: 'Договор по организации мероприятий' },
      { slug: 'soglashenie-o-rastorzhenii', title: 'Соглашение о расторжении договора' },
      { slug: 'dogovor-cessii', title: 'Договор уступки права требования (цессия)' },
      { slug: 'otchuzhdenie-isklyuchitelnogo-prava', title: 'Договор отчуждения исключительного права' },
      { slug: 'dogovor-avtorskogo-zakaza', title: 'Договор авторского заказа' },
      { slug: 'dogovor-franchajzinga', title: 'Договор коммерческой концессии (франчайзинга)' },
      { slug: 'abonentskij-dogovor', title: 'Абонентский договор' },
      { slug: 'optsionnyj-dogovor', title: 'Опционный договор' },
    ],
  },
  'korporativnye-voprosy': {
    title: 'Корпоративные вопросы',
    tasks: [
      { slug: 'registraciya-struktura-likvidaciya', title: 'Регистрация, структурирование, реорганизация, ликвидация бизнеса' },
      { slug: 'registraciya-ooo', title: 'Регистрация ООО под ключ' },
      { slug: 'registraciya-ao', title: 'Регистрация АО под ключ' },
      { slug: 'registraciya-ip', title: 'Регистрация ИП под ключ' },
      { slug: 'due-diligence', title: 'Правовой аудит (due diligence)' },
      { slug: 'oformlenie-investicij', title: 'Оформление инвестиций' },
      { slug: 'sliyanie-pogloshchenie', title: 'Слияние и поглощение (M&A)' },
      { slug: 'sdelki-s-dolyami', title: 'Сделки с долями' },
      { slug: 'korporativnye-spory', title: 'Корпоративные споры' },
    ],
  },
  'predstavitelstvo': {
    title: 'Представительство',
    tasks: [
      { slug: 'dosudebnoe-uregulirovanie', title: 'Досудебное урегулирование споров' },
      { slug: 'arbitrazhnye-spory', title: 'Арбитражные споры' },
      { slug: 'tretejskij-sud', title: 'Споры в третейских судах' },
      { slug: 'spory-gosorgany', title: 'Споры с государственными органами' },
      { slug: 'spory-fas', title: 'Споры в ФАС' },
      { slug: 'spory-sip', title: 'Споры в Суде по интеллектуальным правам' },
      { slug: 'vzyskanie-zadolzhennosti', title: 'Взыскание задолженности' },
    ],
  },
  'intellektualnaya-sobstvennost': {
    title: 'Интеллектуальная собственность',
    tasks: [
      { slug: 'oformlenie-prav-is', title: 'Оформление прав на интеллектуальную собственность' },
      { slug: 'dogovory-v-sfere-is', title: 'Разработка договоров в сфере ИС' },
      { slug: 'tm-patenty', title: 'Регистрация товарного знака и патентование' },
      { slug: 'kommercheskaya-tajna', title: 'Защита коммерческой тайны' },
      { slug: 'zashchita-is-internet', title: 'Защита интеллектуальной собственности в интернете' },
    ],
  },
  'zakupki-i-tendery': {
    title: 'Закупки и тендеры',
    tasks: [
      { slug: 'ekspertiza-kontraktov', title: 'Экспертиза контрактов' },
      { slug: 'obzhalovanie-zakupok', title: 'Обжалование результатов закупок' },
      { slug: 'zhaloba-fas', title: 'Жалоба в ФАС' },
      { slug: 'zashchita-rnp', title: 'Защита от включения в РНП' },
    ],
  },
  'bankrotstvo': {
    title: 'Банкротство',
    tasks: [
      { slug: 'bankrotstvo-fizlic', title: 'Банкротство физических лиц' },
      { slug: 'bankrotstvo-yurlic', title: 'Банкротство юридических лиц' },
      { slug: 'subsidarnaya-otvetstvennost', title: 'Защита от субсидиарной ответственности' },
    ],
  },
  'ugolovnaya-zashchita-biznesa': {
    title: 'Уголовная защита бизнеса и собственников',
    intro:
      'Защита руководителей и владельцев бизнеса по экономическим и предпринимательским статьям.',
    tasks: [
      { slug: 'zashchita-proverka-sledstvie', title: 'Защита на стадии проверки и следствия' },
      { slug: 'predstavitelstvo-sud', title: 'Представительство в суде' },
      { slug: 'minimizaciya-riskov', title: 'Минимизация рисков уголовного преследования' },
    ],
  },
}

export function taskPath(categorySlug: ServiceCategorySlug, taskSlug: string) {
  return `/services/${categorySlug}/${taskSlug}`
}

export function findTask(category: ServiceCategorySlug, taskSlug: string): ServiceTask | undefined {
  return serviceCategoryDetails[category].tasks.find((t) => t.slug === taskSlug)
}

export function isServiceCategorySlug(s: string): s is ServiceCategorySlug {
  return s in serviceCategoryDetails
}
