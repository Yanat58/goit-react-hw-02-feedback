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

  

  handleClick = e => {
    const option = e.target.name;
    if(option){
      this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
    }
    
  };
countTotalFeedback=()=>{
   return this.state.good + this.state.neutral + this.state.bad;
     
  }

  countPositiveFeedbackPercentage(){
    console.log(this.state.good*100/this.countTotalFeedback())
  }
  render() {
    const options= Object.keys(this.state) ;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOption options={options} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={()=>{this.countTotalFeedback()}}
            positivePercentage={this.state.positivePercentage}
          />
        </Section>

        {/* <h1>Please leave feedback</h1>
        <div className="boxBtn">
      {this.props.options.map((option, onLeaveFeedback) => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div> */}
        {/* <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral</li>
            <li>Bad</li>
            <li>Total: {this.countTotalFeedback}</li>
            <li>Positive feedback</li>
          </ul>
        </div> */}
      </div>
    );
  }
}
