import { FormGroup, Input, Label } from "reactstrap";

export const CoreInput = ({name,label='',value='',subtitle='',type='text',error='',className='',prepend='',append='',errorInputClass='error',errorTextClass='invalid',...props}) => {
    return (
        <FormGroup className="form-control-wrap">
            {
                label && <Label for={name} className="form-label">{label}</Label>
            }
            <div className={`input-group ${errorInputClass}`}>
                {
                    prepend != '' && 
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon4">{prepend}</span>
                        </div>
                }
                <Input
                    {...props}
                    id={name}
                    className={`${className} ${error.length ? errorInputClass : ''}`}
                    value={value}
                    name={name}
                    type={type}
                />
                {
                    append != '' && 
                    <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon4">{append}</span>
                        </div>
                }
            </div>
            {
                subtitle != '' && <span className="form-note">{subtitle}</span>
            }
            {error && <span className={errorTextClass}>{error}</span>}
        </FormGroup>
  )
}