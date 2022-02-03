import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-6 ">
      <nav className="space-x-6">
        <Link href="/">
          <a>Anasayfa</a>
        </Link>
        <Link href="/hakkimda">
          <a>Hakkımda</a>
        </Link>
        <Link href="/blog">
          <a>Yazılar</a>
        </Link>
      </nav>
    </header>
  )
}
