/* eslint-disable */
// https://github.com/capaj/react-tweet-embed
import React from 'react';
import PropTypes from 'prop-types';

// This assumes Twitter script has been loaded already
class TweetEmbed extends React.Component {
  componentDidMount () {
    const renderTweet = () => {
      window.twttr.ready().then(({ widgets }) => {
        const { options, onTweetLoadSuccess, onTweetLoadError } = this.props
        widgets
          .createTweetEmbed(this.props.id, this._div, options)
          .then(onTweetLoadSuccess)
          .catch(onTweetLoadError)
      })
    }

    renderTweet();
  }

  render () {
    return <div className={this.props.className} ref={(c) => {
      this._div = c
    }} />
  }
}

TweetEmbed.propTypes = {
  id: PropTypes.string,
  options: PropTypes.object,
  onTweetLoadSuccess: PropTypes.func,
  onTweetLoadError: PropTypes.func,
  className: PropTypes.string
}

TweetEmbed.defaultProps = {
  options: {},
  className: null
}

export default TweetEmbed