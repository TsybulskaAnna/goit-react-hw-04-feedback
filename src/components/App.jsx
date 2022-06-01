import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

//import s from './App.module.scss';

const options = ['good', 'neutral', 'bad'];

export const App = () => {
  const [variables, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = variables;

  const total = good + neutral + bad;

  const positiveFeedback = Number(((good / total) * 100).toFixed());

  const onLeaveFeedback = propertyName => {
    setOptions(prevState => {
      console.log(prevState);
      return {
        ...variables,
        [propertyName]: prevState[propertyName] + 1,
      };
    });
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {!total && <Notification mess="There is no positive feedback" />}
        {positiveFeedback > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    </>
  );
};

 /* class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  

  onLeaveFeedback = scoreName => {
    this.setState(prevState => {
      return {
        [scoreName]: prevState[scoreName] + 1,
      };
    });
  }; 

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return ((good / this.countTotalFeedback()) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { onLeaveFeedback } = this;
    return (
      <div className={s.container}> 
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification mess="No feedback yet" />
          )}
        </Section>
      </div>
    );
  }
} */


export default App;
