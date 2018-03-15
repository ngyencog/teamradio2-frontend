import * as React from 'react';
import { Component } from 'react';

export class SharingSection extends Component {
  render() {
    return (
      <section className="section-feature section-feature--white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Share your station
              </h3>
              <p className="paragraph">
                The playlist is maintained by everyone who joins your station.
                You can see who are online and react to their songs.
              </p>
              <a href="#" className="btn-text">
                Explore music together &rarr;
              </a>
            </div>
            <div className="col">
              <div className="composition">
                <img
                  src="img/home/share-station.png"
                  alt="Share Station"
                  className="composition__photo composition__photo--p5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
