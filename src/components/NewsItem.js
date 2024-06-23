import React from 'react';



const propTypes = {};

const defaultProps = {};

class NewsItem extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        let{title , description,imageurl, newsurl, author ,date }=this.props;
        return (
        <div>
            <div className="card" >
  <img src={!imageurl?"https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg": imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}  </p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}  </small></p>
  </div>
    <a href={newsurl} target="_about" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      
        );
    }
}


NewsItem.propTypes = propTypes;
NewsItem.defaultProps = defaultProps;
// #endregion

export default NewsItem;