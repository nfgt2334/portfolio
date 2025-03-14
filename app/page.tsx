import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { BsStack } from 'react-icons/bs'
import { IoPerson } from 'react-icons/io5'

export default function Home() {
  const links = [
    { name: 'Profile', href: '/profile', icon: IoPerson },
    { name: 'Skils', href: '/skils', icon: BsStack },
  ]

  return (
    <div className={styles.page}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div className={styles.ctas}>
        {links.map((link) => {
          const LinkIcon = link.icon
          return (
            <Link className={styles.primary} key={link.name} href={link.href}>
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
