import React from 'react';

export default class FeatureList extends React.Component {
  getFeatures() {
    const features = [
        {
          icon:"fa fa-image fa-2x",
          bigtext: "See photos and updates",
          littletext: "from friend"
        },
        {
          icon: "fa fa-share fa-2x",
          bigtext: "Share what is new",
          littletext: "in your life on your Timeline"
        },
        {
          icon: "fa fa-search fa-2x",
          bigtext: "Find more",
          littletext: "of what you are looking for with Fakebook search"
        }
      ];
    return features;
  }

  render() {
    const features = this.getFeatures();
    const rows = features.map( (feature) => {
      return (
        <li key={feature.icon}>
          <h3 className="btn btn-lg">
            <i className={feature.icon}></i>
            <span>
              <strong>{feature.bigtext}</strong>
              <small>{feature.littletext}</small>
            </span>
          </h3>
        </li>
      )
    });

    return (
      <div>
        <h2 className="col-md-11 featurelist hidden-xs">
            Connect with friends and the
            world around you on Fakebook.
        </h2>
        <ul className="ds-btn hidden-xs">
            {rows}
        </ul>
      </div>
    )
  }
}
