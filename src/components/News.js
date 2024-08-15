import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
            <h2>Apna News Top Headline</h2>
            <NewsItem title="modi" dis="hello"/>
            <NewsItem/>
            <NewsItem/>
      </div>
    )
  }
}
