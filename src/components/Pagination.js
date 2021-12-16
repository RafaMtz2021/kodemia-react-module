import React from "react";

function Pagination(prev, first, second, third, next) {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination fw-bolder">
          <li className="page-item">
            <a className="page-link" href="javascript:">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
