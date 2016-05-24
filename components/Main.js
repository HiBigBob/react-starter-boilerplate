import React, {PropTypes, defaultProps, Component} from 'react'; 

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        model: props.model
    };
  }

  render() {
    return (
        <div>
            Hello world 
        </div>
    );
  }
}

Main.propTypes = { 
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired).isRequired
}

export default Main

