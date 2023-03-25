const Card = (props) => {
    console.log(props.github)
    return (
        <div className="card w-96 bg-base-300 shadow-xl mb-8">
            {props.src !== undefined ?
                <figure><img src={props.src} alt={props.alt} /></figure> : ''
            }
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.text}</p>
                <div className="card-actions justify-end py-4">
                    {props.github !== undefined ?
                        <button className="btn btn-ghost">
                            <a target="_blank" rel="noreferrer" href={props.github}><i class="fa-brands fa-github fa-2xl"></i></a>
                        </button> : ''}
                    {props.button !== undefined ? <button className="btn btn-primary"><a target="_blank" rel="noreferrer" href={props.button.href}>{props.button.text}</a></button> : ''
                    }
                </div>
                <div className="card-actions justify-end">
                    {props.badges !== undefined ? props.badges.map(badge => <div key={badge.text} className="badge badge-outline">{badge.text}</div>)
                        : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;