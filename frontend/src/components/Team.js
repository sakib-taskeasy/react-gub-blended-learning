function Team(props) {

    const {name, email} = props;

    return <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                    <div className="card-top border-bottom border-3 border-warning position-relative">
                        <a href="" className="team-profile">
                            <img src='logo512.png' className='img-fluid m-auto d-block' />
                        </a>
                        <a href="" className="team-icon rounded-circle border border-3 border-warning d-flex justify-content-center align-items-center position-absolute btn btn-primary" title="">
                            <i class="bi bi-person"></i>
                        </a>
                    </div>
                    <div className="text-center card-body">
                        <h2 className="card-title pb-0">{name}</h2>
                        <span className=''>
                            <a href='#' className='text-decoration-none text-primary'>{email}</a>
                        </span>
                        <div className='d-flex justify-content-center mt-4'>
                            <a href='#' className='social-icon text-muted rounded border border-1 border-secondary m-auto d-flex align-items-center justify-content-center fs-4'>
                                <i class="bi bi-github"></i>
                            </a>
                            <a href='#' className='social-icon text-muted rounded border border-1 border-secondary m-auto d-flex align-items-center justify-content-center fs-4'>
                                <i class="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
}

export default Team;