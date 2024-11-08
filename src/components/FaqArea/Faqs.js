import React, { useState } from "react";

const Faq = ({ id, faq, current, handleCurrent }) => {
  const { question, answer } = faq;
  const active = current === id;

  return (
    <div className={`accrodion overflow-hidden${active ? " active" : ""}`}>
      <div className="accrodion-inner">
        <div onClick={() => handleCurrent(id)} className="accrodion-title">
          <h4>
            <span>{id}.</span> {question}
          </h4>
        </div>
        <div className={`accrodion-content${active ? "" : " d-none"}`}>
          <div className={`inner animated${active ? " fadeInUp" : ""}`}>
            <p
              dangerouslySetInnerHTML={{
                __html: answer,
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faqs = ({ faqs = [], className = "" }) => {
  const [current, setCurrent] = useState(1);

  const handleCurrent = (current) => {
    setCurrent(current);
  };

  return (
    <div className={`faq-accordion overflow-hidden ${className}`}>
      <div
        className={`accrodion-grp${
          !className ? " animated fadeInLeft" : ""
        } faq-accrodion`}
      >
        {faqs.map((faq, index) => (
          <Faq
            id={index + 1}
            faq={faq}
            key={`${faq?.category}-${faq?._id}-${index}`}
            current={current}
            handleCurrent={handleCurrent}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
