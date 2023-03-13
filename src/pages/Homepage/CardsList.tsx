import { Card } from "./Card"
import data from "../../data/data.json"

export default function CardsList() {
  return (
    <>
        {data.map((card:any) => (
            <Card key={card.id} id={card.id} title={card.title} cover={card.cover} />
        ))}
    </>
  )
}
