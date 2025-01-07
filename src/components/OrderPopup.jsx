"use client";
import React, { useState } from "react";
import { usePopup } from "@/context/PopupsContext";
import JoinForm from "./JoinForm";

const OrderPopup = () => {
    const { orderPopupDisplay, setOrderPopupDisplay } = usePopup();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const closePopup = () => {
        setOrderPopupDisplay(false);
    };

    const handleFormSuccess = () => {
        setIsFormSubmitted(true);
    };

    if (!orderPopupDisplay) return null;

    return (
        <div className={`request-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
            <div className="overlay" onClick={closePopup}></div>
            <div className={`popup-inner ${isFormSubmitted ? "_hide" : ""}`}>
                <div className="join-popup">
                    <div className="join-popup__content">
                        <div className="join-popup__form">
                            <JoinForm onSuccess={handleFormSuccess} />
                            <button
                                className="join-popup__close"
                                onClick={closePopup}
                                aria-label="Close popup"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPopup;