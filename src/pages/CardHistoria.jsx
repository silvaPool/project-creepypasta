import { useEffect, useState, useParams } from 'react';
import cards from '../data/Cards';


function filterCards(card) {
    const data = cards?.find(item => item.titulo === card);

    return data;
}


function CardHistoria() {

    const [stateData, setStateData] = useState({});
    const { type } = useParams();


    useEffect(() => {
        const dataFilter = filterCards(type);
        setStateData(dataFilter ?? {});

    }, [cards, type]);

    return (
        <div>ddd</div>
    )
}

export default CardHistoria;