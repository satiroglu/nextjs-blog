import { getAllNodes } from 'next-mdx/server'
import Link from 'next/link'

function BlogPage({ posts }) {
  return (
    <div className="site-container">
      {posts.map((post) => {
        return (
          <article key={post.url}>
            <h2>
              <Link href={post.url}>
                <a>{post.frontMatter.title}</a>
              </Link>
            </h2>
          </article>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes('post')
    }
  }
}

export default BlogPage
