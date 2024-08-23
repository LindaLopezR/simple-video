import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { CardHome, CardSponsors } from "../components/cards/Cards";
import { LoadingView, NoData, Pagination, TitleFluidSection } from "../components/utilities";
import { BasicAds } from "../components/other/Ads";

const post = {
  title: "Articles",
  content: "",
  url: "/section/note",
  id: 1234,
  date: "El mes pasado",
  img: "https://picsum.photos/200/300",
  type: "Internacionales",
};

const adsContent = {
  type: "ADS",
};

const ContentList = (props) => {
  const { total } = props;
  const [ data, setData ] = useState([]);

  const [ pageActive, setPageActive ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(3);

  const getUpdateData = (currentPage = 1) => {
    const showCount = 21;
    const skipCount = (currentPage - 1) * 21;
    const tempTotalPages = Math.ceil(total/showCount);
    const postPage = new Array(total).fill(post);
    postPage.splice(8, 0, adsContent);
    postPage.splice(20, 0, adsContent);

    const totalPost = postPage.slice(skipCount, currentPage * 21);

    setTotalPages(tempTotalPages);
    setData(totalPost);
  }

  useLayoutEffect(() => {
    getUpdateData(pageActive);
  }, []);

  const handlePaginationChange = (pageActive) => {
    getUpdateData(pageActive);
    setPageActive(pageActive);
  }

  return (
    <div className="content-home-section">
      <div className="row">
        {data && data.length
          ? <>
              {data.map((note, index) => {
                return (
                  <div key={`post-${index}`} className="col-md-4">
                    {note.type === "ADS"
                      ? <div className="ads ads-note centered mrec-xs mrec-sm mrec-md mrec-lg">
                          <BasicAds />
                        </div>
                      : <CardHome note={note} />
                    }
                  </div>
                )
              })}
        
              <div className="col-xs-12 visible-md visible-lg pagination-home">
                <Pagination
                  total={totalPages}
                  onChange={(page) => handlePaginationChange(page)}
                />
              </div>
            </>
          : <NoData />
        }
      </div>
      
    </div>
  )
}

function Section() {
  const { section } = useParams();
  const [ loading, setLoading ] = useState(true);
  const [ tabs, setTabs ] = useState([{ id: "all", name: "Todos" }]);
  const [ active, setActive ] = useState("all");

  const hasPageBeenRendered = useRef(false);

  const generateListTabs = () => {
    const pagesTabs = ["Copa América USA 2024", "Buen Morning Show", "Atoe con el dedo", "Los infromantes", "A La Bio", "Lo más reciente", "Off The RÉCORD", "RÉCORD+"]
    const tempTabs = tabs;
    pagesTabs.map((item) => {
      const validate = tempTabs.find(i => i.id === item);
      if (validate) return item;
      return tempTabs.push({
        id: item,
        name: item,
      })
    });

    setTabs(tempTabs);
  }

  useEffect(() => {
    if (hasPageBeenRendered.current) {
      generateListTabs();
    }

    hasPageBeenRendered.current = true;

    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, []);

  if (loading) {
    return <LoadingView />
  }

  return (
    <>
      <div className="row">
        <TitleFluidSection title={section} />
        <div className="col-xs-7 col-md-8">
          <form>
            <div className="form-group has-feedback input-search">
              <input type="text" className="form-control" placeholder="Buscar" />
              <i className="glyphicon glyphicon-search" />
            </div>
          </form>
        </div>
        <div className="col-xs-5 col-md-4">
          <div className="dropup filter-home">
            <button className="btn btn-default btn-filter dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filtro
              <i className="glyphicon glyphicon-sort" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>Más reciente</li>
              <li>Más visto</li>
            </ul>
          </div>
        </div>
      </div>

      <ul className="home_tab" role="tablist">
        {tabs.map((tab, index) => (
          <li
            key={`tab-${index}`}
            role="presentation"
            className={`${active === tab.id && "active"}`}
            onClick={() => setActive(tab.id)}
          >
            <a
              href={`#${tab.id}}`}
              aria-controls={tab.id}
              role="tab"
              data-toggle="tab"
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={`tab-content-${index}`}
            role="tabpanel"
            className={`tab-pane fade ${active === tab.id && "in active"}`}
            id={tab.id}
          >
            <ContentList
              id={tab.id}
              actived={active}
              total={120}
            />
          </div>
        ))}
      </div>

      <div className="ads centered-mrg centered mrec-xs mrec-sm leaderboard-md billboard-lg">
        <BasicAds />
      </div>

      <div className="row">
        <CardSponsors />
      </div>
    </>
  );
}

export default Section;
