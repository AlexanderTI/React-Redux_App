import React from 'react'
import {connect} from 'react-redux';
import { useTable } from 'react-table';

 class Table extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        console.log(fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        .then(data =>{return data.json()})
        .then(res => res))
    }

    render() {
        return null
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData: () => {
            dispatch({
                type: 'GET_DATA',
            })
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);