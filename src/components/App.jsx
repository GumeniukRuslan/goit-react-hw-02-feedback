import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = ({ target }) => this.setState({ [target.name]: this.state[target.name] + 1 });
  countTotalFeedback = ({good, neutral, bad}) => good + neutral + bad;  
  countPositiveFeedbackPercentage = ({good, neutral, bad}) => `${(good / (good + neutral + bad) * 100).toFixed(0)}%`;
  
  render() {
    return (
    <div className="container">
      <Section primeHeader='true' title='Please leave feedback'>
        <FeedbackOptions options={[...Object.keys(this.state)]} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
      <Section title='Statistics'>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback(this.state)} positivePercentage={this.countPositiveFeedbackPercentage(this.state)}/>
      </Section>
    </div>
  );
  }
};
