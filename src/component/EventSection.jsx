import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EventSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Thời gian animation (ms)
            once: false, // false để animation chạy lại mỗi lần scroll vào viewport
            mirror: true, // true để animation chạy lại khi scroll lên lại
        });
    }, []);
    return (
        <section
            id="ih5y8j"
            className="event-section-two"
            style={{ boxSizing: "border-box" }}
        >
            <div
                className="anim-icons full-width"
                style={{ boxSizing: "border-box" }}
            >
                <div
                    className="icon-flowers-6 bounce-y"
                    style={{ boxSizing: "border-box" }}
                />
                <div
                    className="icon-leaves-5 bounce-x"
                    style={{ boxSizing: "border-box" }}
                />
                <div
                    className="icon-leaves-6 bounce-x"
                    style={{ boxSizing: "border-box" }}
                />
            </div>

            <div className="auto-container" style={{ boxSizing: "border-box" }}>
                <div
                    className="sec-title text-center style-two"
                    style={{ boxSizing: "border-box" }}
                >
                    <span className="sub-title">Chuyện chúng mình</span>
                    <h2>Đã bắt đầu như thế nào</h2>
                </div>

                <div className="row" style={{ boxSizing: "border-box" }}>
                    {/* Block 1 */}
                    <div
                        className="event-block-two wow fadeInRight animated"
                        style={{ visibility: "visible" }}
                    >
                        <div className="inner-box" data-aos="fade-right">
                            <div className="date-column">
                                <div className="date-box">
                                    <div className="date">
                                        <span>3</span>January
                                    </div>
                                    <div className="icon-flower-6" />
                                    <div className="icon-flower-7" />
                                </div>
                            </div>
                            <div className="image-column">
                                <div className="image-box">
                                    <figure
                                        className="image"
                                        style={{ maxHeight: "277px" }}
                                    >
                                        <a href="./img/album/album_1.jpg">
                                            <img
                                                alt="Image"
                                                src="./img/album/album_1.jpg"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    maxHeight: "277px",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="content-column">
                                <div className="content-box">
                                    <h4 className="title">Lần đầu gặp mặt</h4>
                                    <div className="text">
                                        <br />
                                        Lần đầu chúng mình gặp nhau vào một ngày
                                        rất đỗi bình thường như bao ngày khác,
                                        nhưng lại để lại ấn tượng thật đặc biệt.
                                        Không có pháo hoa cũng chẳng có nhạc nền
                                        lẵng mạn chỉ là hai người xa lạ lần đầu
                                        trò truyện qua màn hình điện thoại ngập
                                        ngừng những lời chào và nụ cười bối rối.
                                        Vậy mà từ giây phút ấy, chúng mình dần
                                        trở nên thân quen, cùng nhau chia sẻ
                                        từng câu chuyện nhỏ và rồi chẳng biết từ
                                        bao giờ, người kia đã trở thành một phần
                                        không thể thiếu của mình.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Block 2 */}
                    <div
                        className="event-block-two style-two wow fadeInLeft animated"
                        style={{ visibility: "visible" }}
                    >
                        <div className="inner-box" data-aos="fade-left">
                            <div className="date-column">
                                <div className="date-box">
                                    <div className="date">
                                        <span>18</span>January
                                    </div>
                                    <div className="icon-flower-6" />
                                    <div className="icon-flower-7" />
                                </div>
                            </div>
                            <div className="image-column">
                                <div className="image-box">
                                    <figure className="image">
                                        <a href="./img/album/album_13.jpg">
                                            <img
                                                alt="Image"
                                                src="./img/album/album_13.jpg"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    maxHeight: "277px",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="content-column">
                                <div className="content-box">
                                    <h4 className="title">Anh ngỏ lời</h4>
                                    <div className="text">
                                        Ngày 18 tháng 1 – một ngày bình thường
                                        với nhiều người, nhưng với anh, đó là
                                        khoảnh khắc thật đặc biệt. Anh đã suy
                                        nghĩ rất lâu, chuẩn bị rất kỹ, chỉ để
                                        nói với em những điều thật lòng từ trái
                                        tim. Anh không mang đến điều gì quá lớn
                                        lao, chỉ là một bó hoa, một bài hát dịu
                                        dàng, và một lời trân thành muốn nói với
                                        em: Cảm ơn em vì đã đến trong cuộc đời
                                        anh. Và nếu có thể… từ nay về sau, chúng
                                        mình bắt đầu một hành trình mới, em nhé
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div
                        className="event-block-two wow fadeInRight animated"
                        style={{ visibility: "visible" }}
                    >
                        <div className="inner-box" data-aos="fade-right">
                            <div className="date-column">
                                <div className="date-box">
                                    <div className="date">
                                        <span>14</span>March
                                    </div>
                                    <div className="icon-flower-6" />
                                    <div className="icon-flower-7" />
                                </div>
                            </div>
                            <div className="image-column">
                                <div className="image-box">
                                    <figure
                                        className="image"
                                        style={{ maxHeight: "277px" }}
                                    >
                                        <a href="./img/album/album_4.jpg">
                                            <img
                                                alt="Image"
                                                src="./img/album/album_4.jpg"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    maxHeight: "277px",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="content-column">
                                <div className="content-box">
                                    <h4 className="title">
                                        Chính thức ở bên nhau
                                    </h4>
                                    <div className="text">
                                        Ngày 14 tháng 3, chúng mình hẹn hò ở một
                                        công viên nhỏ, không đông người, không
                                        ồn ào. Chỉ có gió nhẹ, tiếng chim hót và
                                        ánh mắt của em – dịu dàng như mọi lần. Ở
                                        khoảnh khắc ấy, anh hiểu rằng… không cần
                                        đợi thêm điều gì nữa. Anh trao cho em
                                        một chiếc nhẫn, không chỉ là món quà, mà
                                        là lời hứa – rằng từ hôm nay, nếu em
                                        đồng ý, chúng ta sẽ cùng nhau đi hết
                                        chặng đường còn lại. Em có đồng ý làm vợ
                                        anh nhé.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventSection;
