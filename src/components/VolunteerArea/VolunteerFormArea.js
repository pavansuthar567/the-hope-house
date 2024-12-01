import { useFormik } from "formik";
import React, { useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import { volunteerFormArea } from "@/data/volunteerArea";
import { volunteerValidation } from "src/validation/volunteer";
import { useSelector, useDispatch } from "react-redux";
import { createVolunteer } from "src/_services/volunteer.service";

const { tagline, title, inputs } = volunteerFormArea;

const VolunteerFormArea = () => {
  const dispatch = useDispatch();

  const { crudVolunteerLoading, selectedVolunteer } = useSelector(
    ({ volunteer }) => volunteer
  );

  const initialVolunteer = useMemo(() => {
    const values = {
      ...selectedVolunteer,
      city: selectedVolunteer?.address?.city || "",
      state: selectedVolunteer?.address?.state || "",
    };
    delete values?.address;
    return values;
  }, []);

  const formik = useFormik({
    initialValues: initialVolunteer,
    validationSchema: volunteerValidation,
    onSubmit: async (values) => {
      const payload = {
        ...values,
        skills: [values?.skills],
        address: { city: values?.city, state: values?.state },
      };
      delete payload?.city;
      delete payload?.state;
      const isSuccess = await dispatch(createVolunteer(payload));
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
                    ({ id, type, name, placeholder, cols, rows, options }) => (
                      <Col
                        key={`form_col_${id}`}
                        lg={type ? 6 : 12}
                        md={type ? 6 : 12}
                      >
                        <div className="input-box mt-20">
                          {type === "select" ? (
                            <select
                              name={name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values[name] || ""}
                            >
                              <option value="" disabled>
                                {placeholder} *
                              </option>
                              {options.map((option, index) => (
                                <option
                                  key={`${option}_${index}`}
                                  value={option}
                                  className="text-gray-700"
                                >
                                  {option}
                                </option>
                              ))}
                            </select>
                          ) : type ? (
                            <input
                              type={type}
                              placeholder={`${placeholder} *`}
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
                              placeholder={`${placeholder} *`}
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
                    <div className="input-box mt-30 text-center">
                      <button
                        className="main-btn"
                        type="submit"
                        disabled={crudVolunteerLoading}
                      >
                        {crudVolunteerLoading
                          ? "Submitting..."
                          : "Apply to Volunteer"}
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

export default VolunteerFormArea;
