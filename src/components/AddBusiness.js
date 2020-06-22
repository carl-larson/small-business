import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Paper,
    // Link
} from '@material-ui/core'
// import { Redirect } from 'react-router-dom'

class AddBusiness extends Component {
    state = {
        Name: '',
        Description: '',
        Hours: '',
        Address: ''
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
        payload.id = this.props.businesses.length + 1
        // delete payload.open
        console.log("THE BUSINESS", payload)
        // add this.props.addCar function here
        this.props.addBusiness(payload)
        // also add this.setState to close the dialog
        // this.setState({open: false})
        const resetState = {
            Name: '',
            Description: '',
            Hours: '',
            Address: ''}
        this.setState(resetState)
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevState.open !== this.state.open) {
    //         this.setState({
    //             name: '',
    //             description: '',
    //             hours: '',
    //             address: ''
    //         })
    //     }
    // }

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
                                id="Name" 
                                placeholder="Name" 
                                value={this.state.Name} 
                                onChange={this.handleTextChange}
                                required />
                            <TextField 
                                id="Description" 
                                placeholder="Describe the business" 
                                value={this.state.Description} 
                                onChange={this.handleTextChange}
                                required />
                            <TextField 
                                id="Hours" 
                                placeholder="Hours" 
                                value={this.state.Hours} 
                                onChange={this.handleTextChange}
                                required />
                            <TextField 
                                id="Address" 
                                placeholder="Address" 
                                value={this.state.Address} 
                                onChange={this.handleTextChange}
                                required />
                            <br />
                            <Button variant="contained" color="primary" type="submit">Submit</Button>
                        </form>
                        {/* <Link href="/" style={{textDecoration: 'none', color: 'black'}} >Back</Link> */}
                    </Paper>
                </div>
            </Fragment>
        )
    }
}

export default AddBusiness