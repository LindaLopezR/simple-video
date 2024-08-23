import React, { useState } from "react";

export const CardHome = (props) => {
  const { note } = props;
  const [ showShare, setShowShare ] = useState(false);

  const shareVideo = (type) => {
    console.log('type', type)
  }

  return (
    <div className="card card-home">
      <div className="row">
        <div className="col-xs-4 col-md-12">
          <figure className={`image ${showShare?"box":""}`}>
            <picture>
              <img alt={note.title} loading="lazy" src={note.img} />
            </picture>
            {showShare &&
              <div className="share-actions">
                <p>Compartir</p>
                <div className="buttons">
                  <div className="btn-share" onClick={() => shareVideo("instagram")}>
                    <img alt="Récord" src="/icons8-instagram-w.png" />
                  </div>
                  <div className="btn-share" onClick={() => shareVideo("facebook")}>
                    <img alt="Récord" src="/icons8-facebook-w.png" />
                  </div>
                  <div className="btn-share" onClick={() => shareVideo("youtube")}>
                    <img alt="Récord" src="/icons8-twitterx-w.png" />
                  </div>
                  <div className="btn-share" onClick={() => shareVideo("x")}>
                    <img alt="Récord" src="/icons8-tiktok-w.png" />
                  </div>
                </div>
              </div>
            }
            <div className="share-btn" onClick={() => setShowShare(!showShare)}>
              <i className="glyphicon glyphicon-share-alt" />
            </div>
            <div className="duration">1:52:00</div>
          </figure>
        </div>

        <div className="col-xs-8 col-md-12">
          <a href={note.url}>
            <div className="caption">
              {note.active &&
                <p className="label label-status label-danger">
                  <i className="glyphicon glyphicon-record" />{" "}
                  En Vivo
                </p>
              }
              <h3 className="title">{note.title}</h3>
              <p className="info">{note.date}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export const CardNoteSponsor = (props) => {
  return (
    <div className="thumbnail card card-sponsor">
      <div className="image">
        <img src="https://picsum.photos/200/300" alt="..." />
      </div>
      <div className="caption">
        <h3 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
      </div>
      <div className="extra">
        <p className="info">MATAN</p>
        <a className="btn btn-default" href="/" role="button">Leer más</a>
      </div>
    </div>
  )
}

export const CardSponsors = (props) => {
  return (
    <div className="col-xs-12">
      <div className="section-sponsors">
        <div className="header">
          <h3 className="title">Contenido patrocinado</h3>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <CardNoteSponsor />
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <CardNoteSponsor />
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <CardNoteSponsor />
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <CardNoteSponsor />
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <CardNoteSponsor />
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <CardNoteSponsor />
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <CardNoteSponsor />
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <CardNoteSponsor />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}