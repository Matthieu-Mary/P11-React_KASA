import starImg from "../assets/images/star.svg"

type StarPropsType = {
    rate: string
}

export const Star: React.FC<StarPropsType> = ({rate}) => {
    const rateNum = parseInt(rate)
    console.log(typeof rateNum)
  return (
    <>
     <img className={rate} src={starImg} alt="star" />
    </>
  )
}
