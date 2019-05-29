import React, { Component}  from 'react'
import search from '../assets/images/search.png'

class SearchFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location = '/items?search=' + this.state.value; 
  }

  render() {
    return (
      <form className="form-search" onSubmit={this.handleSubmit}>
        <div className="input-group my-md-2">
            <input type="text" value={this.state.value} onChange={this.handleChange} name="search" className="form-control" placeholder="Nunca dejes de buscar" required={true}/>
            <div className="input-group-append">
            <button className="btn btn-submit" type="submit">
                <img src={search} alt="search" />
            </button>
            </div>
        </div>
      </form>
    );
  }
}

export default SearchFormComponent;