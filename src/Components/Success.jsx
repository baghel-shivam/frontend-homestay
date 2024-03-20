import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from '../Images/success.gif'
const Success = ({ smShow, onHide }) => {
    return (
        <div >
            <Modal
                size="sm"
                show={smShow}
                onHide={onHide}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container w-100">
                        <div className='m-auto w-50'>

                            <img src={img} className='centered-gif' height={150} alt='img' />

                        </div>
                        <p className='text-success text-center'>Requested SuccessFull!</p>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default Success;
