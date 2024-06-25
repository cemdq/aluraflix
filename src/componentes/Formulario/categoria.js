import { useState } from 'react'
import Campo from '../Campo'

const Formulario = ({ aoCriarCategoria }) => {
	const [nomeCategoria, setNomeCategoria] = useState('')
	const [corCategoria, setCorCategoria] = useState('')

	return (
		<div className="modal fade" id="categoryModal" tabIndex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-lg">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="categoryModalLabel">Nova categoria</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<form className="formulario" onSubmit={(evento) => {
							evento.preventDefault()
							aoCriarCategoria({ nome: nomeCategoria, cor: corCategoria })
						}}>
							<Campo
								obrigatorio={true}
								label='Nome'
								placeholder='Digite o nome da categoria'
								valor={nomeCategoria}
								aoAlterado={valor => setNomeCategoria(valor)} />
							<Campo
								obrigatorio={true}
								label='Cor'
								type='color'
								placeholder='Digite sua cor'
								valor={corCategoria}
								aoAlterado={valor => setCorCategoria(valor)} />
							<button className='w-100 btn btn-primary'>Criar categoria</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Formulario