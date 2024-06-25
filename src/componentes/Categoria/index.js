import Video from '../Video'
import hexToRgba from 'hex-to-rgba';
import './categoria.css'

const Categoria = ({ categoria, videos, aoDeletar }) => {
	return (
		videos.length > 0 &&
		<section className='my-5 container-xxl'>
			<h3
				className="fw-bold mb-3"
				style={{ color: hexToRgba(categoria.cor) }}>
				{categoria.nome}
			</h3>
			<div className='horizontal-snap'>
				{
					videos.map((video, indice) =>
						<Video
							key={indice}
							video={video}
							corDeFundo={categoria.cor}
							aoDeletar={aoDeletar}
						/>)
				}
			</div>

		</section >
	)
}

export default Categoria