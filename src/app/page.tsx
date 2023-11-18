import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Tile from '@/components/Tile'

export default function Home() {
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
        Hello, world!
      </main>
      <Footer />
    </>
  )
}
