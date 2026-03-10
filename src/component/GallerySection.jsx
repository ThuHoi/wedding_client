import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
// import images from "../data/data.js";
const GallerySection = () => {
    const { t } = useTranslation();

    useEffect(() => {
        // Đảm bảo đã tải jQuery và Fancybox từ CDN
        const scriptJquery = document.createElement("script");
        scriptJquery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        scriptJquery.onload = () => {
            const scriptFancybox = document.createElement("script");
            scriptFancybox.src =
                "https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js";
            document.body.appendChild(scriptFancybox);
        };
        document.body.appendChild(scriptJquery);
    }, []);


    return (
        <section
            id="memory"
            data-uuid="65ac636d57a76"
            className="gallery-section-three"
        >
            <div
                className="bg bg-pattern-5 bounce-y"
                data-uuid="65ac636d57a7f"
                id="igmnou"
            ></div>
            <div
                className="auto-container"
                data-uuid="65ac636d57a88"
                id="ikab45"
            >
                <div className="row" data-uuid="65ac636d57a91" id="iv32nz">
                    <div
                        className="left-column col-lg-6 wow fadeInLeft animated"
                        id="ix7w6t"
                        data-uuid="65ac636d57a9a"
                    >
                        <div
                            className="sec-title style-two"
                            data-uuid="65ac636d57aa3"
                            id="i6q9po"
                        >
                            <span
                                className="sub-title"
                                data-uuid="65ac636d57aac"
                                id="i4xhii"
                            >
                                {t('gallery.title')}
                            </span>
                            <h2
                                className="title"
                                data-uuid="65ac636d57ab5"
                                id="i5le4k"
                            >
                                {t('gallery.photos')}
                            </h2>
                        </div>
                        <div
                            className="row"
                            data-uuid="65ac636d57abe"
                            id="inopmj"
                        >
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57ac7"
                                id="i1nsng"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57ad1"
                                    id="i5mh2o"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57ada"
                                        id="i35yqg"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_1.jpg"
                                            data-uuid="65ac636d57ae3"
                                            id="ig9l6g"
                                        >
                                            <img
                                                src="./img/album/album_1.jpg"
                                                alt="Image"
                                                id="id637p"
                                                data-uuid="65ac636d57aec"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57af5"
                                id="ipdamx"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57aff"
                                    id="i9qwtp"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57b08"
                                        id="ihi7dw"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_2.jpg"
                                            data-uuid="65ac636d57b11"
                                            id="iz3tvc"
                                        >
                                            <img
                                                src="./img/album/album_2.jpg"
                                                alt="Image"
                                                id="ih7ldg"
                                                data-uuid="65ac636d57b1a"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-lg-12"
                                data-uuid="65ac636d57b24"
                                id="ivjoao"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57b2d"
                                    id="i2u534"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57b37"
                                        id="i2droh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_12.jpg"
                                            data-uuid="65ac636d57b40"
                                            id="il6mon"
                                        >
                                            <img
                                                src="./img/album/album_12.jpg"
                                                alt="Image"
                                                id="it6w9r"
                                                data-uuid="65ac636d57b49"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "620/389",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-lg-12"
                                data-uuid="65ac636d57b24"
                                id="ivjoao"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57b2d"
                                    id="i2u534"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57b37"
                                        id="i2droh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_13.jpg"
                                            data-uuid="65ac636d57b40"
                                            id="il6mon"
                                        >
                                            <img
                                                src="./img/album/album_13.jpg"
                                                alt="Image"
                                                id="it6w9r"
                                                data-uuid="65ac636d57b49"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "620/389",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-lg-12"
                                data-uuid="65ac636d57b24"
                                id="ivjoao"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57b2d"
                                    id="i2u534"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57b37"
                                        id="i2droh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_14.jpg"
                                            data-uuid="65ac636d57b40"
                                            id="il6mon"
                                        >
                                            <img
                                                src="./img/album/album_14.jpg"
                                                alt="Image"
                                                id="it6w9r"
                                                data-uuid="65ac636d57b49"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "620/389",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="right-column col-lg-6 wow fadeInRight animated"
                        id="i6ix55"
                        data-uuid="65ac636d57b53"
                    >
                        <div
                            className="row"
                            data-uuid="65ac636d57b5d"
                            id="i0tk4y"
                        >
                            <div
                                className="gallery-block-three col-lg-12"
                                data-uuid="65ac636d57b66"
                                id="ij8bv4"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57b70"
                                    id="ipc1ox"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57b79"
                                        id="i9cd1g"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_11.jpg"
                                            data-uuid="65ac636d57b83"
                                            id="ibvwpk"
                                        >
                                            <img
                                                src="./img/album/album_11.jpg"
                                                alt="Image"
                                                id="ifzqlj"
                                                data-uuid="65ac636d57b8d"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "620/389",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57b97"
                                id="i7451j"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57ba0"
                                    id="imry1m"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57baa"
                                        id="ie45eh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_3.jpg"
                                            data-uuid="65ac636d57bb4"
                                            id="igtrzc"
                                        >
                                            <img
                                                src="./img/album/album_3.jpg"
                                                alt="Image"
                                                id="i2kh2f"
                                                data-uuid="65ac636d57bbd"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57b97"
                                id="i7451j"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57ba0"
                                    id="imry1m"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57baa"
                                        id="ie45eh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_4.jpg"
                                            data-uuid="65ac636d57bb4"
                                            id="igtrzc"
                                        >
                                            <img
                                                src="./img/album/album_4.jpg"
                                                alt="Image"
                                                id="i2kh2f"
                                                data-uuid="65ac636d57bbd"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57b97"
                                id="i7451j"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57ba0"
                                    id="imry1m"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57baa"
                                        id="ie45eh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_5.jpg"
                                            data-uuid="65ac636d57bb4"
                                            id="igtrzc"
                                        >
                                            <img
                                                src="./img/album/album_5.jpg"
                                                alt="Image"
                                                id="i2kh2f"
                                                data-uuid="65ac636d57bbd"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57b97"
                                id="i7451j"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57ba0"
                                    id="imry1m"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57baa"
                                        id="ie45eh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_6.jpg"
                                            data-uuid="65ac636d57bb4"
                                            id="igtrzc"
                                        >
                                            <img
                                                src="./img/album/album_6.jpg"
                                                alt="Image"
                                                id="i2kh2f"
                                                data-uuid="65ac636d57bbd"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57b97"
                                id="i7451j"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57ba0"
                                    id="imry1m"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57baa"
                                        id="ie45eh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_7.jpg"
                                            data-uuid="65ac636d57bb4"
                                            id="igtrzc"
                                        >
                                            <img
                                                src="./img/album/album_7.jpg"
                                                alt="Image"
                                                id="i2kh2f"
                                                data-uuid="65ac636d57bbd"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57bc8"
                                id="is08zn"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57bd1"
                                    id="i3eobn"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57bdb"
                                        id="it497i"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./img/album/album_8.jpg"
                                            data-uuid="65ac636d57be5"
                                            id="ihkkhc"
                                        >
                                            <img
                                                src="./img/album/album_8.jpg"
                                                alt="Image"
                                                id="i1vx93"
                                                data-uuid="65ac636d57bef"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="text-block col-lg-12"
                                data-uuid="65ac636d57bf9"
                                id="ioj63s"
                            >
                                <div
                                    className="text"
                                    data-uuid="65ac636d57c03"
                                    id="i0kzpg"
                                >
                                    <span
                                        className="quote-text"
                                        data-uuid="65ac636d57c14"
                                        id="ikmqso"
                                    >
                                        {t('gallery.loveWords')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
