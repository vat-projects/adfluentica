import React, { useState, useId } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import useCountryCode from "@/utils/useCountryCode";
import Link from "next/link";
import Snipper from "@/icons/loading/Snipper";
import { excludedCountries } from "@/utils/countries";

// CustomSelect компонент
const CustomSelect = ({ name, options, ...props }) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext();
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
        value={options.find((option) => option.value === values[name])}
        className={touched[name] && errors[name] ? "invalid" : ""}
        classNamePrefix="react-select"
        instanceId={selectId}
        placeholder=""
      />
      {/* {touched[name] && errors[name] ? (
                <div className="error">{errors[name]}</div>
            ) : null} */}
    </div>
  );
};

function JoinForm({ onSuccess }) {
  const countryCode = useCountryCode();
  const [isFormVisible, setIsFormVisible] = useState(true);

  const validationSchema = Yup.object({
    yourName: Yup.string().required("The field is required."),
    are: Yup.string().required("The field is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("The field is required."),
    phone: Yup.string().required("The field is required."),
    message: Yup.string().required("The field is required."),
    agreeToPolicy: Yup.boolean().oneOf(
      [true],
      "You must agree to the Privacy Policy."
    ),
  });

  const initialValues = {
    yourName: "",
    are: "",
    email: "",
    phone: "",
    message: "",
    agreeToPolicy: false,
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("/api/emails/join", {
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
          setIsFormVisible(false);
          if (onSuccess) {
            onSuccess(); // Вызов переданного коллбэка
          }
        }, 400);
      } else {
        setSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  const options = [
    { value: "advertiser", label: "Advertiser" },
    { value: "publisher", label: "Publisher" },
  ];

  return (
    <div className="join-form">
      {isFormVisible ? (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, status, errors, touched }) => (
            <div className="wrapper">
              <div className="content">
                <h2 className="content__title">
                  Adfluentica Registration Request
                </h2>
                <div className="content__wrapper">
                  <img
                    src="/images/popup-img-01.jpg"
                    alt="image"
                    className="content__image"
                  />
                  <Form className="form">
                    <div
                      className={`row ${
                        touched.yourName && errors.yourName ? "invalid" : ""
                      }`}
                    >
                      <span className="label">Your Name</span>
                      <Field name="yourName">
                        {({ field }) => <input {...field} type="text" />}
                      </Field>
                    </div>

                    <div
                      className={`row _select ${
                        touched.are && errors.are ? "invalid" : ""
                      }`}
                    >
                      <span className="label">Your Are</span>
                      <Field name="are">
                        {({ field, form }) => (
                          <CustomSelect
                            name={field.name}
                            options={options}
                            value={options.find(
                              (option) => option.value === field.value
                            )}
                            onChange={(selectedOption) =>
                              form.setFieldValue(
                                field.name,
                                selectedOption.value
                              )
                            }
                          />
                        )}
                      </Field>
                    </div>

                    <div
                      className={`row _phone ${
                        touched.phone && errors.phone ? "invalid" : ""
                      }`}
                    >
                      <span className="label">Your Phone</span>
                      <Field name="phone">
                        {({ field }) => (
                          <PhoneInput
                            country={countryCode}
                            excludeCountries={excludedCountries}
                            value={field.value}
                            onChange={(value) =>
                              field.onChange({
                                target: { name: "phone", value },
                              })
                            }
                          />
                        )}
                      </Field>
                    </div>

                    <div
                      className={`row ${
                        touched.email && errors.email ? "invalid" : ""
                      }`}
                    >
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

                    <div
                      className={`row _policy ${
                        touched.agreeToPolicy && errors.agreeToPolicy
                          ? "invalid"
                          : ""
                      }`}
                    >
                      <Field name="agreeToPolicy">
                        {({ field }) => (
                          <label
                            className={`checkbox-label ${
                              field.value ? "_active" : ""
                            }`}
                          >
                            <input {...field} type="checkbox" />
                            <span>
                              I accept the{" "}
                              <Link href="/terms-of-service">
                                Terms of Service
                              </Link>{" "}
                              and understand that my data will be securely
                              stored in accordance with the policy.
                            </span>
                          </label>
                        )}
                      </Field>
                    </div>

                    {Object.keys(errors).length > 0 && (
                      <span className="general-error">
                        Please correct the errors above.
                      </span>
                    )}

                    <button
                      type="submit"
                      className="button"
                      disabled={isSubmitting}
                    >
                      Apply now
                    </button>
                    {isSubmitting && (
                      <div className="loading-icon">
                        <Snipper />
                      </div>
                    )}
                  </Form>
                </div>
              </div>
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
            <button className="button" onClick={() => window.location.reload()}>
              Return
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JoinForm;
