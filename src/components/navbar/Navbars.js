const MenuItemSelect = (props) => {
  const { title, route, options } = props;

  return (
    <li className="dropdown">
      <a
        href={route}
        className="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="text">{title}</span> {' '}
        <i className="glyphicon glyphicon-menu-down" aria-hidden="true" />
      </a>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={`${title}-${index}`}>
            <a href={option.route}>{option.title}</a>
          </li>
        ))}
      </ul>
    </li>
  )
}

export const NavbarMainSimple = (props) => {
  return (
    <nav className="navbar navbar-main-simple">
      <div className="container">
        <div className="navbar-header">
          <div className="dropdown">
            <button
              className="btn btn-default dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <i className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="/">Action</a></li>
              <li><a href="/">Another action</a></li>
              <li><a href="/">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="/">Separated link</a></li>
            </ul>
          </div>

          <a className="navbar-brand" href="/">
            <img alt="Récord" src="/record02.png" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export const NavbarMenuSimple = (props) => {
  return (
    <nav className="navbar navbar-menu-simple" role="navigation">
      <div className="container">
        <ul className="nav navbar-nav horizontal">
          <MenuItemSelect
            title="Fútbol"
            route="/"
            options={[{title: "Item", route:"/futbol/item"}]}
          />
          <MenuItemSelect
            title="Estadísticas"
            route="/estadisticas"
            options={[
              {title: "Item", route:"/estadisticas/item"}
            ]}
          />
          <MenuItemSelect
            title="Selección Mexicana"
            route="/seleccion"
            options={[{title: "Item", route:"/seleccion/item"}]}
          />
          <li>
            <a href="/empelotados">
              <span className="text">Empelotados</span>
            </a>
          </li>
          <li>
            <a href="/f1">
              <span className="text">F1</span>
            </a>
          </li>
          <li>
            <a href="/box">
              <span className="text">Box</span>
            </a>
          </li>
          <li>
            <a href="/contra">
              <span className="text">Contra</span>
            </a>
          </li>
          <MenuItemSelect
            title="París 2024"
            route="/"
            options={[
              {title: "Item", route:"/paris/item"}
            ]}
          />
          <MenuItemSelect
            title="Vídeos"
            route="/"
            options={[
              {title: "Item", route:"/videos/item"}
            ]}
          />
        </ul>
      </div>
    </nav>
  );
}

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img alt="Récord" src="/record02.png" />
          </div>
          <div className="col-md-3">
            <h3 className="title">Récord</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/">Suscripciones</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="title">Recomendamos</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/internacionales">Noticias internacionales</a>
              </li>
              <li>
                <a href="/nacionales">Noticias nacionales</a>
              </li>
              <li>
                <a href="/resultados">Resultados y estadísticas</a>
              </li>
              <li>
                <a href="/cronicas">Crónicas</a>
              </li>
              <li>
                <a href="/eventos">Eventos deportivos</a>
              </li>
              <li>
                <a href="/entrevistas">Entrevistas y perfiles</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className="visible-xs">Récord Copyright © 2024</p>
          </div>
          <div className="col-xs-12 hidden-xs">
            <p className="text-right">Récord Copyright © 2024</p>
          </div>
          <div className="col-xs-12 social">
            <a href="https://www.instagram.com/">
              <img alt="Récord" src="/icons8-instagram-32.png" />
            </a>
            <a href="https://www.facebook.com/">
              <img alt="Récord" src="/icons8-facebook-32.png" />
            </a>
            <a href="https://www.youtube.com/">
              <img alt="Récord" src="/icons8-youtube-32.png" />
            </a>
            <a href="https://x.com/">
              <img alt="Récord" src="/icons8-twitterx-32.png" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
