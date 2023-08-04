import React from 'react'
// import PropTypes from 'prop-types'

const Navbar = (props) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{color: props.mode==='dark'?'white':'black'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li><li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">About</a>
                            </li><li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Form</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                            </li>
                        </ul>
                        {/* <div className="bg-primary rounded mx-2" onClick={()=>props.toogleMode("hello")}style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-success rounded mx-2" onClick={props = ()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div> */}
                        <div class={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
                            <input class="form-check-input" type="checkbox" role="switch" onClick={props.toogleMode} id="flexSwitchCheckDefault"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Enable DarkMode</label>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About text here'
// };
// Navbar.propTypes = {
//     title: propTypes.string.isrequired,
//     aboutText: PropTypes.string
// }; 