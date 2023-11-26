import { readFileSync, readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

type Post = {
  slug: string
  [key: string]: string
}

const postDirectory = path.join(process.cwd(), 'posts')

export const getSortedPostsData = () => {
  const filenames = readdirSync(postDirectory)
  const allPostsData: Post[] = filenames.map(filename => {
    const slug = filename.replace(/\.md$/, '')

    const fullPath = path.join(postDirectory, filename)
    const contents = readFileSync(fullPath, 'utf8')

    const matterResult = matter(contents)

    return {
      slug,
      ...matterResult.data,
    }
  })

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1
    else if (a > b) return -1
    else return 0
  })
}
