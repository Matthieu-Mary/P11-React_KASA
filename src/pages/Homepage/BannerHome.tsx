import BannerHomeImg from "../../assets/images/banner_home.jpg"

export default function BannerHome() {
  return (
    <section className="banner-home">
      <img src={BannerHomeImg} alt="Falaises au bord de mer" />
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  )
}
