import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count : 1
        }
    }

    handleKlik = () => {
        this.setState( { count : this.state.count + 1})
    }

    render() {
        return (
            <div>
                <h3>jumlah klik {this.state.count}</h3>
                <button onClick={this.handleKlik}>klik me</button>
            </div>
        )
    }
}

