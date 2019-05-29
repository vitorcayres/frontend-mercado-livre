import React, { Component } from 'react'
import DetailsItemsComponent from '../components/DetailsItemsComponent';

class DetailsItems extends Component {
  render() {

    const obj = this.props.match.params;

    return (
      <div className="details-items">
      <main role="main" className="container">        
        <DetailsItemsComponent id={obj.id}/>
        </main>
      </div>
    );
  }
}

export default DetailsItems;