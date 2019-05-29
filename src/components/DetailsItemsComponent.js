import React, { Component } from 'react'
import axios from 'axios'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

class DetailsItemsComponent extends Component {

  state = {
    name: '',
    price: '',
    description: '',
    image: ''
  }
  componentDidMount() {
    const url = `http://localhost:5000/api/items/${this.props.id}`;

    axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({
          name: data.author.name,
          price: data.items[0].price.value,
          description: data.items[0].description,
          picture: data.items[0].picture[0].url,
          sold_quantity: data.items.sold_quantity,
          permalink: data.items[0].permalink
        });
      })
  }

  handleClick = (url) => {
    window.location = url;
  }

  render() {
    return (
      <div className="product jumbotron">
        <div className="row">
          <div className="col-12 col-md-9">
            <img src={this.state.picture} alt="" className="img-fluid rounded mx-auto d-block" />
            <div className="px-3 py-3 pt-md-5 pb-md-4">
              <h5>Descripción del producto</h5>
              <p>{this.state.description}</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
          <div className="px-3 py-3 pb-md-4">
            <span>Nuevo - {this.state.sold_quantity || '0'} vendidos</span>
            <h4>{this.state.name}</h4>
            <h1>{formatter.format(this.state.price)}</h1>
            <br />
            <button className="btn btn-primary btn-block" onClick={()=>{this.handleClick(this.state.permalink)}}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsItemsComponent;