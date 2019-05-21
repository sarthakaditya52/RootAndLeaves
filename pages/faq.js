import React from 'react';
import 'common/src/assets/css/faq.css';
import Sticky from 'react-stickynode';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class FAQs extends React.Component {
  state = { isHidden: true };
  toggleHidden = () =>
    this.setState(prevState => ({ isHidden: !prevState.isHidden }));
  render() {
    return (
      <div>
        <span onClick={this.toggleHidden}>
          <strong>{this.props.question}</strong>
        </span>
        {!this.state.isHidden && <p>{this.props.answer}</p>}
      </div>
    );
  }
}

let ques = (
  <h3 className="Faq-item-title Toggle-trigger js-toggle-trigger">
    <span>What is ZenHub?</span>
    <svg className="Faq-item-action" width="20" height="20" viewBox="0 0 25 25">
      <circle cx="12.5" cy="12.5" r="11.5" fill="none" stroke="#5e60ba" />
      <path
        className="stroke--v"
        d="M12.5 7 L 12.5 18"
        fill="none"
        stroke="#5e60ba"
      />
      <path
        className="stroke--h"
        d="M7 12.5 L 18 12.5"
        fill="none"
        stroke="#5e60ba"
      />
    </svg>
  </h3>
);

let ans = (
  <div className="Faq-item-content">
    ZenHub is browser extension that adds robust project management features
    directly into GitHub's UI, making centralized collaboration on GitHub
    faster, more visual, and less cluttered.\n With ZenHub installed, your team
    stays lean and agile: you can plan sprints, create epics, and visualize your
    workflow without leaving GitHub."
  </div>
);

let Stylez = {
  width: '100%',
  textAlign: 'center',
};

let Q1_y, Q2_y, Q3_y;
let Q1, Q2, Q3;

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: 5,
      Q1: true,
      Q2: false,
      Q3: false,
    };
  }

  myfunction() {
    const node = ReactDOM.findDOMNode(this);
    if (node) {
      let object1 = this.refs.tab1;
      let object2 = this.refs.tab2;
      let object3 = this.refs.tab3;
      Q1_y = object1.getBoundingClientRect().y * -1;
      Q2_y = object2.getBoundingClientRect().y * -1;
      Q3_y = object3.getBoundingClientRect().y * -1;
      console.log(Q1_y, Q2_y, Q3_y, window.pageYOffset);
    }
  }
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    this.myfunction();
    const currentScrollPos = window.pageYOffset;
    /*const Q1 = 541.625 > currentScrollPos;
        const Q2 = (541.625 < currentScrollPos)&&(1001.125 > currentScrollPos);
        const Q3 = 1001.125 < currentScrollPos;*/
    if (Q1_y < 0 || Q2_y < -80) {
      Q1 = true;
      Q2 = false;
      Q3 = false;
    }
    if (Q2_y > -80 && Q3_y < -80) {
      Q1 = false;
      Q2 = true;
      Q3 = false;
    }
    if (Q3_y > -80) {
      Q1 = false;
      Q2 = false;
      Q3 = true;
    }

    this.setState({
      prevScrollpos: currentScrollPos,
      Q1: Q1,
      Q2: Q2,
      Q3: Q3,
    });
  };
  render() {
    return (
      <div className="back">
        <div>
          <h1 className="Cta-title Cta-title--xl" style={Stylez}>
            Frequently Asked Questions
          </h1>
        </div>
        <div>
          <div className="Container Container--lg Container--pad-md">
            <div className="Grid Grid--gutter-sm">
              <div className="Grid-cell--xs-12 Grid-cell--lg-4">
                <nav className="Faq-nav js-highlight-nav">
                  <Sticky top={80}>
                    <ul className="Faq-nav-items js-highlight-nav-items">
                      <li
                        className={classnames('Faq-nav-item ', {
                          'Faq-nav-item is-active': this.state.Q1,
                        })}
                      >
                        <a
                          className="Faq-nav-link js-highlight-nav-link"
                          href="#faq-general-inquiries-1"
                        >
                          <div className="Grid Grid--gutter-xs">
                            <div className="Grid-cell--xs-2" />
                            <div className="Grid-cell--xs-10">
                              <div className="Faq-nav-title">
                                General inquiries
                              </div>
                              <div className="Faq-nav-description">
                                New around here? Start with the basics.
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li
                        className={classnames('Faq-nav-item ', {
                          'Faq-nav-item is-active': this.state.Q2,
                        })}
                      >
                        <a
                          className="Faq-nav-link js-highlight-nav-link"
                          href="#faq-general-inquiries-2"
                        >
                          <div className="Grid Grid--gutter-xs">
                            <div className="Grid-cell--xs-2" />
                            <div className="Grid-cell--xs-10">
                              <div className="Faq-nav-title">
                                General inquiries
                              </div>
                              <div className="Faq-nav-description">
                                New around here? Start with the basics.
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li
                        className={classnames('Faq-nav-item  ', {
                          'Faq-nav-item is-active': this.state.Q3,
                        })}
                      >
                        <a
                          className="Faq-nav-link js-highlight-nav-link"
                          href="#faq-general-inquiries-3"
                        >
                          <div className="Grid Grid--gutter-xs">
                            <div className="Grid-cell--xs-2" />
                            <div className="Grid-cell--xs-10">
                              <div className="Faq-nav-title">
                                General inquiries
                              </div>
                              <div className="Faq-nav-description">
                                New around here? Start with the basics.
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </Sticky>
                </nav>
              </div>
              <div className="Grid-cell--xs-12 Grid-cell--lg-8">
                <div
                  className="Faq-section"
                  id="faq-general-inquiries-1"
                  ref="tab1"
                >
                  <div className="Faq-section-header">
                    <h2 className="Faq-section-title">General inquiries 1</h2>
                    <p className="Faq-section-subTitle">
                      New around here? Start with the basics.
                    </p>
                  </div>
                  <div className="Faq-section-content">
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                  </div>
                </div>
                <div
                  className="Faq-section"
                  id="faq-general-inquiries-2"
                  ref="tab2"
                >
                  <div className="Faq-section-header">
                    <h2 className="Faq-section-title">General inquiries 2</h2>
                    <p className="Faq-section-subTitle">
                      New around here? Start with the basics.
                    </p>
                  </div>
                  <div className="Faq-section-content">
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                  </div>
                </div>
                <div
                  className="Faq-section"
                  id="faq-general-inquiries-3"
                  ref="tab3"
                >
                  <div className="Faq-section-header">
                    <h2 className="Faq-section-title">General inquiries 3</h2>
                    <p className="Faq-section-subTitle">
                      New around here? Start with the basics.
                    </p>
                  </div>
                  <div className="Faq-section-content">
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                    <div className="Faq-item Toggle js-toggle">
                      <FAQs question={ques} answer={ans} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
