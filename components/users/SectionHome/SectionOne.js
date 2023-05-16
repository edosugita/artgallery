import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "@/styles/SectionHome/SectionOne.module.css";


export default function SectionOne() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('api/data/product/sell?limit=3')
                const data = await response.json()
                setData(data)
            } catch (e) {
                console.log({message: e})
            }
        }

        fetchData()
    }, []);

    return (
        <>
            {/* SECTION ONE 'SLIDER' */}
            <section className={style.section_one}>
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        {data.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-current={index === 0 ? "true" : ""}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                            >
                                <div className={`row ${style.row}`}>
                                    <div className="col-md-5 col-sm-12">
                                        <h1 className={`mb-3 ${style.h1}`}>{item.artname}</h1>
                                        <span className={style.span}>{item.description}</span>
                                        <h2 className={`mt-3 ${style.h2}`}>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</h2>
                                        <div className={`d-flex gap-4 mt-3 ${style.button_group}`}>
                                            <input
                                                className={`btn btn-danger rounded-top-3 ${style.btn}`}
                                                type="button"
                                                value="Buy Now"
                                            />
                                            <Link
                                                className={style.link_detail}
                                                href={`/detail/${item.slug}`}
                                            >
                                                See Detail
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <div className={`d-flex justify-content-md-end justify-content-sm-center ${style.section_one_img}`} >
                                            <div style={{height: '300px', width: '100%'}}>
                                                <Image
                                                    src={"/images/png/" + item.image}
                                                    alt="Image Slider"
                                                    height="520"
                                                    width="520"
                                                    className="rounded"
                                                    style={{height: '100%', width: '100%', display: "block", objectFit:"cover"}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* END SECTION ONE */}
        </>
    );
}