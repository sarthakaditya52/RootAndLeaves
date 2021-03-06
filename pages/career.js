import React, { Component } from 'react';
import CareerSection from 'common/src/containers/App/CareerSection';
import Layout from './Layout';

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationClass: 'test',
    };
  }

  componentWillMount() {
    document.body.className = this.state.animationClass;
    document.body.id = 'ncolor';
  }

  componentWillUnmount() {
    document.body.className = null;
    document.body.id = null;
  }

  render() {
    return (
      <Layout
        content={
          <div>
            <CareerSection />
            <center>
              <div id="drop-area">
                <form className="my-form">
                  <p>
                    Upload multiple files with the file dialog or by dragging
                    and dropping images onto the dashed region
                  </p>
                  <input
                    type="file"
                    id="fileElem"
                    multiple
                    accept="image/*"
                    onChange="handleFiles(this.files)"
                  />
                  <label className="button" htmlFor="fileElem">
                    Select some files
                  </label>
                </form>
              </div>
            </center>
          </div>
        }
      />
    );
  }
}

export default Career;
