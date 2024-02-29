import React, { Component } from "react";

export class Slider extends Component {
    constructor (props) {
        super(props);

        this.state = {
            currentIndex: 0,
            isAutoSliding: false,
        };
        
        this.images = [
            'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
            'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
            'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        ];
    };

    nextSlide = () => {
        const { currentIndex } = this.state;
        const newIndex = (currentIndex + 1) % this.images.length;
        this.setState({ currentIndex: newIndex });
    };

    prevSlide = () => {
        const { currentIndex } = this.state;
        const newIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
        this.setState({ currentIndex: newIndex });
    };

    startAutoSlide = () => {
        this.setState({ isAutoSliding: true }, () => {
            this.autoSlideInterval = setInterval(this.nextSlide, 2000);
        });
    };

    stopAutoSlide = () => {
        this.setState({ isAutoSliding: false }, () => {
            clearInterval(this.autoSlideInterval);
        });
    };

    render() {
        const { currentIndex } = this.state;
        return (
        <div className="container">
            <div className="row" >
                <div>
                    <img src={this.images[currentIndex]} alt="slide" className="w-100 rounded-4 d-block mx-auto mb-3" style={{width:'300px', height:'700px'}}/>
                    <button onClick={this.prevSlide} className="btn btn-dark me-2">Previous</button>
                    <button onClick={this.nextSlide} className="btn btn-dark me-3">Next</button>
                    <button onClick={this.startAutoSlide} className="btn btn-warning me-2">Auto Slide</button>
                    <button onClick={this.stopAutoSlide} className="btn btn-info me-2">Stop</button>
                </div>
            </div>
            <hr />
        </div>
        );
    }
}

export default Slider;
