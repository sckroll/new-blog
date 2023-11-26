import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full h-16 flex justify-center">
      <div className="w-[1200px] py-4 flex justify-between items-center">
        <div className="text-[24px]">Sckroll™</div>
        <nav className="flex gap-4">
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/etc">Etc.</Link>
        </nav>
      </div>
    </header>
  )
}
