import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, dis } = this.props;
    return (
      <div>
            <div className="card" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{ dis }</p>
                    <a href="/" className="btn btn-primary">button</a>
                    </div>
            </div>
      </div>
    )
  }
}

// api key =fe1c923ad1344b6f83829fba210e048b