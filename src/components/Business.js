import React from 'react'
import businesses from '../businesses.json'

import { Container, Paper, Chip } from '@material-ui/core'

const Business = (props) => {
    const id = props.match.params.id;
    const carInfo = businesses[id - 1];
    return (
        <Container maxWidth="sm">
            <Paper>
                <h1>A specific car: {id}</h1>
                <h3>{carInfo.Name}</h3>
                {
                    Object.keys(carInfo).map((key) => {
                        return <Chip label={`${key}: ${carInfo[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
        
        
        
    )
}

export default Business