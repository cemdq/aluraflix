import './video.css';

const Video = ({ video, aoDeletar }) => {
	return (
		<div className='card video'>
			<div className='card-header d-flex justify-content-end gap-2'>
				<button type="button" className="btn-close" aria-label="Close" onClick={() => aoDeletar(video.id)} />
			</div>
			<a href={`https://www.youtube.com/watch?v=${video.imagem}`} className='text-decoration-none' target='blank_'>
				<div className='card-body p-0'>
					<img src={`https://img.youtube.com/vi/${video.imagem}/0.jpg`} className='w-100' />
				</div>
			</a>
		</div>)
}

export default Video