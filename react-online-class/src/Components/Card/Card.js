import React, {useState ,useRef} from "react";


const Card = (props) => {

    const {title, price} = props.enroll;


    
    const [btnText, setBtnText] = useState('Enroll Now');
    const changeText = (text) => setBtnText(text);

    const btnRef = useRef();
    const onBtnClick = () => btnRef.current.setAttribute('disabled', 'disabled');

    return (
        <>
            <div className="col-md-4 col-10">
                <div className="card">
                    
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{title}</h5>
                        <p className="card-text">Create React App doesn’t handle .... .</p>
                        <button  ref={btnRef} onClick={() => {
                            props.handelEnroll(props.enroll);
                            changeText('Enrolled');
                            onBtnClick();
                        }} type="button" className="btn btn-primary">
                            {btnText}
                        </button>

                        <button  className="btn btn-outline-primary ml-2">{price}</button>
                    </div>
                </div>

                <hr/>
                <br/>

            </div>
        </>
    );
};
export default Card;