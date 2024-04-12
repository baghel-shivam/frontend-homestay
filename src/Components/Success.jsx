import React from 'react';
import Modal from 'react-bootstrap/Modal';
import img from '../Images/success.gif'
const Success = ({ smShow, onHide }) => {
    return (
        <div >
            <Modal
                size="md"
                show={smShow}
                onHide={onHide}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body >
                    <div className="container w-100 d-flex justify-content-center">
                        <div className='m-auto'>
                            <img src={img} className='centered-gif' height={150} alt='img' />
                        </div>
                    </div>
                    <small className='opacity-50    d-flex justify-content-center text-center px-5 py-1'>We will contact you shortly.</small>
                    <p className='text-success text-center fs-4 mt-1'>Request successful!</p>
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default Success;
