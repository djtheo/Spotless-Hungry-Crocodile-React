import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  review3:
    'Impressed by the professionalism and effectiveness of this music promotion service. Will definitely use again!',
  author4Src:
    'https://images.unsplash.com/photo-1531214159280-079b95d26139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTg2MjMwM3w&ixlib=rb-4.1.0&q=80&w=1080',
  author4Position: 'Musician',
  author3Name: 'David Lee',
  review4:
    'Fantastic experience working with this team. They truly care about helping artists succeed.',
  author4Alt: 'Sarah Thompson - Musician',
  author1Name: 'John Smith',
  content1:
    "I've been using this music promotion service for years and it has significantly boosted my artists' exposure. Highly recommended!",
  author1Src:
    'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTg2MjMwM3w&ixlib=rb-4.1.0&q=80&w=1080',
  review1: '5 stars',
  author3Alt: 'David Lee - Music Blogger',
  author3Position: 'Music Blogger',
  author3Src:
    'https://images.unsplash.com/photo-1544784179-ae1535e9f013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTg2MjMwNHw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Name: 'Sarah Thompson',
  heading1: 'Testimonials',
  author2Src:
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTg2MjMwNHw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Position: 'Singer-Songwriter',
  author2Alt: 'Emily Johnson - Singer-Songwriter',
  review2:
    'Great platform to get your music heard by a wider audience. Very satisfied with the results!',
  author1Position: 'Music Producer',
  author2Name: 'Emily Johnson',
  author1Alt: 'John Smith - Music Producer',
}

Testimonial.propTypes = {
  review3: PropTypes.string,
  author4Src: PropTypes.string,
  author4Position: PropTypes.string,
  author3Name: PropTypes.string,
  review4: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.string,
  content1: PropTypes.string,
  author1Src: PropTypes.string,
  review1: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Position: PropTypes.string,
  author3Src: PropTypes.string,
  author4Name: PropTypes.string,
  heading1: PropTypes.string,
  author2Src: PropTypes.string,
  author2Position: PropTypes.string,
  author2Alt: PropTypes.string,
  review2: PropTypes.string,
  author1Position: PropTypes.string,
  author2Name: PropTypes.string,
  author1Alt: PropTypes.string,
}

export default Testimonial
