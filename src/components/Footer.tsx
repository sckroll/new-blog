export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="w-[1200px] py-4 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="">Email</div>
          <div className="">GitHub</div>
        </div>
        <div className="">
          ⓒ {new Date().getFullYear()} Sckroll. Designed & developed by Sckroll.
        </div>
      </div>
    </footer>
  )
}
