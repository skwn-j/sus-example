//frontend/src/app.js
import React, { Component } from 'react';

//
import axios from 'axios';

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import QuestionToggle from './components/questionComponent';

const questions = [
    '1. I think that I would like to use this system frequently',
    '2. I found this system unnecessarily complex',
    '3. I thought the system was easy to use',
    '4. I think I would need the support of a technical person to be able to use this system',
    '5. I found the various functions in this system were well integrated',
    '6. I thought there was too much inconsistency in this system',
    '7. I would imagine that most people would learn to use this system very quickly',
    '8. I found the system very cumbersome to use',
    '9. I felt very confident using the system',
    '10. I needed to learn a lot of things before I could get goging with this system'
];


class App extends Component {
    constructor(props) {
        super(props);

        this.scores = [];
        for (let i = 0; i < 10; i++) {
            this.scores.push(undefined);
        }


        this.state = {
            posts: []
        };

    }

    setScore = (score, i) => {
        this.scores[+i] = +score;
        console.log(this.scores);
    }

    submit = () => {
        if (this.scores.includes(undefined)) {
            // Error
            // Please answer every question
            // TODO: Popover
            console.log('failed');
        }
        else {
            // Success
            // Post to python serer
            try {
                const res = fetch('http://127.0.0.1:8000/api/',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            content: JSON.stringify(this.scores)
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                ).then(response => response.json())
            } catch (e) {
                console.log(e);
            }
            console.log('saved');

        }
    }

    showResult = () => {

    }


    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs='6'> <h2> Questions </h2> </Col>
                        <Col xs lg='1'> {'Strogly\n Disagree'} </Col>
                        <Col xs lg='2'> </Col>
                        <Col xs lg='1'> {'Strogly\n Agree'} </Col>
                    </Row>
                    {
                        questions.map((d, i) => {
                            return (
                                <QuestionToggle key={i} index={i} question={d} setScore={this.setScore}></QuestionToggle>
                            )
                        })
                    }
                    <Row>
                        <Col xs='2' >
                            <Button type='submit' onClick={this.submit} block> submit </Button>
                        </Col>
                        <Col xs='2'>
                            <Button onClick={this.showResult} block> Show result </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
