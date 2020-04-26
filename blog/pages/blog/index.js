import Link from 'next/link'

export default () => (
  <div>
    <h3>This is our blog</h3>
    <ul>
      <li>
        <Link href="/blog/post/[id]" as="/blog/post/1">
          <h1>
            <a>BLOG Post 1</a>
          </h1>
        </Link>
      </li>
      <li>
        <Link href="/blog/post/[id]" as="/blog/post/2">
          <a>Post 2</a>
        </Link>
      </li>
    </ul>
    <a href="/">Home</a>
    <div>
      <img width={200} src={`${process.env.ASSET_PREFIX}/static/nextjs2.png`} />
    </div>
  </div>
)
