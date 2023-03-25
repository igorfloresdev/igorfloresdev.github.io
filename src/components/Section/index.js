const Section = (props) => {
    return (
        <div id={props.id} className={`pb-48 pt-10 ${props.className}`}>
            <h3 className="uppercase text-center text-3xl pb-16 tracking-widest">{props.title}</h3>
            {props.children}
        </div>
    )
}

export default Section;