import Image from "next/image";
import { Component } from "react";
import Slider from "react-slick";
import style from '@/styles/SectionHome/SectionSeven.module.css'
import ArtTest from '@/public/images/png/Image.png'
import Link from "next/link";

export default class CarouselOnGoing extends Component {
    state = {
        data: [],
    };

    async componentDidMount() {
        const response = await fetch(
            "http://localhost:3000/api/data/product/bid"
        );
        const data = await response.json();
        this.setState({ data });

        // jalankan timer setiap 1 detik untuk menghitung perhitungan mundur
        this.interval = setInterval(() => {
            this.forceUpdate();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { data } = this.state;
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
                    {data.map((item, index) => {
                        const now = new Date();

                        const dateStr = item.date_end_bid;
                        const timeStr = item.clock_end_bid;

                        const dateObj = new Date(dateStr);
                        const year = dateObj.getFullYear();
                        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
                        const day = dateObj.getDate().toString().padStart(2, '0');

                        const [hour, minute, second] = timeStr.split(':');
                        const endDate = new Date(year, month - 1, day, hour, minute, second)
                        const timeDiff = endDate - now;
                        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                        const hours = Math.floor(timeDiff / (1000 * 60 * 60) % 24);
                        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
                        const seconds = Math.floor((timeDiff / 1000) % 60);

                        let timeString = "";
                        if (days > 0) {
                            timeString += days + "d : ";
                        }
                        if (hours > 0 || days > 0) {
                            timeString += hours + "h : ";
                        }
                        if (minutes > 0 || hours > 0 || days > 0) {
                            timeString += minutes + "m : ";
                        }
                        timeString += seconds + "s";

                        if (timeDiff <= 0) {
                            timeString = "End";
                        }

                        return (
                            <div key={item.index}>
                                <div className='me-2 ms-2'>
                                    <Link className="text-decoration-none text-light" href={`/bid/detail/${item.slug}`}>
                                        <div className={style.card}>
                                            <Image
                                                src={"/images/png/" + item.image}
                                                alt="Image Slider"
                                                height="250"
                                                width="250"
                                                className="rounded"
                                            />
                                            <div className={style.card_body}>
                                                <h5>{item.artname}</h5>
                                                <div className="mb-3 mt-2">
                                                    {item.kategori.split(",").map((kategori) => (
                                                        <span key={kategori} className="badge me-2 mb-1" style={{background: '#2E2E2E', color: '#EBEBEB'}}>{kategori}</span>
                                                    ))}
                                                </div>
                                                <p><span>By</span> {item.username}</p>
                                                <span className={style.bid}>Best Bid</span>
                                                <p className="card-text">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.bid_price)}</p>
                                                <label className={style.bid}>End Auction</label>
                                                <p className="card-text">
                                                    {timeString}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}