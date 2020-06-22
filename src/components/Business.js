import React from 'react'
import businesses from '../businesses.json'

import { Container, Paper, Chip } from '@material-ui/core'

const Business = (props) => {
    const id = Number(props.match.params.id);
    const carInfo = businesses[id - 1];
        return (
        <Container maxWidth="sm">
            <Paper>
                <h3>{carInfo.Name}</h3>
                <p>{carInfo.Description}</p>
                <Chip label={`${carInfo.Hours}`}></Chip>
                <p>{carInfo.Address}</p>
            </Paper>
            <div>{id === 1 && <iframe title="map" width="600" height="450" frameBorder="0" src="https://www.google.com/maps/embed/v1/search?q=Illuminate%20Coffee%20Bar%2C%20North%20FM%20620%2C%20Austin%2C%20TX%2C%20USA&key=AIzaSyCE-7zKtTbKyC60YTTcAbzWZZYwtw44c8o"></iframe>}</div>
            <div>{id === 2 && <p>Hello 2</p>}</div>
            <div>{id === 3 && <p>Hello 2</p>}</div>
            <div>{id === 4 && <p>Hello 2</p>}</div>
            <div>{id === 5 && <p>Hello 2</p>}</div>
        </Container>
        
        
        
    )
}

export default Business