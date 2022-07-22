import React, {Fragment, useState, useRef} from "react";
import 'react-image-crop/dist/ReactCrop.css'
import {Field, ErrorMessage} from "formik";
import Error from "../error";
import Croppie from 'croppie';
import 'croppie/croppie.css';
import {isEmpty} from 'lodash';
import './imageCropper.css'
import MyCustomModal from "./Modal";

function ImageCropper(props) {
    const [preview, setPreview] = useState({});
    const [cropped, getCropped] = useState()
    const [modalShow, setModalShow] = useState(false);
    const {grid, name, ...rest} = props
    let imageRef = useRef(null);
    let imagecroppie;

    let croppie = (e) => {
        if (e.target.files.length !== 0) {
            if (!isEmpty(preview)) {
                preview.destroy()
            }
            imagecroppie = new Croppie((imageRef.current), {
                viewport: {width: 200, height: 200},
                boundary: {width: 300, height: 300},
                showZoomer: true,
                enableOrientation: true
            });
            imagecroppie.bind({
                url: URL.createObjectURL(e.target.files[0]), orientation: 1
            });
            setPreview(imagecroppie)
        }
    }

    function getResults(data) {
        const results = preview.result({
            type: 'base64', circle: false
        });
        results.then(res => {
            data.form.setFieldValue('profile', res)
            getCropped(res)
            setModalShow(true)
        })
    }


    return (<div className={`mb-3 col${-grid}`}>
            <Field name={name} id={name} {...rest}>
                {(data) => {
                    return (<Fragment>
                            <MyCustomModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                src={cropped}
                            />
                            <label htmlFor={name} className="form-label"> Select Your Profile Picture </label>
                            <input
                                className="form-control"
                                accept="image/*"
                                type="file"
                                onChange={(e) => {
                                    croppie(e)
                                }}
                            />
                        {!isEmpty(preview) && !cropped && <div style={{ marginTop: '15px' ,color: 'red'}}> Please Crop Your Image Before Submitting Your Registeration Form </div>}
                            <ErrorMessage name={name} component={Error}/>
                            <div id="demo" ref={imageRef}></div>
                            <div className="row text-center">
                                {!isEmpty(preview) && <div className="col-12">
                                    <button className="btn btn-dark mt-5 mb-5" type="button" onClick={() => {
                                        getResults(data)
                                    }}> Crop
                                        Image
                                    </button>
                                </div>}
                            </div>

                        </Fragment>)
                }}
            </Field>
        </div>)
}

export default ImageCropper;