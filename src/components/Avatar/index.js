const Avatar = (props) => {
    return (
        <div className="avatar">
            <div className="w-40 rounded-full">
                <img src={props.src} alt={props.alt} />
            </div>
        </div>
    )
}

export default Avatar