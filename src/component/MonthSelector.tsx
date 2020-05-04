import React from 'react'

export class MonthSelector extends React.Component<any, any> {
    getMonthArray() {
        return Array.from(Array(12).keys()).map(a => a + 1)
    }

    render() {
        return (
            <div className='monthSelector'>
                {this.getMonthArray()
                    .map(monthNumber => <span className={`monthSelectorNumber ${this.props.currentMonth === monthNumber ? 'active' : ''}`}
                                              onClick={() => this.props.onMonthSelect(monthNumber)}>
                        {monthNumber}
                    </span>)}
            </div>
        )
    }
}
