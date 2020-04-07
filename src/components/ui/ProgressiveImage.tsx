import React, { Component, createRef } from 'react';



type MyProps = {
  // using `interface` is also ok
  image: string;
  preview: string;
  alt?: string;
  className?: string;
  srcSet?:string;
};

type MyState = {
  currentImage: string;
  loading: boolean;
};



export default class ProgressiveImage extends Component<MyProps, MyState> {
  
  //TODO Add proper typing
  private loadingImage:any = null;

  state: MyState = {
    currentImage: this.props.preview,
    loading: true
  }

  componentDidMount() {
    this.fetchImage(this.props.image)
  }

  componentDidUpdate(nextProps:MyProps) {
    if (nextProps.image !== this.props.image) {
      this.setState({ currentImage: nextProps.preview, loading: true }, () => {
        this.fetchImage(nextProps.image)
      })
    }
  }

  componentWillUnmount() {
    if (this.loadingImage) {
      this.loadingImage.onload = null
    }
  }

  fetchImage = (src: string) => {
    const image:HTMLImageElement = new Image()
    image.onload = () => this.setState({ currentImage: this.loadingImage.src, loading: false })
    image.src = src
    this.loadingImage = image
  }

  style = (loading: boolean) => {
    return {
      transition: '0.5s filter linear',
      filter: `${loading ? 'blur(50px)' : ''}`,
    }
  }

  render() {
    const { currentImage, loading } = this.state
    const { alt, className, srcSet} = this.props
    return (<img 
      style={this.style(loading)} 
      src={currentImage} 
      alt={alt} 
      className={className} 
      srcSet={srcSet} />
    )
  }
}

