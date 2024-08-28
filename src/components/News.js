import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  article = [
    {
      "source": {
        "id": "nbc-news",
        "name": "NBC News"
      },
      "author": "Dennis Romero, Tangni Noriega",
      "title": "Dirt track hall of fame driver Scott Bloomquist believed dead in plane crash",
      "description": "Dirt track racing legend Scott Bloomquist is believed to be the sole fatality in the crash of a single-engine, vintage plane on the Bloomquist family farm in Tennessee on Friday morning.",
      "url": "https://www.nbcnews.com/news/us-news/dirt-track-hall-fame-driver-scott-bloomquist-believed-dead-plane-crash-rcna166977",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-08/240816-Scott-Bloomquist-obit-2013-ac-631p-dae6c8.jpg",
      "publishedAt": "2024-08-17T00:01:09Z",
      "content": "Dirt track racing legend Scott Bloomquist is believed to be the sole fatality in the crash of a single-engine, vintage plane on the Bloomquist family farm in Tennessee on Friday morning.\r\nHe was 60.\r… [+3720 chars]"
    },
    {
      "source": {
        "id": "the-hindu",
        "name": "The Hindu"
      },
      "author": "Sobhana K Nair",
      "title": "Parliament paralysed over Pegasus, farm laws",
      "description": "Trinamool member tears IT Minister’s statement on spyware.",
      "url": "https://www.thehindu.com/news/national/tmc-bjp-mps-scuffle-in-rajya-sabha-over-snooping/article35469208.ece",
      "urlToImage": "https://www.thehindu.com/news/national/28kofw/article35475486.ece/ALTERNATES/LANDSCAPE_615/RajyaSabha-snoopingjpg",
      "publishedAt": "2021-07-22T12:45:50Z",
      "content": "The proceedings of both the Houses of Parliament continued to remain paralysed on Thursday as Opposition members protested over a number of issues including the Pegasus snooping controversy and made … [+4103 chars]"
    }
  ]


  constructor() {
    super()
    console.log("this is a construction");
    this.state = {
      article: this.article,
      loading: false,
    }
  }
  render() {
    return (
      <div className='container my-4'>
        <h2>Apna News Top Headline</h2>
        <div className="row my-3">

          <div className="col-md-4">
            <NewsItem title={this.article.author} dis="hello" />
          </div>
          <div className="col-md-4">
            <NewsItem title="modi" dis="hello" />
          </div>
          <div className="col-md-4">
            <NewsItem title="modi" dis="hello" />
          </div>


          

        </div>

      </div>
    )
  }
}
