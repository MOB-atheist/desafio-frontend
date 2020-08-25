import React, { Component } from 'react'
import './styles.css'

export default class WeatherList extends Component {
    render() {
        return(
            <div className="WeatherList">
                <h2>Capitais</h2>
                <div className="side-tables">
                    <table>
                        <thead>
                            <tr>
                                <th>Min</th>
                                <th>Max</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>18°</td>
                                <td>27°</td>
                                <td>RIo de Janeiro</td>
                            </tr>
                            <tr>
                                <td>18°</td>
                                <td>27°</td>
                                <td>RIo de Janeiro</td>
                            </tr>
                            <tr>
                                <td>18°</td>
                                <td>27°</td>
                                <td>RIo de Janeiro</td>
                            </tr>
                            <tr>
                                <td>18°</td>
                                <td>27°</td>
                                <td>RIo de Janeiro</td>
                            </tr>
                            <tr>
                                <td>18°</td>
                                <td>27°</td>
                                <td>RIo de Janeiro</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>Min</th>
                                <th>Max</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>18°</td>
                                <td>27°</td>
                                <td>RIo de Janeiro</td>
                            </tr>
                            <tr>
                                <td>18°</td>
                                <td>27°</td>
                                <td>RIo de Janeiro</td>
                            </tr>
                            <tr>
                                <td>18°</td>
                                <td>27°</td>
                                <td>RIo de Janeiro</td>
                            </tr>
                            <tr>
                                <td>18°</td>
                                <td>27°</td>
                                <td>RIo de Janeiro</td>
                            </tr>
                            <tr>
                                <td>18°</td>
                                <td>27°</td>
                                <td>RIo de Janeiro</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}