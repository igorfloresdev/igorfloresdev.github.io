const Hero = (props) => {
    return (
        <div className="hero w-96 h-96 p-16 rounded-2xl bg-base-300">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h4 className="text-2xl">
                        <i className={props.icon}></i>
                        <span className="pl-2">{props.title}</span></h4>
                    <p className="py-6">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;