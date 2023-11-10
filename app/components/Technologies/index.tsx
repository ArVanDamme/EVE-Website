"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/images/Companies/node.png"
    },
    {
        imgSrc: "/images/Companies/mongo.png"
    },
    {
        imgSrc: "/images/Companies/js.png"
    },
    {
        imgSrc: "/images/Companies/next.jpg"
    },
    {
        imgSrc: "/images/Companies/discord.png"
    },
    {
        imgSrc: "/images/Companies/git.png"
    },
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center bg-lightpink' >
                <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <div>
                        <Slider {...settings} className="size">
                            {data.map((item, i) =>
                                <div key={i} >
                                    <img src={item.imgSrc} alt={item.imgSrc} className="size"/>
                                    <style jsx>{`
                                        .size {
                                            height: 80px;
                                            justify-content: space-between;
                                            margin: 0 10px;
                                        }
                                    `}</style>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>

        )
    }
}
