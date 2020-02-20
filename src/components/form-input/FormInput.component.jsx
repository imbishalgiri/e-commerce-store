import React from 'react';


import './forminput.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return(
		<div className="group">
			<input type="text" className='form__input' onChange={handleChange} {...otherProps} />
			{
				label ?
				<label
				   className={
				   `${otherProps.value.length ? 'shrink' : ''
				    } form__input--label`}
				    >
					{label}
				    </label>
				:null
			}

		</div>
	)
}

export default FormInput;