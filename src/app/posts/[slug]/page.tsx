export default function page({ params }: { params: { slug: string } }) {
  return <div>page: {params.slug}</div>
}
