import React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import "aos/dist/aos.css";

function CountdownSection() {
    const { t } = useTranslation();
    const targetDate = new Date("2026-03-30T17:00:00");

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            data-uuid="65ac636d575cc"
            data-hidable="true"
            data-movable="true"
            id="igu5hh"
            className="countdown-section-two pt-0"
        >
            <div
                data-uuid="65ac636d575d1"
                id="i4mz9i"
                className="bg bg-pattern-4"
            ></div>
            <div data-uuid="65ac636d575d6" id="ie4lfd" className="anim-icons">
                <div
                    data-uuid="65ac636d575db"
                    id="illt62"
                    className="icon-flower-3"
                ></div>
                <div
                    data-uuid="65ac636d575e0"
                    id="ine1gk"
                    className="icon-flower-4"
                ></div>
            </div>
            <div
                data-uuid="65ac636d575e5"
                id="ia54mx"
                className="auto-container"
            >
                <div
                    data-uuid="65ac636d575ea"
                    id="im7xdg"
                    className="sec-title text-center style-two"
                >
                    <span
                        data-uuid="65ac636d575ee"
                        data-editable="true"
                        id="ioc0pe"
                        className="sub-title"
                    >
                        {t('countdown.subtitle')}
                    </span>
                    <h2
                        data-uuid="65ac636d575f3"
                        data-editable="true"
                        id="i8c1o6"
                    >
                        {t('countdown.title')}
                    </h2>
                    <div data-uuid="65ac636d575f8" id="isypt8" className="text">
                        <span
                            data-uuid="65ac636d575fd"
                            data-editable="true"
                            id="it2ynf"
                        >
                            {t('countdown.description')}
                        </span>
                    </div>
                </div>
                <div
                    id="ikzh5p"
                    data-uuid="65ac636d57602"
                    className="outer-box wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                    <div
                        data-uuid="65ac636d57608"
                        id="irhw1s"
                        className="time-counter"
                        data-aos="fade-up"
                    >
                        <div
                            data-uuid="65ac636d5760d"
                            id="ir3g0v"
                            className="time-countdown"
                        >
                            <div
                                data-uuid="65ac636d57612"
                                id="i28ef9"
                                className="counter-column"
                            >
                                <span
                                    data-uuid="65ac636d57617"
                                    id="iajmzl"
                                    className="count vs-time-days"
                                >
                                    {timeLeft.days}
                                </span>
                                <sub data-uuid="65ac636d5761c" id="ionppw">
                                    {t('countdown.days')}
                                </sub>
                            </div>
                            <div
                                data-uuid="65ac636d57621"
                                id="iznh6i"
                                className="counter-column"
                            >
                                <span
                                    data-uuid="65ac636d57626"
                                    id="i5o6ea"
                                    className="count vs-time-hours"
                                >
                                    <div>{timeLeft.hours}</div>
                                </span>
                                <sub data-uuid="65ac636d5762b" id="ibw0nb">
                                    {t('countdown.hours')}
                                </sub>
                            </div>
                            <div
                                data-uuid="65ac636d57631"
                                id="ix6na3"
                                className="counter-column"
                            >
                                <span
                                    data-uuid="65ac636d57636"
                                    id="iwq1sa"
                                    className="count vs-time-minutes"
                                >
                                    <div>{timeLeft.minutes}</div>
                                </span>
                                <sub data-uuid="65ac636d5763b" id="ifjtzd">
                                    {t('countdown.minutes')}
                                </sub>
                            </div>
                            <div
                                data-uuid="65ac636d57641"
                                id="i5w4s3"
                                className="counter-column"
                            >
                                <span
                                    data-uuid="65ac636d57646"
                                    id="imfd7v"
                                    className="count vs-time-seconds"
                                >
                                    <div>{timeLeft.seconds}</div>
                                </span>
                                <sub data-uuid="65ac636d5764b" id="inx0wb">
                                    {t('countdown.seconds')}
                                </sub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountdownSection;
