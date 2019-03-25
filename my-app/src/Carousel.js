import React from "react";
import Slider from "react-slick";


class Carousel extends React.Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            arrows: false,
            autoplaySpeed: 500
        };
        return (
            <Slider {...settings}>
                <div>
                    <div className="image_1">
                        <div className="carousel-h-text"> Nieuw </div>
                        <div className="carousel-b-text"> Deze week</div>
                    </div>
                </div>
                <div>
                    <div className="image_2">
                        <div className="carousel-h-text"> Roomijs met appeltaartsmaak </div>
                        <div className="carousel-b-text"> Roomijs met appeltaart smaak je weet niet wat je proeft<br/>zo lekker.</div>
                    </div>
                </div>
                <div>
                    <div className="image_3">
                        <div className="carousel-h-text"> Roomijs met Belgische chocolade </div>
                        <div className="carousel-b-text"> Roomijs gemaakt van echte Belgische <br/>Chocolade, Super lekker.</div>
                    </div>
                </div>
                <div>
                    <div className="image_4">
                        <div className="carousel-h-text"> Roomijs met Esdoornsiroop </div>
                        <div className="carousel-b-text"> Roomijs gemaakt van echte esdoornsiroop <br/>super lekker.</div>
                    </div>
                </div>
            </Slider>
        );
    }
}
export default Carousel;