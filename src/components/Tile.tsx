import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type TileProps = {
  row: 1 | 2 | 3 | 4
  col: 1 | 2 | 3 | 4 | 6
}

export default function Tile({ row, col }: TileProps) {
  const tileGridClass = useMemo(() => {
    if (row === 1 && col === 1) {
      return 'row-span-1 col-span-1 aspect-[1/1] rounded-[16px] text-[16px]'
    } else if (row === 2 && col === 2) {
      return 'row-span-2 col-span-2 aspect-[2/2] rounded-[20px] text-[20px]'
    } else if (row === 2 && col === 4) {
      return 'row-span-2 col-span-4 aspect-[4/2] rounded-[20px] text-[20px]'
    } else if (row === 2 && col === 6) {
      return 'row-span-2 col-span-6 aspect-[6/2] rounded-[20px] text-[20px]'
    } else if (row === 3 && col === 3) {
      return 'row-span-3 col-span-3 aspect-[3/3] rounded-[24px] text-[24px]'
    } else if (row === 3 && col === 4) {
      return 'row-span-3 col-span-4 aspect-[4/3] rounded-[24px] text-[24px]'
    } else if (row === 3 && col === 6) {
      return 'row-span-3 col-span-6 aspect-[6/3] rounded-[24px] text-[24px]'
    } else if (row === 4 && col === 4) {
      return 'row-span-4 col-span-4 aspect-[4/4] rounded-[24px] text-[24px]'
    } else if (row === 4 && col === 6) {
      return 'row-span-4 col-span-6 aspect-[6/4] rounded-[24px] text-[24px]'
    } else {
      return ''
    }
  }, [row, col])

  return (
    <div className={twMerge('bg-slate-400 w-full h-full p-6', tileGridClass)}>
      {row}x{col}
    </div>
  )
}
