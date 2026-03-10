import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast, Toaster } from "react-hot-toast";
import { CreatePost } from "../api";
import confetti from "canvas-confetti";

function ContactSection() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        content: "",
        isJoin: "yes",
        isGuest: "bride",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await CreatePost(formData);
            setFormData({
                name: "",
                phoneNumber: "",
                content: "",
                isJoin: "yes",
                isGuest: "bride",
            });
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
            });
            toast.success("Gửi lời chúc thành công!");
        } catch (error) {
            console.error(error);
            toast.error("Đã xảy ra lỗi khi gửi!");
        }
    };

    return (
        <>
            <Toaster />
            <section
                data-uuid="65ac636d577e3"
                data-hidable="true"
                data-movable="true"
                id="contact"
                className="contact-section-two"
                style={{ boxSizing: "border-box" }}
            >
                <div
                    data-uuid="65ac636d577ea"
                    id="ilpndl"
                    className="icon-leaves-7 bounce-y"
                    style={{ boxSizing: "border-box" }}
                ></div>
                <div
                    data-uuid="65ac636d577f1"
                    id="ibbd7k"
                    className="auto-container"
                    style={{ boxSizing: "border-box" }}
                >
                    <div
                        data-uuid="65ac636d577f8"
                        id="il3dve"
                        className="row"
                        style={{ boxSizing: "border-box" }}
                    >
                        <div
                            data-uuid="65ac636d57800"
                            id="i7hd1f"
                            className="form-column col-xl-5 col-lg-6"
                            style={{ boxSizing: "border-box" }}
                        >
                            <div
                                data-uuid="65ac636d57807"
                                id="isylzq"
                                className="inner-column"
                                style={{ boxSizing: "border-box" }}
                            >
                                <div
                                    data-uuid="65ac636d5780e"
                                    id="iul4fy"
                                    className="icon-circle-star"
                                    style={{ boxSizing: "border-box" }}
                                ></div>
                                <div
                                    id="ix3rzl"
                                    data-uuid="65ac636d57815"
                                    className="contact-form-two wow fadeInLeft animated animated"
                                    style={{
                                        boxSizing: "border-box",
                                        visibility: "visible",
                                        animationName: "fadeInLeft",
                                    }}
                                >
                                    <div
                                        data-uuid="65ac636d5781c"
                                        id="i22wuc"
                                        className="icon-flower-8"
                                        style={{ boxSizing: "border-box" }}
                                    ></div>
                                    <div
                                        data-uuid="65ac636d57832"
                                        id="i1racl"
                                        className="icon-flower-9"
                                        style={{ boxSizing: "border-box" }}
                                    ></div>
                                    <figure
                                        data-uuid="65ac636d57839"
                                        id="ihzrj8"
                                        className="image text-center"
                                        style={{ boxSizing: "border-box" }}
                                    >
                                        <img
                                            data-uuid="65ac636d57841"
                                            alt="Image"
                                            src="./img/icon-circle-star.png"
                                            id="illdk6"
                                            style={{
                                                boxSizing: "border-box",
                                                width: "auto",
                                                height: "auto",
                                            }}
                                        />
                                    </figure>
                                    <h3
                                        data-uuid="65ac636d57848"
                                        data-editable="true"
                                        id="irsz3i"
                                        className="title"
                                        style={{ boxSizing: "border-box" }}
                                    >
                                        {t('contact.willYouCome')}
                                    </h3>
                                    <form
                                        data-uuid="65ac636d57850"
                                        id="contact-form"
                                        action="https://html.kodesolution.com/2023/wendola-html/get"
                                        method="post"
                                        className="vs-attendance-form"
                                        style={{ boxSizing: "border-box" }}
                                        onSubmit={handleSubmit}
                                    >
                                        <div
                                            data-uuid="65ac636d57857"
                                            id="iszgxm"
                                            className="row"
                                            style={{ boxSizing: "border-box" }}
                                        >
                                            <div
                                                data-uuid="65ac636d5785f"
                                                id="iqkh4f"
                                                className="form-group col-4 col-lg-4 col-md-4 col-sm-4"
                                            >
                                                <div
                                                    data-uuid="65ac636d57866"
                                                    id="ibsjgf"
                                                    className="radio-box"
                                                >
                                                    <label
                                                        data-uuid="65ac636d5786d"
                                                        id="itkomq"
                                                        className="custom-radio-box-two"
                                                    >
                                                        {t('contact.answerYes')}
                                                        <input
                                                            data-uuid="65ac636d57875"
                                                            name="isJoin"
                                                            checked={
                                                                formData.isJoin ===
                                                                "yes"
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            type="radio"
                                                            value="yes"
                                                            id="i5c1z3"
                                                        />
                                                        <span
                                                            data-uuid="65ac636d5787c"
                                                            id="i8syza"
                                                            className="checkmark"
                                                        ></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                data-uuid="65ac636d57884"
                                                id="i8rs64"
                                                className="form-group col-4 col-lg-4 col-md-4 col-sm-4"
                                            >
                                                <div
                                                    data-uuid="65ac636d5788b"
                                                    id="ir83lf"
                                                    className="radio-box"
                                                >
                                                    <label
                                                        data-uuid="65ac636d57893"
                                                        id="is8ocz"
                                                        className="custom-radio-box-two"
                                                    >
                                                        {t('contact.answerNo')}
                                                        <input
                                                            data-uuid="65ac636d5789a"
                                                            name="isJoin"
                                                            value="no"
                                                            checked={
                                                                formData.isJoin ===
                                                                "no"
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            type="radio"
                                                            id="iagw1p"
                                                        />
                                                        <span
                                                            data-uuid="65ac636d578a2"
                                                            id="ip9dve"
                                                            className="checkmark"
                                                        ></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                data-uuid="65ac636d578d0"
                                                id="iqojui"
                                                className="form-group col-lg-12"
                                            >
                                                <div
                                                    data-uuid="65ac636d578d8"
                                                    id="ijijak"
                                                    className="input-outer"
                                                >
                                                    <input
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        data-uuid="65ac636d578e0"
                                                        required
                                                        placeholder={t('contact.namePlaceholder')}
                                                        type="text"
                                                        id="i0la8k"
                                                        className="vs-attendance-name"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-uuid="65ac636d57900"
                                                id="iv064k"
                                                className="form-group col-lg-12"
                                            >
                                                <div
                                                    data-uuid="65ac636d5790f"
                                                    id="i4agg6"
                                                    className="input-outer"
                                                >
                                                    <input
                                                        data-uuid="65ac636d57917"
                                                        placeholder={t('contact.phoneNumberPlaceholder')}
                                                        value={
                                                            formData.phoneNumber
                                                        }
                                                        required
                                                        name="phoneNumber"
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="iq7r9j"
                                                        inputMode="numeric"
                                                        pattern="[0-9]*"
                                                        className="vs-attendance-phone"
                                                    />
                                                </div>
                                            </div>
                                            <h6
                                                data-uuid="65ac636d5791f"
                                                data-editable="true"
                                                id="itrd9n"
                                                className="title"
                                            >
                                                {t('contact.sideOn?')}
                                            </h6>
                                            <div
                                                data-uuid="65ac636d57927"
                                                id="ith48o"
                                                className="form-group col-4 col-lg-4 col-md-4 col-sm-4"
                                            >
                                                <div
                                                    data-uuid="65ac636d5792f"
                                                    id="ibokvk"
                                                    className="radio-box"
                                                >
                                                    <label
                                                        data-uuid="65ac636d57937"
                                                        id="iwrc51"
                                                        className="custom-radio-box-two"
                                                    >
                                                        {t('contact.bride')}
                                                        <input
                                                            data-uuid="65ac636d5793f"
                                                            name="isGuest"
                                                            type="radio"
                                                            value="bride"
                                                            checked={
                                                                formData.isGuest ===
                                                                "bride"
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            id="imodfl"
                                                        />
                                                        <span
                                                            data-uuid="65ac636d57948"
                                                            id="itv85e"
                                                            className="checkmark"
                                                        ></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                data-uuid="65ac636d57950"
                                                id="it61ql"
                                                className="form-group col-4 col-lg-4 col-md-4 col-sm-4"
                                            >
                                                <div
                                                    data-uuid="65ac636d57958"
                                                    id="ik1ht7"
                                                    className="radio-box"
                                                >
                                                    <label
                                                        data-uuid="65ac636d57960"
                                                        id="io22sg"
                                                        className="custom-radio-box-two"
                                                    >
                                                        {t('contact.groom')}
                                                        <input
                                                            data-uuid="65ac636d57968"
                                                            name="isGuest"
                                                            type="radio"
                                                            value="groom"
                                                            checked={
                                                                formData.isGuest ===
                                                                "groom"
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <span
                                                            data-uuid="65ac636d57971"
                                                            id="i7rimz"
                                                            className="checkmark"
                                                        ></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                data-uuid="65ac636d579d3"
                                                id="iucp4r"
                                                className="form-group col-lg-12"
                                            >
                                                <div
                                                    data-uuid="65ac636d579db"
                                                    id="i2lzwl"
                                                    className="input-outer"
                                                >
                                                    <textarea
                                                        data-uuid="65ac636d579e3"
                                                        placeholder={t('contact.sendWishes')}
                                                        name="content"
                                                        value={formData.content}
                                                        required
                                                        onChange={handleChange}
                                                        id="iooubj"
                                                        className="vs-attendance-message"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div
                                                data-uuid="65ac636d579ec"
                                                id="iv2cxg"
                                                className="form-group col-lg-12"
                                            >
                                                <button
                                                    data-uuid="65ac636d579f4"
                                                    name="submit-form"
                                                    type="submit"
                                                    id="ikc17i"
                                                    className="theme-btn btn-submit"
                                                    // disabled
                                                >
                                                    <span
                                                        data-uuid="65ac636d579fd"
                                                        id="id1tzg"
                                                        className="btn-title"
                                                    >
                                                        {t('contact.send')}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div
                            id="ikcuqd"
                            data-uuid="65ac636d57a05"
                            data-wow-delay="200ms"
                            className="image-column col-xl-7 col-lg-6 wow fadeInRight animated animated"
                            style={{
                                boxSizing: "border-box",
                                visibility: "visible",
                                animationDelay: "200ms",
                                animationName: "fadeInRight",
                            }}
                        >
                            <div
                                data-uuid="65ac636d57a0e"
                                id="i3rdrr"
                                className="inner-column"
                                style={{ boxSizing: "border-box" }}
                            >
                                <div
                                    className="image-box"
                                    data-uuid="65ac636d57a17"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57a1f"
                                    >
                                        <a
                                            href="./img/album/album_13.jpg"
                                            className="lightbox-image"
                                            data-fancybox=""
                                            data-uuid="65ac636d57a28"
                                        >
                                            <img
                                                src="./img/album/album_13.jpg"
                                                alt="img"
                                            />
                                        </a>
                                    </figure>
                                </div>
                                <div
                                    data-uuid="65ac636d57a39"
                                    id="id8xer"
                                    className="content-box"
                                    style={{ boxSizing: "border-box" }}
                                >
                                    <figure
                                        data-uuid="65ac636d57a42"
                                        id="ithfar"
                                        className="image"
                                        style={{ boxSizing: "border-box" }}
                                    >
                                        <img
                                            data-uuid="65ac636d57a4a"
                                            alt="Image"
                                            src="./img/icon-cone.png"
                                            data-editable="true"
                                            id="iuhyld"
                                            style={{
                                                boxSizing: "border-box",
                                                objectFit: "cover",
                                                width: "auto",
                                                height: "auto",
                                            }}
                                        />
                                    </figure>
                                    <div
                                        data-uuid="65ac636d57a53"
                                        id="isk1z2"
                                        className="title-box"
                                        style={{ boxSizing: "border-box" }}
                                    >
                                        <h4
                                            data-uuid="65ac636d57a5c"
                                            data-editable="true"
                                            id="i738kl"
                                            className="title"
                                            style={{ boxSizing: "border-box" }}
                                        >
                                            {t('contact.loveMessage1')}
                                        </h4>
                                        <div
                                            data-uuid="65ac636d57a65"
                                            id="iacnaa"
                                            className="text"
                                            style={{ boxSizing: "border-box" }}
                                        >
                                            <span
                                                data-uuid="65ac636d57a6d"
                                                data-editable="true"
                                                id="irwsau"
                                            >
                                                {t('contact.loveMessage2')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactSection;
