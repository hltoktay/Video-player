import React, { Component } from 'react';
import { Button, Overlay, Form, FormLabel, FormControl } from 'react-bootstrap';

import './css/style.css';

class Banana extends Component {
  constructor(...args) {
    super(...args);

    this.attachRef = target => this.setState({ target });
    this.state = {
      show: false,
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    const { show, target } = this.state;
    return (
      <>
        <Button className="note"
          variant="danger"
          ref={this.attachRef}
          onClick={() => this.setState({ show: !show })}
        >
          
        </Button>
        <Overlay target={target} show={show} placement="top">
          {({ placement, scheduleUpdate, arrowProps, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 5px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
            <Form onSubmit={this.handleSubmit}>
            <FormLabel>
              Name:
              <FormControl className="panel" placeholder="Write comment" type="text" value={this.state.value} onChange={this.handleChange} />
              {/* {this.state.value} */}
            </FormLabel>
            <Button value="Submit" variant="info"  type="submit">Add</Button>
            </Form>
             
            </div>
          )}
        </Overlay>
      </>
    );
  }
}

export default Banana;