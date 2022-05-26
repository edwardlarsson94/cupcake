const CardsCakes = ({taste,colour,description,price,img})=>{
    return <div className="card">
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <img src={img} alt={taste}/>
                </div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <div className="t5 s-mb-2 s-center">{colour}</div>
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src={img} alt={taste}/>
                        </div>
                    </div><span className="small">{description}</span>
                    </div>
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="/">{price}</a>
                </div>
                </div>
            </div>

}
export default CardsCakes;