import React from "react";
import { Pagination, Col, Row } from "react-bootstrap";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Row className="justify-content-center mt-5">
      <Col className="text-center">
        <Pagination className="pagination-custom justify-content-center">
          <Pagination.First
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            const showPageNumber =
              pageNumber <= 2 ||
              pageNumber > totalPages - 2 ||
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);

            if (!showPageNumber) {
              if (pageNumber === 3 && currentPage > 4) {
                return (
                  <Pagination.Item key="ellipsis-start" disabled>
                    ...
                  </Pagination.Item>
                );
              }
              if (
                pageNumber === totalPages - 2 &&
                currentPage < totalPages - 3
              ) {
                return (
                  <Pagination.Item key="ellipsis-end" disabled>
                    ...
                  </Pagination.Item>
                );
              }
              return null; // Skip rendering this page number
            }
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => onPageChange(pageNumber)}
                className="pagination-item-custom"
                style={{
                  backgroundColor:
                    pageNumber === currentPage ? "#674df0" : "transparent",
                  color: pageNumber === currentPage ? "white" : "#000",
                }}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}
          <Pagination.Next
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </Col>
    </Row>
  );
};

export default CustomPagination;
