import { serviceNavItems } from './serviceCategories'

/** Направления для выпадающего меню «Услуги» (две колонки по 4 пункта) */
export type MegaMenuItem = {
  title: string
  description: string
  to: string
}

function toMegaMenuItem(item: (typeof serviceNavItems)[number]): MegaMenuItem {
  return {
    title: item.title,
    description: item.shortDescription,
    to: item.path,
  }
}

export const servicesMegaMenuColumns: [MegaMenuItem[], MegaMenuItem[]] = [
  serviceNavItems.slice(0, 4).map(toMegaMenuItem),
  serviceNavItems.slice(4, 8).map(toMegaMenuItem),
]
