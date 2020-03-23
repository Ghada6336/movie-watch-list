
import React from 'react'
import { connect } from 'react-redux'
import { updateItem } from '../actions'


import Doneitems from './Doneitems';
const DoneList = ({ items, updateItem }) => (
    <ul className={'item-list'}>
        {items.map(item => (
            <Doneitems key={ item.id } {...item} onClick={() => updateItem(item.id)}/>
        ))}

    </ul>
)

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    updateItem: id => dispatch(updateItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DoneList)