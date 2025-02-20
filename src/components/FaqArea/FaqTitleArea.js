import { faqTitleArea } from "@/data/faqArea";
import handleSubmit from "@/utils/handleSubmit";
import React, { useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchIcon from "../Header/SearchIcon";
import { useDispatch, useSelector } from "react-redux";
import { setFaqsFilteredList } from "src/store/slices/faqsSlice";

const { tagline, title } = faqTitleArea;

const FaqTitleArea = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const { faqsList } = useSelector(({ faqs }) => faqs);

  const onChangeSearch = useCallback(() => {
    const filteredFaqs = faqsList?.filter((x) => {
      const searchVal = search?.toLowerCase()?.trim();
      return (
        x?.category?.toLowerCase()?.trim()?.includes(searchVal) ||
        x?.answer?.toLowerCase()?.trim()?.includes(searchVal) ||
        x?.question?.toLowerCase()?.trim()?.includes(searchVal)
      );
    });
    dispatch(setFaqsFilteredList(filteredFaqs));
  }, [search, faqsList]);

  return (
    <section className="faq-title-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="section-title text-center">
              <span>{tagline}</span>
              <h3 className="title">{title}</h3>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <form
                    onSubmit={handleSubmit(onChangeSearch)}
                    className="input-box"
                  >
                    <input
                      type="text"
                      placeholder="Search here anything...2121"
                      name="search"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                    <button>
                      <SearchIcon color="#674df0" />
                    </button>
                  </form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqTitleArea;
