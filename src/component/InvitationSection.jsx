import React from "react";
import { useTranslation } from "react-i18next";

function InvitationSection() {
    const { t } = useTranslation();

    return (
        <section className="wpo-event-section section-padding">
            <div id="iibdl" data-uuid="65ac636d574b6" className="container-fluid">
                <div id="iz6qk" data-uuid="65ac636d574b9" className="row">
                    <div
                        id="iyky5"
                        data-uuid="65ac636d574bc"
                        className="col-sm-12 col-lg-6 text-center d-flex flex-column align-items-center"
                        style={{ padding: "0 20px" }}
                    >
                        <div
                            data-uuid="65ac636d574be"
                            id="i9c0u"
                            style={{ maxWidth: "500px", maxHeight: "500px" }}
                        >
                            <img
                                data-uuid="65ac636d574c1"
                                id="ir2n7"
                                data-editable="true"
                                src="./img/save-the-date.png"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <h3
                            id="i6wj9"
                            data-uuid="65ac636d574c5"
                            data-editable="true"
                            className="mt-5 h3"
                        >
                            {t('banner.groom')} &amp; {t('banner.bride')}
                        </h3>
                    </div>
                    <div
                        id="i6sun"
                        data-uuid="65ac636d574c8"
                        className="col-lg-6 col-sm-12 card-description"
                    >
                        <div
                            id="i43q2"
                            data-uuid="65ac636d574cb"
                            className="row text-center"
                        >
                            <div
                                id="ioyuf"
                                data-uuid="65ac636d574ce"
                                className="col-lg-4 col-4"
                            >
                                <h4
                                    id="isagk"
                                    data-uuid="65ac636d574d1"
                                    data-editable="true"
                                    className="text-uppercase font-questrial"
                                >
                                    {t('invitation.groomFamily')}
                                </h4>
                                <h5
                                    id="i9iirv"
                                    data-uuid="65ac636d574d4"
                                    data-editable="true"
                                    className="font-questrial mt-4"
                                >
                                    {t('invitation.groomFather')}
                                </h5>
                                <h5
                                    id="ibftnw"
                                    data-uuid="65ac636d574d7"
                                    data-editable="true"
                                    className="font-questrial"
                                >
                                    {t('invitation.groomMother')}
                                </h5>
                            </div>
                            <div
                                id="ibi5kz"
                                data-uuid="65ac636d574db"
                                className="col-lg-4 col-4"
                            >
                                <img
                                    data-uuid="65ac636d574de"
                                    height="100"
                                    width="250"
                                    data-editable="true"
                                    id="io6n2"
                                    src="./img/flower.png"
                                    style={{
                                        width: "250px",
                                        height: "100px",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                            <div
                                id="i6shqp"
                                data-uuid="65ac636d574e1"
                                className="col-lg-4 col-4"
                            >
                                <h4
                                    id="iwidvp"
                                    data-uuid="65ac636d574e5"
                                    data-editable="true"
                                    className="text-uppercase font-questrial"
                                >
                                    {t('invitation.brideFamily')}
                                </h4>
                                <h5
                                    id="i6qzt7"
                                    data-uuid="65ac636d574e8"
                                    data-editable="true"
                                    className="font-questrial mt-4"
                                >
                                    {t('invitation.brideFather')}
                                </h5>
                                <h5
                                    id="ibftnw"
                                    data-uuid="65ac636d574d7"
                                    data-editable="true"
                                    className="font-questrial"
                                >
                                    {t('invitation.brideMother')}
                                </h5>
                            </div>
                        </div>
                        <div
                            id="i92rgh"
                            data-uuid="65ac636d574ef"
                            className="row text-center mt-4"
                        >
                            <h3
                                id="i3kalj"
                                data-uuid="65ac636d574f2"
                                data-editable="true"
                                className="font-questrial fw-bold"
                            >
                                {t('invitation.invitation')}
                            </h3>
                            <div id="ix4xqv">
                                <h4
                                    id="ivy7a8"
                                    data-uuid="65ac636d574f9"
                                    data-editable="true"
                                    className="font-questrial mt-1 vs-attendance-name-text"
                                    style={{ fontWeight: 600, display: "inline" }}
                                >
                                    {t('invitation.invitationText')}
                                </h4>
                            </div>
                            <h5
                                id="ixzonx"
                                data-uuid="65ac636d57500"
                                data-editable="true"
                                className="font-questrial mt-1 vs-attendance-name-text"
                            >
                                {t('invitation.blessing')}
                            </h5>
                        </div>
                        <div
                            id="i9lsh9"
                            data-uuid="65ac636d57503"
                            className="row mt-5 d-flex align-items-center"
                        >
                            <div
                                id="i52h6h"
                                data-uuid="65ac636d57507"
                                className="col-lg-5 text-center"
                            >
                                <h2
                                    id="ijlf1i"
                                    data-uuid="65ac636d5750b"
                                    data-editable="true"
                                    className="invitator-name"
                                >
                                    {t('banner.groom')}
                                </h2>
                            </div>
                            <div
                                id="igxru2"
                                data-uuid="65ac636d5750e"
                                className="col-lg-2 text-center"
                            >
                                <img
                                    data-uuid="65ac636d57512"
                                    height="50"
                                    width="50"
                                    id="ionwh6"
                                    data-editable="true"
                                    src="./img/d-heart.png"
                                />
                            </div>
                            <div
                                id="io889s"
                                data-uuid="65ac636d57516"
                                className="col-lg-5 text-center bride-name"
                            >
                                <h2
                                    id="ib08ee"
                                    data-uuid="65ac636d57522"
                                    data-editable="true"
                                    className="invitator-name"
                                >
                                    {t('banner.bride')}
                                </h2>
                            </div>
                        </div>
                        <div
                            id="i8d20k"
                            data-uuid="65ac636d57527"
                            className="text-center mt-5"
                        >
                            <h4
                                id="i0oaij1"
                                data-uuid="65ac636d5752f1"
                                data-editable="true"
                                className="fw-bold font-questrial mt-2 mb-3"
                                style={{ fontSize: "1.3rem", color: "#333" }}
                            >
                                {t('invitation.groomFamily')}
                            </h4>
                            <h5
                                id="ix47g81"
                                data-uuid="65ac636d575331"
                                data-editable="true"
                                className="font-questrial mt-2"
                            >
                                {t('invitation.groomTime')}
                            </h5>
                            <h5
                                id="i30eqh1"
                                data-uuid="65ac636d5753b1"
                                data-editable="true"
                                className="font-questrial mt-2"
                            >
                                {t('invitation.groomAddress')}
                            </h5>

                            <h4
                                id="i0oaij2"
                                data-uuid="65ac636d5752f2"
                                data-editable="true"
                                className="fw-bold font-questrial mt-5 mb-3"
                                style={{ fontSize: "1.3rem", color: "#333" }}
                            >
                                {t('invitation.brideFamily')}
                            </h4>
                            <h5
                                id="ix47g82"
                                data-uuid="65ac636d575332"
                                data-editable="true"
                                className="font-questrial mt-2"
                            >
                                {t('invitation.brideTime')}
                            </h5>
                            <h5
                                id="i30eqh2"
                                data-uuid="65ac636d5753b2"
                                data-editable="true"
                                className="font-questrial mt-2"
                            >
                                {t('invitation.brideAddress')}
                            </h5>

                            <h5
                                id="ixrcjo"
                                data-uuid="65ac636d57537"
                                data-editable="true"
                                className="font-questrial mt-5 fst-italic"
                                style={{ color: "#e74c3c", fontWeight: "600" }}
                            >
                                {t('invitation.note')}
                            </h5>

                            <h5
                                id="in0cbl"
                                data-uuid="65ac636d5753f"
                                data-editable="true"
                                className="font-dancing mt-5"
                            >
                                {t('invitation.thankMessage1')}
                            </h5>
                            <h5
                                id="in0cbl2"
                                data-uuid="65ac636d5753f2"
                                data-editable="true"
                                className="font-dancing mt-2"
                            >
                                {t('invitation.thankMessage2')}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InvitationSection;
