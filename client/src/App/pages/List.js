import React, { Component } from 'react'

class List extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }
  renderList = (list) => (
    list.length ? 
      list.map((item, i) => (
        <div key={i}>
          {item}
        </div>
      )) 
    : <div><h3>No item found</h3></div>
  )
  render() {
    const { list } = this.state;
    return (
      <div>
        <h2>List o items</h2>
        {this.renderList(list)}
      </div>
    )
  }
}
export default List;