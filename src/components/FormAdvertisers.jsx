import React, { useState, useId } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import useCountryCode from "@/utils/useCountryCode";
import Link from "next/link";
import Snipper from "@/icons/loading/Snipper";

// CustomSelect компонент
const CustomSelect = ({ name, options, ...props }) => {
    const { setFieldValue, setFieldTouched, errors, touched, values } = useFormikContext();
    const selectId = useId();

    const handleChange = (selectedOption) => {
        setFieldValue(name, selectedOption ? selectedOption.value : "");
        setFieldTouched(name, true);
    };

    return (
        <div className="wrapper-select">
            <Select
                {...props}
                options={options}
                onChange={handleChange}
                value={options.find(option => option.value === values[name])}
                className={touched[name] && errors[name] ? "invalid" : ""}
                classNamePrefix="react-select"
                instanceId={selectId}
            />
            {/* {touched[name] && errors[name] ? (
                <div className="error">{errors[name]}</div>
            ) : null} */}
        </div>
    );
};

function FormAdvertisers() {
    const countryCode = useCountryCode();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true);

    const validationSchema = Yup.object({
        yourName: Yup.string().required("The field is required."),
        are: Yup.string().required("The field is required."),
        email: Yup.string().email("Invalid email address.").required("The field is required."),
        yourProduct: Yup.string().required("The field is required."),
        phone: Yup.string().required("The field is required."),
        message: Yup.string().required("The field is required."),
        agreeToPolicy: Yup.boolean().oneOf([true], "You must agree to the Privacy Policy."),
    });

    const initialValues = {
        yourName: "",
        are: "",
        yourProduct: "",
        email: "",
        phone: "",
        message: "",
        agreeToPolicy: false,
    };

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            const response = await fetch("/api/emails/advertisers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                setTimeout(() => {
                    setSubmitting(false);
                    resetForm();
                    setStatus({ success: true });
                    setIsSuccess(true);
                    setIsFormVisible(false);
                }, 400);
            } else {
                setStatus({ success: false });
            }
        } catch (error) {
            console.error(error);
            setStatus({ success: false });
            setSubmitting(false);
        }
    };

    const options = [
        { value: "", label: "" },
        { value: "landing_page", label: "Landing Page" },
        { value: "website_marketing_design", label: "Website Marketing Design" },
        { value: "content", label: "Content" },
        { value: "other", label: "Other" },
        { value: "i_am_not_sure", label: "I am not sure" },
    ];

    return (
        <div className="request-form">
            {isFormVisible ? (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, status, errors, touched }) => (
                        <div className="wrapper">
                            <Form className="form">

                                <div className={`row ${touched.yourName && errors.yourName ? "invalid" : ""}`}>
                                    <span className="label">Your Name</span>
                                    <Field name="yourName">
                                        {({ field }) => <input {...field} type="text" />}
                                    </Field>
                                </div>

                                <div className={`row _select ${touched.are && errors.are ? "invalid" : ""}`}>
                                    <span className="label">Your Development Needs:</span>
                                    <Field name="are">
                                        {({ field, form }) => (
                                            <CustomSelect
                                                name={field.name}
                                                options={options}
                                                value={options.find(option => option.value === field.value)}
                                                onChange={(selectedOption) => form.setFieldValue(field.name, selectedOption.value)}
                                            />
                                        )}
                                    </Field>
                                </div>

                                <div className={`row _phone ${touched.phone && errors.phone ? "invalid" : ""}`}>
                                    <span className="label">Your Phone</span>
                                    <Field name="phone">
                                        {({ field }) => (
                                            <PhoneInput
                                                country={countryCode}
                                                value={field.value}
                                                onChange={(value) => field.onChange({ target: { name: "phone", value } })}
                                            />
                                        )}
                                    </Field>
                                </div>

                                <div className={`row ${touched.yourProduct && errors.yourProduct ? "invalid" : ""}`}>
                                    <span className="label">Your Product</span>
                                    <Field name="yourProduct">
                                        {({ field }) => <input {...field} type="text" />}
                                    </Field>
                                </div>

                                <div className={`row ${touched.email && errors.email ? "invalid" : ""}`}>
                                    <span className="label">Your Email</span>
                                    <Field name="email">
                                        {({ field }) => <input {...field} type="email" />}
                                    </Field>
                                </div>

                                <div className="row">
                                    <span className="label">Your Message</span>
                                    <Field name="message">
                                        {({ field }) => <input {...field} />}
                                    </Field>
                                </div>

                                <div className={`row _policy ${touched.agreeToPolicy && errors.agreeToPolicy ? "invalid" : ""}`}>
                                    <Field name="agreeToPolicy">
                                        {({ field }) => (
                                            <label className={`checkbox-label ${field.value ? "_active" : ""}`}>
                                                <input {...field} type="checkbox" />
                                                <span>
                                                    I accept the <Link href="/terms-of-service">Terms of Service</Link> and
                                                    understand that my data will be securely stored in accordance with the policy.
                                                </span>
                                            </label>
                                        )}
                                    </Field>
                                </div>

                                {Object.keys(errors).length > 0 && (
                                    <span className="general-error">Please correct the errors above.</span>
                                )}

                                <button type="submit" className="button" disabled={isSubmitting}>
                                    Send Request
                                </button>
                                {isSubmitting && (
                                    <div className="loading-icon _adv">
                                        <Snipper />
                                    </div>
                                )}
                            </Form>
                            {status && status.success && (
                                <div className="success-message">
                                    <span>Thank you for your request!</span>
                                    We will review it and contact you shortly.
                                    <button
                                        className="button"
                                        onClick={() => window.location.reload()}
                                    >
                                        Return
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </Formik>
            ) : (
                <div className="success-message">
                    <div className="success-message__wrapper">
                        <span>Thank you for your request!</span>
                        We will review it and contact you shortly.
                        <button
                            className="button"
                            onClick={() => window.location.reload()}
                        >
                            Return
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FormAdvertisers;