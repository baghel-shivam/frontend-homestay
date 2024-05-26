import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TermsAndCond({ lgShow, setLgShow, Agree, termsAndConditionsGuest, data }) {
    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Terms and Conditions
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ol>
                        {termsAndConditionsGuest ?
                            Object.keys(termsAndConditionsGuest)?.map((section, index) => (
                                <div className='w-100 m-auto' key={index}>
                                    <strong>{section.replace(/([A-Z])/g, ' $1').trim()} :</strong>
                                    <ul>
                                        {termsAndConditionsGuest[section]?.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )) :
                            data?.map((item) => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }


                    </ol>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => Agree(true, false)}>I Agree</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TermsAndCond;