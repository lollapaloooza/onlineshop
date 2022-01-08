import {GroupContainer, FormInputContainer, InputLabelContainer} from "./form-input.styles";

const FormInput = ({handleChange, label, ...props}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...props}/>
        {
            label ?
                (
                    <InputLabelContainer className={`${props.value.length ? 'shrink' : ''}`}>
                        {label}
                    </InputLabelContainer>
                )
                : null
        }
    </GroupContainer>
)

export default FormInput;