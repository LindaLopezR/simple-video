import React, { useEffect, useState } from 'react';
import { CardHome, CardSponsors } from '../components/cards/Cards';
import { LoadingView, NoData, TitleFluidSection, TitleSection, } from '../components/utilities';
import { BasicAds } from '../components/other/Ads';

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

function Note() {
  const [ loading, setLoading ] = useState(true);
  const [ allNotes, setAllNotes ] = useState([]);
  const [ labels, setLabels ] = useState([]);
  const [ likedVideo, setLikedVideo ] = useState(false);
  const [ active, setActive ] = useState(true);
  const [ notes, setNotes ] = useState([]);

  useEffect(() => {
    const postPage = new Array(21).fill(post);
    const tempNotes = new Array(10).fill(post);
    const notesList = new Array(21).fill(post);

    notesList.splice(8, 0, adsContent);
    notesList.push(adsContent);

    setAllNotes(notesList);
    setLabels(postPage);
    setNotes(tempNotes);
    setActive(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, []);

  const actionVideo = (type) => {
    console.log('TYPE ', type);
  }

  if (loading) {
    return <LoadingView />
  }

  const timeNote = "Hace 13 horas";

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          {active &&
            <p className="label label-status medium label-danger">
              <i className="glyphicon glyphicon-record" />{" "}
              En Vivo
            </p>
          }
          <h3 className="title-main-section">
            ¡Sueño cumplido! Gylian Mbappé nuevo jugador
          </h3>
        </div>
        <div className="col-xs-12 col-md-8">
          <div className="embed-responsive note-embed embed-responsive-16by9">
            <video width="320" height="240" controls>
              <source
                src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <ul className="actions-video list-inline">
            <li>
              <p className="visible-sm visible-md visible-lg text-bold">
                {timeNote}
              </p>
            </li>
            <li>
              <p
                className={`label label-btn ${likedVideo?"label-success":"label-default"}`}
                onClick={() => setLikedVideo(!likedVideo)}
              >
                <i
                  className={`glyphicon ${likedVideo?"glyphicon-star":"glyphicon-star-empty"}`}
                />{" "}
                {likedVideo ? "Te gusta" : "Me gusta"}
              </p>
            </li>
            <li>
              <p
                className="label label-btn label-default"
                onClick={() => actionVideo("save")}
              >
                <i className="glyphicon glyphicon-floppy-disk" />{" "}
                Guardar
              </p>
            </li>
            <li>
              <p
                className="label label-btn label-default"
                onClick={() => actionVideo("share")}
              >
                <i className="glyphicon glyphicon-share-alt" />{" "}
                Compartir
              </p>
            </li>
          </ul>
          <p className="visible-xs text-bold">{timeNote}</p>

          <div className="labels labels-note">
            <h4 className="title-main">Tags</h4>
            {labels && labels.length
              ? <ul className="list-inline">
                  {labels.map((item, i) => (
                    <li key={`label-${i}`}>
                      <div className="label label-default">
                        <img src="https://picsum.photos/200/300" alt="..." />
                        {item.title}
                      </div>
                    </li>
                  ))}
                </ul>
              : "--"
            }
          </div>
        </div>
        <div className="col-md-4 visible-md visible-lg">
          <div className="ads centered mrec-xs mrec-sm mrec-md mrec-lg">
            <BasicAds />
          </div>
          <div className="ads centered mrec-xs mrec-sm mrec-md mrec-lg">
            <BasicAds />
          </div>
        </div>
      </div>

      <div className="row">
        <TitleFluidSection title="Videos Relacionados" />
        {allNotes && allNotes.length
          ? allNotes.map((note, index) => {
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
            })
          : <NoData />
        }
      </div>

      <div className="row">
        <div className="col-md-12 visible-xs">
          <div className="ads ads-note centered mrec-xs mrec-sm mrec-md mrec-lg">
            <BasicAds />
          </div>
          <div className="ads centered mrec-xs mrec-sm mrec-md mrec-lg">
            <BasicAds />
          </div>
        </div>
      </div>

      <div className="ads centered-mrg centered billboard-lg">
        <BasicAds />
      </div>

      <div className="row">
        <div className="col-xs-12">
          <TitleSection title="Notas Relacionadas" />
          <div className="cards-horizontal">
            {notes.map((note, index) => (
              <a
                key={`noteH-${index}`}
                className="card-horizontal"
                href={note.url}
              >
                <div>
                  <figure>
                    <picture>
                      <img alt={note.title} loading="lazy" src={note.img} />
                    </picture>
                  </figure>
                  <div className="caption">
                    <p className="label-type">{note.type}</p>
                    <h3>{note.title}</h3>
                    <p className="info">{note.date}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="ads centered-mrg centered mobile-xs leaderboard-xs leaderboard-sm leaderboard-md leaderboard-lg">
        <BasicAds />
      </div>

      <div className="row">
        <CardSponsors />
      </div>
    </>
  );
}

export default Note;
