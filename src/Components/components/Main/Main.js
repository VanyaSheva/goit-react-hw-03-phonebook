import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

export default class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  good = () => {
    this.setState((state) => ({
      good: state.good + 1,
    }));
  };
  neutral = () => {
    this.setState((state) => ({
      neutral: state.neutral + 1,
    }));
  };
  bad = () => {
    this.setState((state) => ({
      bad: state.bad + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    return (100 / this.countTotalFeedback()) * this.state.good;
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
    return total;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.good}
            neutral={this.neutral}
            bad={this.bad}
          />
        </Section>
        {this.countTotalFeedback() === 0 && (
          <Notification message="No feedback given"></Notification>
        )}
        {this.countTotalFeedback() > 0 && (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
              countTotalFeedback={this.countTotalFeedback}
            />
          </Section>
        )}
      </div>
    );
  }
}
