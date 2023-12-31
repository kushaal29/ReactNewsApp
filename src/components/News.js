import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

  static defaultProps = {
   country: 'in',
  pageSize: 8,
  category: "general"
  }

  static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,
    
  }

  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

    
    
    constructor(props) {
        super(props);
        console.log("I am  a CONSTRUCTOR");
        this.state= {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
  
        document.title=`${this.capitalizeFirstLetter(this.props.category)}- NewsRadio`;
        
        
    }

    async updateNews(){
      this.props.setProgress(10);
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=344c6c13c0be4765ba1f8ed3fe08df3f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      this.props.setProgress(30);
      let parsedData= await data.json()
      this.props.setProgress(70);
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
      this.props.setProgress(100);

    }


    async componentDidMount(){
      // // console.log("cdm")
      // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=344c6c13c0be4765ba1f8ed3fe08df3f&page=1&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true});
      // let data= await fetch(url);
      // let parsedData= await data.json()
      // console.log(parsedData);
      // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
      this.updateNews();
    }


    handleNextClick= async ()=>{
    //   console.log("Next");

    //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){

    //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=344c6c13c0be4765ba1f8ed3fe08df3f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data= await fetch(url);
    //   let parsedData= await data.json()
    //   console.log(parsedData);

    //   this.setState({
    //     page: this.state.page+1,
    //     articles: parsedData.articles,
    //     loading: false
    this.setState({page:this.state.page + 1})
    this.updateNews();
    }

    fetchMoreData = async () => {
      // a fake async api call like which sends
      // 20 more records in 1.5 secs
      // setTimeout(() => {
        this.setState({page: this.state.page+1})
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=344c6c13c0be4765ba1f8ed3fe08df3f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({
          articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading:false})
  
  
        
    };
    

     handlePreviousClick=async ()=>{
    //   console.log("Previous")
    //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=344c6c13c0be4765ba1f8ed3fe08df3f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data= await fetch(url);
    //   let parsedData= await data.json()
    //   console.log(parsedData);

    //   this.setState({
    //     page: this.state.page-1,
    //     articles: parsedData.articles,
    //     loading: false
    //   })
    this.setState({page:this.state.page - 1})
    // }
    this.updateNews();
     }
  render() {
    console.log("render")
    return (
      <>
        <h1 className='text-center' style={{margin: '35px 0px'}}>NewsRadio- Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
      {this.state.loading && <Spin/>}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spin/>}
        >
<div className="container">
          <div className="container">

          

        <div className="row">
        { this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0, 88):""} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source
                .name}/>
            </div>

        })}
          
        </div>
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between" >

        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div> */}
        
        
      </>
      
    )
  }
     }

export default News
