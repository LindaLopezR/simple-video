import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const LabelNote = (props) => (
  <span className="label label-danger">{props.title}</span>
);

export const TitleSection = (props) => (
  <h3 className="title-general">
    <span>{props.title}</span>
  </h3>
);

export const TitleFluidSection = (props) => (
  <div className="col-xs-12 title-fluid-general">
    <h3>{props.title}</h3>
    <hr />
  </div>
);

export const LoadingView = () => {
  return (
    <div className="loading-view">
      <div className="loader" id="loader"></div>
    </div>
  );
}

export const Breadcrum = (props) => {
  const { title, routes } = props;

  function toTitleCase(str) {
    return str.replace(/\b\w+/g, function (s) {
      return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()
    })
  }

  return (
    <ol className="breadcrumb note-breadcrumb">
      <li>
        <Link to="/">Inicio</Link>
      </li>
      {
        routes.map((value, index) => {
          const last = index === routes.length - 1;
          const to = `/${routes.slice(0, index + 1).join("/")}`;

          return last
            ? <li className="active">{title}</li>
            : <li>
                <Link to={to}>{toTitleCase(value)}</Link>
              </li>
        })
      }
    </ol>
  );
}

export const NoData = () => {
  return (
    <div className="content-noData">
      <h3 className="text-danger">
        <i className="glyphicon glyphicon-search" aria-hidden="true" />{" "}
        Sin datos por mostrar
      </h3>
    </div>
  )
}

export const Pagination = (props) => {
  const maxLimit = 10;
  const { onChange, total } = props;
  const [ curr, set_Curr ] = useState(1);
  const [ pages, setPages ] = useState([]);

  const pageChangeFunction = (p) => {
    if (p >= 1 && p <= maxLimit) {
      set_Curr(p);
    }
    onChange(p);
  };

  const showPageItemsFunction = () => {
    const data = [];
    const numPage = total;

    if (numPage <= maxLimit) {
        for (let i = 1; i <= total; i++) {
          data.push({
            type: "pageItem",
            value: i,
          });
        }
    } else {
      const leftside = curr - numPage / 2 > 1;
      const rightside = curr + numPage / 2 < maxLimit;
      
      data.push({
        type: "prev",
        value: "prev",
      });

      if (leftside) {
        data.push({
          type: "ellipsis",
          value: "ellipsis",
        });
      }
      const str = Math.max(1, Math.round(curr - numPage / 2));
      const end = Math.min(maxLimit, Math.round(curr + numPage / 2));
      for (let i = str; i <= end; i++) {
        data.push(
          {
            type: "pageItem",
            value: i,
          }
        );
      }

      if (rightside) {
        data.push({
          type: "ellipsis",
          value: "ellipsis",
        });
      }

      data.push({
        type: "next",
        value: "next",
      });
    }

    setPages(data);
  };

  useEffect(() => {
    showPageItemsFunction();
  }, [ total ]);

  return (
    <nav className="pagination-nav" aria-label="Page navigation">
      <ul className="pagination">
        <li
          className={curr === 1?"disabled":""}
          onClick={() => pageChangeFunction(1)}
        >
          <span>
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>
        {pages.map((page, index) => {
          const activePage = curr === page.value?"active":"";
          if (page.type === "ellipsis") {
            return (
              <li key={`page-${index}`}>...</li>
            );
          }

          if (page.type === "prev") {
            return (
              <li
                key={`page-${index}`}
                onClick={() => pageChangeFunction(curr - 1)}
              >
                <span>
                  <span aria-hidden="true">&#8249;</span>
                </span>
              </li>
            );
          }

          if (page.type === "next") {
            return (
              <li
                key={`page-${index}`}
                onClick={() => pageChangeFunction(curr + 1)}
              >
                <span>
                  <span aria-hidden="true">&#8250;</span>
                </span>
              </li>
            );
          }

          return (
            <li
              key={`page-${index}`}
              className={`${activePage}`}
              onClick={() => pageChangeFunction(index+1)}
            >
              <span>{page.value}</span>
            </li>
          );
        })}
        <li
          className={curr === total?"disabled":""}
          onClick={() => pageChangeFunction(total)}
        >
          <span>
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>
      </ul>
    </nav>
  )
}