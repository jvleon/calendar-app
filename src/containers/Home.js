import React, { Component } from 'react'
import { CalendarGrid } from '../components'

class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <CalendarGrid />
      </div>
    )
  }
}

export default Home