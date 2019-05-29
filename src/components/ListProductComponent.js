import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

class ListProductComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/items?q=` + this.props.search)
    .then(res => {
      const items = res.data;
      this.setState({ items });
    });
  }

  render() {
    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {this.state.items.map(item =>
          <Link key={item.id} to={'/items/'+ item.id} style={{ textDecoration: 'none', color: 'black' }}>
            <li className="list-group-item">
              <div className="row listproduct">
                <div className="col-12 col-md-3">
                  <img src={item.items[0].picture} alt="" className="img-fluid rounded mx-auto d-block img-product" />
                </div>
                <div className="col-12 col-md-6">
                  <div className="product-desc">
                    <h5>{item.author.name}</h5>
                    <span>{formatter.format(item.items[0].price)}</span>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  {item.address}
                </div>
              </div>
            </li>
            </Link>
          )}
        </ul>
      </div>
    );
  }
}

export default ListProductComponent;