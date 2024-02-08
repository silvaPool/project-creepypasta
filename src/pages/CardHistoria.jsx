import { useEffect, useState } from 'react';
import cards from '../data/Cards';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';


// function filterCards(card) {
//     const data = cards?.find(item => item.titulo === card);


//     console.log(data);
//     console.log(card);

//     return data;
// }


function CardHistoria() {

    // const [stateData, setStateData] = useState({});
    // const { type } = useParams();


    // useEffect(() => {
    //     const dataFilter = filterCards(type);
    //     setStateData(dataFilter ?? {});

    // }, [cards, type]);

    return (
        <Box>
            <Typography>
                {cards[2].titulo}
            </Typography>
        </Box>
    )
}

export default CardHistoria;