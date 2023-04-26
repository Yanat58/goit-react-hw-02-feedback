import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOption } from 'components/FeedbackOptions/FeedbackOption';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    console.log('option:', e.target.name);
    // const option = e.target.name;
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  render() {
    return (
      <div>
        {/* <Section title="Please leave feedback">
          <FeedbackOption options={this.state} onLeaveFeedback={this.handleIncrement} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section> */}

        <h1>Please leave feedback</h1>
        <button type="button" name="1" onClick={this.handleIncrement}>
          Good
        </button>
        <button type="button" name="2" onClick={this.handleIncrement}>
          Neutral
        </button>
        <button type="button" name="3" onClick={this.handleIncrement}>
          Bad
        </button>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral</li>
            <li>Bad</li>
            <li>Total</li>
            <li>Positive feedback</li>
          </ul>
        </div>
      </div>
    );
  }
}
