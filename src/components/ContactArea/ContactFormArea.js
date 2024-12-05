import { useFormik } from "formik";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import { contactFormArea } from "@/data/contactArea";
import { useSelector, useDispatch } from "react-redux";
import { createMessage } from "src/_services/message.service";
import { messageValidation } from "src/validation/message";

const { tagline, title, inputs } = contactFormArea;

const ContactFormArea = () => {
  const dispatch = useDispatch();

  const { crudMessageLoading } = useSelector(({ message }) => message);

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      number: "",
      message: "",
    },
    validationSchema: messageValidation,
    onSubmit: async (values) => {
      const payload = {
        firstName: values.fname,
        lastName: values.lname,
        email: values.email,
        phoneNumber: values.number,
        message: values.message,
      };
      const isSuccess = await dispatch(createMessage(payload));
      if (isSuccess) formik.resetForm();
    },
  });

  return (
    <section className="contact-form-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Title title={title} tagline={tagline} className="text-center" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <form onSubmit={formik.handleSubmit} id="contact-form">
              <div className="conact-form-item">
                <Row>
                  {inputs.map(
                    ({ id, type, name, placeholder, cols, rows, required }) => (
                      <Col
                        key={`form_col_${id}`}
                        lg={type ? 6 : 12}
                        md={type ? 6 : 12}
                      >
                        <div className="input-box mt-20">
                          {type ? (
                            <input
                              type={type}
                              placeholder={
                                required ? `${placeholder} *` : placeholder
                              }
                              name={name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values[name] || ""}
                            />
                          ) : (
                            <textarea
                              id="#"
                              cols={cols}
                              rows={rows}
                              placeholder={
                                required ? `${placeholder} *` : placeholder
                              }
                              name={name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values[name] || ""}
                            ></textarea>
                          )}
                          {formik.touched[name] && formik.errors[name] && (
                            <div
                              className="error-message"
                              style={{ color: "red" }}
                            >
                              {formik.errors[name]}
                            </div>
                          )}
                        </div>
                      </Col>
                    )
                  )}
                  <Col lg={12}>
                    <div className="input-box mt-20 text-center">
                      <button
                        className="main-btn"
                        type="submit"
                        disabled={crudMessageLoading}
                      >
                        {crudMessageLoading
                          ? "Submitting..."
                          : "Submit message"}
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </form>
            <p className="form-message"></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormArea;
