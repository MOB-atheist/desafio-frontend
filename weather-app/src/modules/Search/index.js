import React, { Component } from 'react'
import './styles.css'

export default class Search extends Component {
    render() {
        return(
            <div className="SearchModule">
                <input placeholder="Insira aqui o nome da sua cidade"/>
            </div>
        )
    }
}