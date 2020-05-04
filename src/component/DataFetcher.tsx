import React from 'react'
import {ArtistBoard} from './ArtistBoard'
import {MonthSelector} from './MonthSelector'

export class DataFetcher extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            monthNumber: (new Date()).getMonth() + 1
        }
    }

    fetchData(monthNumber: number) {
        fetch('/api/artist/byMonth/' + monthNumber, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(r => r.json())
            .then(data => this.setState({data}))
    }

    onMonthSelect(monthNumber: number) {
        this.fetchData(monthNumber)
        this.setState({monthNumber})
    }

    componentDidMount() {
        this.fetchData(this.state.monthNumber)
    }

    render() {
        return (
            <div className='carrier'>
                <MonthSelector onMonthSelect={(monthNumber: number) => this.onMonthSelect(monthNumber)} currentMonth={this.state.monthNumber}/>
                <ArtistBoard artists={this.state.data} monthNumber={this.state.monthNumber} />
            </div>
        )
    }
}
