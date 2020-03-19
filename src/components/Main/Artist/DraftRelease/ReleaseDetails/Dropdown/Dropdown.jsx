import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class DropdownSelection extends Component {
  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup 
          type="radio" 
          defaultValue={1} 
          name="releaseType"
        >
          <ToggleButton 
            name="releaseType" 
            onClick={this.props.handleInput}
            value={"Single"}
          >
            Single
          </ToggleButton>
          <ToggleButton 
            name="releaseType" 
            onClick={this.props.handleInput}
            value={"EP"}
          >
            EP
          </ToggleButton>
          <ToggleButton 
            name="releaseType" 
            onClick={this.props.handleInput}
            value={"Album"}
          >
            Album
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}

export default DropdownSelection;
