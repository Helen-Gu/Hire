import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from '../layout/Navbar'

export class EmployerInfo extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                employer info
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerInfo)
