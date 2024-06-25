import { useState } from 'react'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = ({ aoCadastrar, categorias }) => {
	const [imagem, setImagem] = useState('')
	const [categoria, setCategoria] = useState('')

	const aoSubmeter = (evento) => {
		evento.preventDefault()
		aoCadastrar({
			imagem,
			categoria
		})
	}

	return (
		<div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-lg">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="videoModalLabel">Novo vídeo</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<form className="formulario" onSubmit={aoSubmeter}>
							<Campo
								label='URL'
								placeholder='Informe o endereço do vídeo'
								valor={imagem}
								aoAlterado={valor => setImagem(valor)}
								obrigatorio={true} />
							<ListaSuspensa
								obrigatorio={true}
								label='Categoria'
								items={categorias}
								valor={categoria}
								aoAlterado={valor => setCategoria(valor)} />
							<button className='w-100 btn btn-primary'>Adicionar</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Formulario