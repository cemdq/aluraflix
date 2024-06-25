const ListaSuspensa = ({ label, items, valor, aoAlterado, obrigatorio = false }) => {
	return (
		<div className="mb-3">
			<label className="form-label">{label}</label>
			<select className="form-select" required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
				<option />
				{items.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default ListaSuspensa