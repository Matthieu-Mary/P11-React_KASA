type TagPropsType = {
    text: string;
}

export const Tag:React.FC<TagPropsType> = ({text}) => {
  return (
    <span className="tag">
        {text}
    </span>
  )
}
