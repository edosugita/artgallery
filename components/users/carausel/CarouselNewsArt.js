import Image from "next/image";
import { Component } from "react";
import Slider from "react-slick";
import style from '@/styles/SectionHome/SectionFour.module.css'
import ArtTest from '@/public/images/png/Image.png'

export default class CarouselNewsArt extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            swipeToSlide: true,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            swipeToSlide: true,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            swipeToSlide: true,
          }
        }
      ],
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <Slider {...settings}>
            <div className="">
                <div className='me-2 ms-2'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}