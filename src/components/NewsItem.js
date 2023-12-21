import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className="card" style={{ width: "100%", height: "100%" }}>
        <img
          src={
            imageUrl === null
              ? "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/DOMS_IPO_GMP_subscription_status_1702610642873_1703058332805.JPG"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn btn-secondary"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
