import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Paper
} from '@material-ui/core'

class AddBusiness extends Component {
    state = {
        // open: false,
        name: '',
        mpg: '',
        cylinders: '',
        horsepower: '',
    }

    // toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        // payload.id = this.props.carTotal + 1
        // delete payload.open
        console.log("THE BUSINESS", payload)
        // add this.props.addCar function here
        this.props.AddBusiness(payload)
        // also add this.setState to close the dialog
        // this.setState({open: false})
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                description: '',
                hours: '',
                address: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Add Business</h1>
                    <h3>Please enter information about the business you'd like to add.</h3>
                    <Paper>
                        <form 
                            onSubmit={this.handleSubmit}
                            style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                            <TextField 
                                id="name" 
                                placeholder="Name" 
                                value={this.state.name} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="description" 
                                placeholder="Describe the business" 
                                value={this.state.description} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="hours" 
                                placeholder="Hours" 
                                value={this.state.hours} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="address" 
                                placeholder="Address" 
                                value={this.state.address} 
                                onChange={this.handleTextChange} 
                                required />
                            <br />
                            <Button variant="contained" color="primary" type="submit">Submit</Button>
                        </form>
                    </Paper>
                </div>
            </Fragment>
        )
    }
}

export default AddBusiness