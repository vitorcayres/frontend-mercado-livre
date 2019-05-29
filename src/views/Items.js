import React, { Component } from 'react'
import QueryString from 'query-string'

// Componentes
import ListProductComponent from '../components/ListProductComponent';

class Items extends Component {
  render() {

    const obj = QueryString.parse(this.props.location.search);

    return (
      <div className="items">
        <main role="main" className="container">
          <ListProductComponent search={obj.search}/>
        </main>
      </div>
    );
  }
}

export default Items;