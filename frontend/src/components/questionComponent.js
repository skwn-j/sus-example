import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


class QuestionToggle extends Component {
    constructor(props) {
        super(props);
        this.value = undefined;
        //this.handleClick = this.handleClick.bind(this);

        this.state = {
            index: this.props.index,
            value: undefined
        }
    }

    handleClick = (e) => {
        if (e.target.value != undefined) this.props.setScore(e.target.value, this.state.index);
    }
    render() {
        return (
            <Row>
                <Col xs={7}> {this.props.question} </Col>
                <Col xs={2.5}>
                    <ToggleButtonGroup type="radio" name="options" onClick={this.handleClick}>
                        <ToggleButton value={1}> 1</ToggleButton>
                        <ToggleButton value={2}> 2</ToggleButton>
                        <ToggleButton value={3}> 3</ToggleButton>
                        <ToggleButton value={4}> 4</ToggleButton>
                        <ToggleButton value={5}> 5</ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Row >
        );
    }
}

export default QuestionToggle;
