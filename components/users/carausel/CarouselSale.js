import Image from "next/image";
import { Component } from "react";
import Slider from "react-slick";
import style from '@/styles/SectionHome/SectionTwo.module.css'
import ArtTest from '@/public/images/png/Image.png'
import Link from "next/link";

export default class CarouselSale extends Component {
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
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className='me-2 ms-2'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}