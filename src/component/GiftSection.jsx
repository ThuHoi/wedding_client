import React from "react";
import { useTranslation } from "react-i18next";

function GiftSection() {
    const { t } = useTranslation();

    return (
        <>
            <section
                data-uuid="65ac636d57d58"
                data-hidable="true"
                data-movable="true"
                id="event-2"
                className="gift-section services-section"
                style={{
                    boxSizing: "border-box",
                    marginTop: "50px",
                    paddingBottom: "200px",
                }}
            >
                <div
                    id="in02ea"
                    data-uuid="65ac636d57d63"
                    className="auto-container"
                    style={{ boxSizing: "border-box" }}
                >
                    <div
                        data-uuid="65ac636d57d6e"
                        id="ikkj0n"
                        className="sec-title text-center"
                        style={{ boxSizing: "border-box" }}
                    >
                        <div
                            data-uuid="65ac636d57d79"
                            id="ir89yx"
                            className="icon-divider"
                            style={{ boxSizing: "border-box" }}
                        />
                        <span
                            data-uuid="65ac636d57d84"
                            data-editable="true"
                            id="ijnh61"
                            className="sub-title"
                            style={{ boxSizing: "border-box" }}
                        >
                            {t('gift.title')}
                        </span>
                        <h2
                            data-uuid="65ac636d57d8f"
                            data-editable="true"
                            id="i7a1b1"
                            style={{ boxSizing: "border-box" }}
                        >
                            {t('gift.gift')}
                        </h2>
                        <span
                            data-uuid="65ac636d57d9a"
                            data-editable="true"
                            id="itxqb8"
                            style={{
                                boxSizing: "border-box",
                                fontSize: "1.25rem",
                            }}
                        >
                            {t('gift.earlyGift')}
                        </span>
                    </div>

                    <div
                        id="idjdcc"
                        data-uuid="65ac636d57da5"
                        data-copyable="true"
                        className="text-center"
                        style={{
                            boxSizing: "border-box",
                            marginBottom: "15px",
                        }}
                    >
                        <span
                            id="ib7psu"
                            data-uuid="65ac636d57db0"
                            data-editable="true"
                            className="font-questrial"
                            style={{
                                boxSizing: "border-box",
                                display: "block",
                            }}
                        >
                            <b style={{ fontWeight: "900" }}>{t('gift.bankAccount')}:</b> 19029232623011
                        </span>
                        <span
                            id="i0ezp1"
                            data-uuid="65ac636d57dbb"
                            data-editable="true"
                            className="font-questrial mt-1"
                            style={{
                                boxSizing: "border-box",
                                display: "block",
                            }}
                        >
                            <b style={{ fontWeight: "900" }}>{t('gift.accountHolder')}:</b> LE MINH SON
                        </span>
                        <span
                            id="ihm8s5"
                            data-uuid="65ac636d57dc6"
                            data-editable="true"
                            className="font-questrial mt-1"
                            style={{
                                boxSizing: "border-box",
                                display: "block",
                            }}
                        >
                            <b style={{ fontWeight: "900" }}>{t('gift.bank')}:</b>{" "}
                            <span
                                id="ies4e9"
                                style={{
                                    boxSizing: "border-box",
                                    color: "#333333",
                                }}
                            >
                                TECHCOMBANK
                            </span>
                        </span>
                        <img
                            data-uuid="65ac636d57ddc"
                            height="250"
                            width="250"
                            data-editable="true"
                            id="imyb31"
                            alt=""
                            src="/img/bank_1.png"
                            className="mt-4"
                            style={{
                                boxSizing: "border-box",
                                width: "250px",
                                height: "250px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                    <div
                        id="idjdcc"
                        data-uuid="65ac636d57da5"
                        data-copyable="true"
                        className="text-center"
                        style={{
                            boxSizing: "border-box",
                            marginBottom: "15px",
                        }}
                    >
                        <span
                            id="ib7psu"
                            data-uuid="65ac636d57db0"
                            data-editable="true"
                            className="font-questrial"
                            style={{
                                boxSizing: "border-box",
                                display: "block",
                            }}
                        >
                            <b style={{ fontWeight: "900" }}>{t('gift.bankAccount')}:</b> 109883512760
                        </span>
                        <span
                            id="i0ezp1"
                            data-uuid="65ac636d57dbb"
                            data-editable="true"
                            className="font-questrial mt-1"
                            style={{
                                boxSizing: "border-box",
                                display: "block",
                            }}
                        >
                            <b style={{ fontWeight: "900" }}>{t('gift.accountHolder')}:</b> HOANG THI HONG
                        </span>
                        <span
                            id="ihm8s5"
                            data-uuid="65ac636d57dc6"
                            data-editable="true"
                            className="font-questrial mt-1"
                            style={{
                                boxSizing: "border-box",
                                display: "block",
                            }}
                        >
                            <b style={{ fontWeight: "900" }}>{t('gift.bank')}:</b>{" "}
                            <span
                                id="ies4e9"
                                style={{
                                    boxSizing: "border-box",
                                    color: "#333333",
                                }}
                            >
                                VietinBank CN BA Dinh - PGD THANH CONG
                            </span>
                        </span>
                        <img
                            data-uuid="65ac636d57ddc"
                            height="250"
                            width="250"
                            data-editable="true"
                            id="imyb31"
                            alt=""
                            src="/img/bank_2.jpg"
                            className="mt-4"
                            style={{
                                boxSizing: "border-box",
                                width: "250px",
                                height: "250px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default GiftSection;
