import Link from "next/link"


export default function Home() {
  let name = 'Gorani'
  return (
    <div>
      <h4 className="title">고라니 후레시</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}