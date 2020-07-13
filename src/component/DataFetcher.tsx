import React from 'react'
import {ArtistBoard} from './ArtistBoard'
import {MonthSelector} from './MonthSelector'
import {FieldsSelector} from './FieldsSelector'

export class DataFetcher extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            fields: ['artist'],
            monthNumber: (new Date()).getMonth() + 1
        }
    }

    fetchData() {
        console.log(this.state)
        const monthNumber = this.state.monthNumber
        const queryFieldsString = this.state.fields.join(',')
        console.warn(queryFieldsString)
        fetch('/groupBy/' + queryFieldsString + '/agg/count/filter/month=' + monthNumber + '/limit/200', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(r => r.json())
            .then(data => this.setState({data}))
    }

    onMonthSelect(monthNumber: number) {
        this.setState({monthNumber}, () => { this.fetchData() })
    }

    onFieldSelect(fieldName: string) {
        console.log('onFieldSelect', fieldName, {fields: [...this.state.fields, fieldName]})
        if (this.state.fields.indexOf(fieldName) === -1) {
            this.setState({fields: [...this.state.fields, fieldName]}, () => { this.fetchData() })
        } else {
            this.setState({fields: this.state.fields.filter((f: string) => f !== fieldName)}, () => { this.fetchData() })
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className='carrier'>
                <MonthSelector onMonthSelect={(monthNumber: number) => this.onMonthSelect(monthNumber)} currentMonth={this.state.monthNumber}/>
                <FieldsSelector onFieldSelect={(queryField: string) => this.onFieldSelect(queryField)} fields={this.state.fields}/>
                <ArtistBoard artists={this.state.data} monthNumber={this.state.monthNumber} />
            </div>
        )
    }
}
