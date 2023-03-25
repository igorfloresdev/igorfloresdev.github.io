const Avatar = (props) => {
    return (
        <div className="avatar">
            <div className="max-w-xs rounded-full">
                <img src={props.src} alt={props.alt} />
            </div>
        </div>
    )
}

export default Avatar