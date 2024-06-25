const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
	return (
		<div className={`mb-3 campo campo-${type}`}>
			<label className="form-label">{label}</label>
			<input 
				className="form-control"
				type={type} value={valor} 
				onChange={evento => aoAlterado(evento.target.value)} 
				required={obrigatorio} placeholder={placeholder} />
		</div>
	)
}

export default Campo