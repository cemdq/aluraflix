const NavBar = () => {
	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-xxl">
				<a className="navbar-brand">AluraFlix</a>
				<div className="d-flex gap-3">
					<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#videoModal">
						Novo vídeo
					</button>
					<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#categoryModal">
						Nova categoria
					</button>
				</div>
			</div>
		</nav>
	)
}

export default NavBar