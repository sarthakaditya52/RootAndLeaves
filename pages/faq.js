import React from 'react';
import Sticky from 'react-stickynode';
import classnames from 'classnames';

let styles = {
  marginTop: '25px',
};
let mains = {
  height: '100%',
};

let navstyl = {
  marginTop: '35px',
};

let curstyle = {
  cursor: 'pointer',
};

let Faq_nav_item = {
  display: 'block',
  marginBottom: '2rem',
  backgroundColor: 'white',
  width: 'fit-content',
};

let Faq_section = {
  marginBottom: '4rem',
  padding: '2rem 0',
  backgroundColor: 'white',
  marginTop: '35px',
};

let Faq_item_itle = {
  color: 'rebeccapurple',
};

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
  <h3
    className="Faq-item-title Toggle-trigger js-toggle-trigger"
    style={Faq_item_itle}
  >
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

let disp1 = (
  <div className="Faq-section" id="faq-general-inquiries-1" style={Faq_section}>
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
);

let disp2 = (
  <div className="Faq-section" id="faq-general-inquiries-2" style={Faq_section}>
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
);

let disp3 = (
  <div className="Faq-section" id="faq-general-inquiries-3" style={Faq_section}>
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
);

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disp: disp1,
      Q1: true,
      Q2: false,
      Q3: false,
    };
  }

  /*componentWillMount() {
    document.body.style.backgroundColor = '#f2f3f4';
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }*/

  funcdisp1 = () => {
    this.setState({
      disp: disp1,
      Q1: true,
      Q2: false,
      Q3: false,
    });
    this.render();
    {
      return <div>{this.state.disp}</div>;
    }
  };
  funcdisp2 = () => {
    this.setState({
      disp: disp2,
      Q1: false,
      Q2: true,
      Q3: false,
    });
    this.render();
    {
      return <div>{this.state.disp}</div>;
    }
  };
  funcdisp3 = () => {
    this.setState({
      disp: disp3,
      Q1: false,
      Q2: false,
      Q3: true,
    });
    this.render();
    {
      return <div>{this.state.disp}</div>;
    }
  };
  render() {
    return (
      <div style={mains}>
        <div className="back" style={styles}>
          <link
            rel="stylesheet"
            href="//dxssrr2j0sq4w.cloudfront.net/3.2.0/css/style-dca3ea452c.css"
          />
          <div>
            <h1 className="Cta-title Cta-title--xl" style={Stylez}>
              Frequently Asked Questions
            </h1>
          </div>
          <div>
            <div className="Container Container--lg Container--pad-md">
              <div className="Grid Grid--gutter-sm">
                <div className="Grid-cell--xs-12 Grid-cell--lg-4">
                  <nav className="Faq-nav js-highlight-nav" style={navstyl}>
                    <Sticky top={80}>
                      <ul className="Faq-nav-items js-highlight-nav-items">
                        <li
                          className={classnames('Faq-nav-item ', {
                            'Faq-nav-item is-active': this.state.Q1,
                          })}
                          style={Faq_nav_item}
                        >
                          <a
                            className="Faq-nav-link js-highlight-nav-link"
                            onClick={this.funcdisp1}
                            style={curstyle}
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
                          style={Faq_nav_item}
                        >
                          <a
                            className="Faq-nav-link js-highlight-nav-link"
                            onClick={this.funcdisp2}
                            style={curstyle}
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
                          style={Faq_nav_item}
                        >
                          <a
                            className="Faq-nav-link js-highlight-nav-link"
                            onClick={this.funcdisp3}
                            style={curstyle}
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
                  {this.state.disp}
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
