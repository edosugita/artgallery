import Image from "next/image";
import { Component } from "react";
import Slider from "react-slick";
import style from "@/styles/SectionHome/SectionTwo.module.css";
import Link from "next/link";

export default class CarouselSale extends Component {
    state = {
        data: [],
    };

    async componentDidMount() {
        const response = await fetch("http://localhost:3000/api/data/product/discount");
        const data = await response.json();
        this.setState({ data });
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
                        dots: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        swipeToSlide: true,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        swipeToSlide: true,
                    },
                },
            ],
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
            },
        };

        return (
            <div>
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id}>
                            <div className="me-2 ms-2">
                                <Link
                                    className="text-decoration-none text-light"
                                    href={`/detail/${item.slug}`}
                                >
                                    <div className={style.card}>
                                        <div style={{height: '200px', width: '100%', overflow: "hidden"}}>
                                            <Image src={"/images/png/" + item.image} alt="Image Slider" height="520" width="520" className="rounded" style={{height: '100%', width: '100%', display: "block", objectFit:"cover"}} />
                                        </div>
                                        <div className={style.card_body}>
                                            <h5>{item.artname}</h5>
                                            <div className="mb-3 mt-2">
                                                {item.kategori.split(",").map((kategori) => (
                                                    <span key={kategori} className="badge me-2 mb-1" style={{background: '#2E2E2E', color: '#EBEBEB'}}>{kategori}</span>
                                                ))}
                                            </div>
                                            <p>
                                                <span>By</span> {item.username}
                                            </p>
                                            <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                                <p>{item.discount}%</p>
                                                <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</p>
                                            </div>
                                            <p className={`card-text ${style.card_text}`}>
                                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price - (item.price * item.discount / 100))}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}