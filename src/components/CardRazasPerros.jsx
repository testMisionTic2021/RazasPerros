function CardRazasPerros ({nombreRaza, imagen}) {
    return (
        <li className="breedCard backGroundBlue">
                    <div className="contenedorImagen">
                        <img src= {imagen} alt={nombreRaza}/>
                    </div>
                    <span className="breedTittle" >{nombreRaza}</span> 
                </li>

    )
}

export default CardRazasPerros;