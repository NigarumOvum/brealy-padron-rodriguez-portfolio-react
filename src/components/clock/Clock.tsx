import React from 'react';
import ReactDOM from 'react-dom';
import Gradient from '../node_modules/gradient/index.js';

let rainbow = Gradient('#0071bc', '#662d91', '#e5005d', 10).toArray('rgbString');
let rainbow2 = Gradient('#ff0000', '#00FF04', 20).toArray('rgbString');
let rainbow3 = Gradient('#f5f5f5', '#edc613', 20).toArray('rgbString');

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
<GradientText data='Hi' gradient={[...colors]}>
</GradientText>        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default FormattedDate;