import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Tile from '@/components/Tile'
import { getSortedPostsData } from '@/utils/posts'

export async function getData() {
  const posts = getSortedPostsData()
  return posts
}

export default async function Home() {
  const posts = await getData()

  return (
    <>
      <Header />
      <main className="py-4 flex justify-center">
        {/* <div className="w-[1200px] grid grid-cols-12 gap-4 grid-flow-row-dense">
          <Tile row={1} col={1} />
          <Tile row={2} col={2} />
          <Tile row={2} col={4} />
          <Tile row={2} col={6} />
          <Tile row={3} col={3} />
          <Tile row={3} col={4} />
          <Tile row={3} col={6} />
          <Tile row={4} col={4} />
          <Tile row={4} col={6} />
        </div> */}
        {/* Hello, world! */}
        {posts.map(post => (
          <div key={post.slug}>
            {post.slug} {post.title} {post.date}
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}
