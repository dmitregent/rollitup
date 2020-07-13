import React from 'react'

interface ArtistBoardParams {
    artists: any[][]
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

    getItem(artistCount: any[]) {
        return (
            <tr>
                {artistCount.map(columnValue => <td>{columnValue}</td>)}
            </tr>
        )
    }

    getItems(artists: any[][]) {
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
