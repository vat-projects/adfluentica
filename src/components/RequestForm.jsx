"use client";
import React, { useState, useId } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import Select from "react-select";
import Link from "next/link";
import Snipper from "@/icons/loading/Snipper";

// Custom Select component (unchanged)
const CustomSelect = ({ name, options, ...props }) => {
    const { setFieldValue, setFieldTouched, errors, touched, values } = useFormikContext();
    /* const selectId = useId(); */
    const selectId = `select-id-${name}`;

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
                inputId={`react-select-${selectId}`}
                value={options.find(option => option.value === values[name])}
                className={touched[name] && errors[name] ? "invalid" : ""}
                classNamePrefix="custom-select"
                placeholder="Select..."
            />
            {touched[name] && errors[name] && (
                <div className="error">{errors[name]}</div>
            )}
        </div>
    );
};

function RequestForm() {
    const countryCode = useCountryCode();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isClient, setIsClient] = useState(false); 

    const validationSchema = Yup.object({
        yourName: Yup.string().required("The field is required."),
        email: Yup.string()
            .email("Please enter a valid email address.")
            .required("The field is required."),
        phone: Yup.string().required("The field is required."),
        activity: Yup.string().required("The field is required."),
        message: Yup.string().required("The field is required."),
        urgency: Yup.string().required("Select an option."),
        agreeToPolicy: Yup.boolean().oneOf([true], "You must agree to the Privacy Policy."),
    });

    const initialValues = {
        yourName: "",
        activity: "",
        email: "",
        phone: "",
        message: "",
        urgency: "",
        agreeToPolicy: false,
    };

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            const response = await fetch("/api/emails/request", {
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
        { value: "advertiser", label: "Advertiser" },
        { value: "publisher", label: "Publisher" },
    ];

    return (
        <div className="request-form">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, status, errors, touched }) => (
                    <div className="wrapper">
                        <Form className="form">
                            <Field name="yourName">
                                {({ field, form }) => (
                                    <div className="row">
                                        <span className="label">Your Name</span>
                                        <input
                                            {...field}
                                            type="text"
                                            className={
                                                form.touched.yourName && form.errors.yourName
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                        <ErrorMessage name="yourName" component="div" className="error" />
                                    </div>
                                )}
                            </Field>


                            <Field name="urgency">
                                {({ field, form }) => (
                                    <div className="row _select">
                                        <span className="label">You Are</span>
                                        <CustomSelect
                                            {...field}
                                            options={options}
                                            name="urgency"  // Передаем name как пропс в CustomSelect
                                            className={
                                                form.touched.urgency && form.errors.urgency
                                                    ? "invalid"
                                                    : ""
                                            }
                                            classNamePrefix="custom-select"
                                            placeholder="Select..."
                                        />
                                    </div>
                                )}
                            </Field>


                            <Field name="email">
                                {({ field, form }) => (
                                    <div className="row">
                                        <span className="label">Your Mail</span>
                                        <input
                                            {...field}
                                            type="email"
                                            className={
                                                form.touched.email && form.errors.email
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                        <ErrorMessage name="email" component="div" className="error" />
                                    </div>
                                )}
                            </Field>

                            <Field name="message">
                                {({ field, form }) => (
                                    <div className="row _textarea">
                                        <span className="label">Your Message</span>
                                        <textarea
                                            {...field}
                                            className={
                                                form.touched.message && form.errors.message
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                        <ErrorMessage name="message" component="div" className="error" />
                                    </div>
                                )}
                            </Field>

                            <Field name="phone">
                                {({ field, form }) => (
                                    <div className="row _phone">
                                        <span className="label">Your Phone</span>
                                        {/* Обратите внимание, что PhoneInput рендерится только на клиенте */}
                                        {isClient && (
                                            <PhoneInput
                                                country={countryCode}
                                                value={field.value}
                                                onChange={(value) => form.setFieldValue("phone", value)}
                                                className={form.touched.phone && form.errors.phone ? "invalid" : ""}
                                            />
                                        )}
                                        <ErrorMessage name="phone" component="div" className="error" />
                                    </div>
                                )}
                            </Field>

                            <div className="row _policy">
                                <Field name="agreeToPolicy">
                                    {({ field, form }) => (
                                        <div className="wrapper">
                                            <label
                                                className={`checkbox-label ${field.value ? "_active" : ""} ${form.touched.agreeToPolicy && form.errors.agreeToPolicy
                                                    ? "invalid"
                                                    : ""
                                                    }`}
                                            >
                                                <input
                                                    {...field}
                                                    type="checkbox"
                                                    checked={field.value}
                                                    className={
                                                        form.touched.agreeToPolicy && form.errors.agreeToPolicy
                                                            ? "invalid"
                                                            : ""
                                                    }
                                                />
                                                <span>
                                                    I accept the <Link href="/terms-of-service">Terms of Service</Link> and understand that my data will be securely stored in accordance with the policy.
                                                </span>
                                            </label>
                                            <ErrorMessage name="agreeToPolicy" component="div" className="error" />
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <button
                                type="submit"
                                className="button"
                                disabled={isSubmitting}
                            >
                                Apply Now
                            </button>
                            {isSubmitting && (
                                <div className="loading-icon">
                                    <Snipper />
                                </div>
                            )}
                        </Form>
                        {isSuccess && (
                            <div className="success-message">
                                Thank you for your request to join Adfluentica!
                                <br />
                                We've received your request and will review it shortly.
                            </div>
                        )}
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default RequestForm;