import Banner from "./BannerHome";
import CardsList from "./CardsList";


export default function Homepage() {

  return (
    <main className="home">
      <Banner />
      <section className="cards-container">
       <CardsList />
      </section>
    </main>
  );
}
