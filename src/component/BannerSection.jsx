import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function BannerSection() {
    return (
        <section className="banner-section-two">
            <div id="iltj" className="icon-flowers-1 bounce-y"></div>
            <div
                id="ioge"
                data-uuid="65ac636d573ff"
                data-wow-delay="4s"
                className="icon-flowers-2 bounce-y wow"
                style={{
                    boxSizing: "border-box",
                    visibility: "visible",
                    animationDelay: "4s",
                    animationName: "bounce-y",
                }}
            ></div>
            <div className="auto-container">
                <div id="ih70q" className="row">
                    {/* text center */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInUp animated">
                        <div className="inner-column">
                            <span
                                className="sub-title wow fadeInUp animated"
                                style={{
                                    boxSizing: "border-box",
                                    visibility: "visible",
                                    animationDelay: "1200ms",
                                    animationName: "fadeInUp",
                                }}
                            >
                                Lễ Thành Hôn
                            </span>
                            <h2
                                className="name wow fadeInUp animated"
                                style={{
                                    boxSizing: "border-box",
                                    visibility: "visible",
                                    animationDelay: "1500ms",
                                    animationName: "fadeInUp",
                                }}
                            >
                                Duy Khương
                                <br />&<br />
                                Thu Thuỷ
                            </h2>
                            <div
                                className="date wow fadeInUp animated"
                                style={{
                                    boxSizing: "border-box",
                                    visibility: "visible",
                                    animationDelay: "1800ms",
                                    animationName: "fadeInUp",
                                }}
                            >
                                15 Tháng 06, 2025
                            </div>
                            <div
                                className="address wow fadeInUp animated"
                                style={{
                                    boxSizing: "border-box",
                                    visibility: "visible",
                                    animationDelay: "2100ms",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <FaMapMarkerAlt className="icon" />
                                <span>
                                    Trung tâm tiệc cưới Hồng Minh, Hải Phòng,
                                    Việt Nam
                                </span>
                            </div>
                            <div className="btn-box">
                                <a
                                    href="https://www.google.com/maps?q=Trung%20t%C3%A2m%20ti%E1%BB%87c%20c%C6%B0%E1%BB%9Bi%20H%E1%BB%93ng%20Minh..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="theme-btn btn-style-two mt-4"
                                >
                                    <span className="btn-title">
                                        Xem vị trí
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* image left */}
                    <div
                        id="icv0h"
                        data-uuid="65ac636d5741d"
                        data-wow-delay="600ms"
                        className="image-column col-lg-3 col-md-6 col-sm-12 wow fadeInLeft animated animated"
                        style={{
                            boxSizing: "border-box",
                            visibility: "visible",
                            animationDelay: "600ms",
                            animationName: "fadeInLeft",
                        }}
                    >
                        <div
                            data-uuid="65ac636d5741f"
                            id="itwg5"
                            className="inner-column"
                            style={{ boxSizing: "border-box" }}
                        >
                            <div
                                data-uuid="65ac636d57421"
                                id="iesfj"
                                className="image-box"
                                style={{ boxSizing: "border-box" }}
                            >
                                <figure
                                    data-uuid="65ac636d57422"
                                    id="iii12"
                                    className="image"
                                    style={{ boxSizing: "border-box" }}
                                >
                                    <img
                                        id="iqsmw"
                                        data-uuid="65ac636d57424"
                                        alt="Image"
                                        src="./img/img_banner_1.jpg"
                                        data-editable="true"
                                        style={{
                                            boxSizing: "border-box",
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                    {/* image right */}
                    <div
                        id="i16kt"
                        data-uuid="65ac636d57426"
                        data-wow-delay="600ms"
                        className="image-column style-two col-lg-3 col-md-6 col-sm-12 order-lg-3 wow fadeInRight animated animated"
                        style={{
                            boxSizing: "border-box",
                            visibility: "visible",
                            animationDelay: "600ms",
                            animationName: "fadeInRight",
                        }}
                    >
                        <div
                            data-uuid="65ac636d57428"
                            id="i5k6n"
                            className="inner-column"
                            style={{ boxSizing: "border-box" }}
                        >
                            <div
                                data-uuid="65ac636d5742a"
                                id="i34q6"
                                className="image-box"
                                style={{ boxSizing: "border-box" }}
                            >
                                <figure
                                    data-uuid="65ac636d5742c"
                                    id="inn73"
                                    className="image"
                                    style={{ boxSizing: "border-box" }}
                                >
                                    <img
                                        data-uuid="65ac636d5742d"
                                        alt="Image"
                                        src="./img/img_banner_2.jpg"
                                        data-editable="true"
                                        id="iauno"
                                        style={{
                                            boxSizing: "border-box",
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;
