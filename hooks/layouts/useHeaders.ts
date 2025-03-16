type HeaderNavItem = {
  name: string
  href: string
}

export const useHeaders = () => {
  const headerNavItems: HeaderNavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Profile', href: '/profile' },
    { name: 'Skils', href: '/skils' },
    { name: 'Works', href: '/works' },
    { name: 'Contact', href: '/contact' },
  ]

  return { headerNavItems }
}
