import * as React from 'react';
import { Component } from 'react';

export class CreatingSection extends Component {
  render() {
    return (
      <section className="section-feature section-feature--white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Create your own station
              </h3>
              <p className="paragraph">
                No need to register an account. Your station will be ready, in
                just one click.
              </p>
              <a href="#" className="btn-text">
                Try it now &rarr;
              </a>
            </div>
            <div className="col">
              <div className="composition">
                <img
                  src="img/home/create-station-1-large.jpg"
                  alt="Station 1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src="img/home/create-station-2-large.jpg"
                  alt="Station 2"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src="img/home/create-station-3-large.jpg"
                  alt="Station 3"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
