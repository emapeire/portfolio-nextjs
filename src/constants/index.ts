import { AVATAR, ABOUT, LINKS, CAREER, PROJECTS } from '@/data'
import type {
  AvatarProps,
  AboutProps,
  LinksProps,
  CareerProps,
  ProjectProps,
  TranslateProps
} from '@/types'

export const data = {
  avatar: AVATAR as AvatarProps,
  about: ABOUT as AboutProps,
  links: LINKS as LinksProps[],
  career: CAREER as CareerProps[],
  projects: PROJECTS as ProjectProps[]
}

export const getNavItems = (t: TranslateProps) => [
  {
    title: t('header.about.title'),
    label: t('header.about.label'),
    url: '/'
  },
  {
    title: t('header.career.title'),
    label: t('header.career.label'),
    url: '/career'
  },
  {
    title: t('header.projects.title'),
    label: t('header.projects.label'),
    url: '/projects'
  },
  {
    title: t('header.contact.title'),
    label: t('header.contact.label'),
    url: '/contact'
  }
]
