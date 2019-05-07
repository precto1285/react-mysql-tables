import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    quotes: [],
    quote: {
      author: '',
      quote: 0
    }
  }

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes = _ => {
    fetch('http://localhost:4000/quotes')
      .then(response => response.json())
      .then(response => this.setState({ quotes: response.data }))
      .catch(err => console.error(err));
  }


  add_Quote = _ => {
    const { quote } = this.state;
    fetch(`http://localhost:4000/quotes/add?author=${quote.author}&quote=${quote.quote}`)
      .then(this.getQuotes)
      .catch(err => console.error(err))
  }

  renderQuote = ({ id, author }) => <div key={id}>{author}</div>

  render() {
    const { quotes } = this.state;
    return (
      <div className="App">
        {quotes.map(this.renderQuote)}
        <div>
          <input value={quote.author}
            onChange={e => this.setState({ quote: { ...quote, author: e.target.value } })} />
          <input value={product.price}
            onChange={e => this.setState({ quote: { ...quote, quote: e.target.value } })} />
          <button onClick={this.addQuote}>Add Quote</button>
        </div>

      </div>
    )
  }
};

export default App;
