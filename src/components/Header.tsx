export default function Header() {
  return (
    <header className="w-full h-16 flex justify-center">
      <div className="w-[1200px] py-4 flex justify-between items-center">
        <div className="text-[24px]">Sckroll™</div>
        <nav className="flex gap-4">
          <div>About</div>
          <div>Posts</div>
          <div>Portfolio</div>
          <div>Etc.</div>
        </nav>
      </div>
    </header>
  )
}
