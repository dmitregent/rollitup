import React from 'react';
import {Counter} from '../model/Counter'

interface ArtistBoardParams {
    artists: Counter[]
    monthNumber: number
}

export class ArtistBoard extends React.Component<ArtistBoardParams, any>{
    getMonthName(monthNumber: number) {
        const months = [
            'январь',
            'февраль',
            'март',
            'апрель',
            'май',
            'июнь',
            'июль',
            'август',
            'сентябрь',
            'октябрь',
            'ноябрь',
            'декабрь'
        ]
        return months[monthNumber - 1]
    }

    getItem(artistCount: Counter) {
        return (
            <tr>
                <td>{artistCount.name}</td>
                <td>{artistCount.count}</td>
            </tr>
        )
    }

    getItems(artists: Counter[]) {
        return artists.map(this.getItem)
    }

    render() {
        return (
            <div className='artistBoard'>
                <div className='currentMonth'>{this.getMonthName(this.props.monthNumber)}</div>
                <table>
                    <tbody>
                    {this.getItems(this.props.artists)}
                    </tbody>
                </table>
            </div>
        );
    }
}
