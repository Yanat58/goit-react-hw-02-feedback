import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOption } from 'components/FeedbackOptions/FeedbackOption';
import { Statistics } from 'components/Statistics/Statistics';
import css from 'components/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let result = 0;

    if (this.countTotalFeedback() > 0) {
      result = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
    return `${result}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
