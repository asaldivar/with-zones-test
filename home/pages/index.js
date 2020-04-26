import Link from 'next/link'
import dynamic from 'next/dynamic'

const Header = dynamic(import('../components/Header'))

export default () => (
  <div>
    <Header />
    <p>CHANGE CHANGE CHANGE</p>
    <div>
      <a href="/blog">Blog</a>
    </div>
    <div>
      <Link href="/about">
        <a>About us</a>
      </Link>
    </div>
    <img width={200} src="/static/nextjs.png" />
  </div>
)
