import React,{Fragment} from 'react'
import SpinnerImg from './spinner.png';

function Spinner() {
    return (
        <Fragment>
            <img src={SpinnerImg} alt="Loading..." style={{ width: '100px', margin: 'auto', diplay:'block' }} />
        </Fragment>
    )
}

export default Spinner;