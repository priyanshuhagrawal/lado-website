export default function PrimaryButton({
    text,
    onClick
}){

    return(

        <button className="intro-btn" onClick={onClick}>
      {text}
    </button>

    )

}