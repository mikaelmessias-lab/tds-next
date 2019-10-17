class Prices extends React.Component {
  state = {
    currency: 'BRL'
  }

  render() {
    let properties;

    if(this.state.currency === 'BRL') {
      properties = this.props.bpi.BRL;
    } else if(this.state.currency === 'USD') {
      properties = this.props.bpi.USD;
    }

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {properties.description}: <span className="badge badge-primary">{properties.code}</span> <strong>{properties.rate}</strong>
          </li>
        </ul>

        <br />

        <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
        </select>

      </div>
    );
  }
}

export default Prices;