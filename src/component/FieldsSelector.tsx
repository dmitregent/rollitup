import React from 'react'

export class FieldsSelector extends React.Component<any, any> {
    getQueryFieldNames() {
        return ['artist', 'name', 'album']
    }

    render() {
        return (
            <div className='queryFieldsSelector'>
                {this.getQueryFieldNames()
                    .map(queryFieldName => <span className={`queryFieldSelectorName ${this.props.fields.indexOf(queryFieldName) !== -1 ? 'selected' : ''}`}
                                              onClick={() => this.props.onFieldSelect(queryFieldName)}>
                        {queryFieldName}
                    </span>)}
            </div>
        )
    }
}
