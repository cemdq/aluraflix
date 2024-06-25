const Banner = ({ image, title }) => {
	return (
		<main className="container-xxl mt-5">
			<div className="row align-items-center">
				<div className="col-md-6 col-sm-12">
					<div className="ratio ratio-16x9">
						<iframe
							src="https://www.youtube.com/embed/RvWQQRjz1Pw"
							title="Os MELHORES livros de tecnologia para ler em Programação com Roberta Arcoverde | #HipstersPontoTube"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen />
					</div>
				</div>
				<div className="col-md-6 col-sm-12">
					<h1 className="fs-3">Os MELHORES livros de tecnologia para ler em Programação com Roberta Arcoverde | #HipstersPontoTube</h1>
				</div>
			</div>
		</main>
	)
}

export default Banner