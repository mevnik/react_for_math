import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
  <div className="container-fluid">
    <p className="navbar-brand">Learn Math</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page">Home</p>
        </li>
        <li className="nav-item">
          <p className="nav-link">Features</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" >Pricing</p>
        </li>
        <li className="nav-item">
          <p className="nav-link disabled" aria-disabled="true">Disabled</p>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header;
