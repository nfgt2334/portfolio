'use client'

import Link from 'next/link'
import { Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MdHome } from 'react-icons/md'

import styles from './HeaderPage.module.scss'

import { useHeaders } from '@/hooks/layouts/useHeaders'

export default function HeaderPage() {
  const [opened, { open, close }] = useDisclosure(false)

  const { headerNavItems } = useHeaders()

  return (
    <header>
      <nav>
        <div className={styles.HeaderNavDiv}>
          <Link href="/">
            <MdHome size={32} />
          </Link>
          <div className={styles.HeaderNavLinkDiv}>
            {headerNavItems.map((item) =>
              item.name === 'Home' ? null : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.HeaderNavLink}
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
        </div>

        {/* レスポンシブ */}
        <div className={styles.HamburgerDiv}>
          <Burger
            lineSize={2}
            opened={opened}
            onClick={open}
            aria-label="Toggle navigation"
          />
        </div>
        <Drawer opened={opened} onClose={close} position="top">
          <div className={styles.DrawerLinkDiv}>
            {headerNavItems.map((item) =>
              item.name === 'Home' ? (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={close}
                  className={styles.DrawerLink}
                >
                  <MdHome size={32} />
                </Link>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={close}
                  className={styles.DrawerLink}
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
        </Drawer>
      </nav>
    </header>
  )
}
