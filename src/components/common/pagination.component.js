import React from "react"
import { Link } from "gatsby"

export const Pagination = ({ currentPage, numPages, path }) => {
  return (
    <div className="container mb-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            {currentPage === 0 ? (
              <span className="page-link">&lt;</span>
            ) : (
              <Link
                className="page-link"
                to={currentPage - 1 === 0 ? path : `${path}/${currentPage}`}>
                &lt;
              </Link>
            )}
          </li>
          {Array.from({ length: numPages }).map((_, index) => {
            return (
              <li className="page-item">
                <Link className="page-link" activeClassName="active" to={index === 0 ? path : `${path}/${index + 1}`}>{index + 1}</Link>
              </li>
            )
          })}
          <li className="page-item">
            {
              currentPage === numPages - 1
                ? (<span className="page-link">&gt;</span>)
                : (
                  <Link
                    className="page-link"
                    to={`${path}/${currentPage + 2}`}>
                    &gt;
                  </Link>
                )
            }
          </li>
        </ul>
      </nav>
    </div>
  )
}
