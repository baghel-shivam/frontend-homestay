import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TermsAndCond({ lgShow, setLgShow, Agree, data }) {
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
                   {data?.map((item)=>{
                       return(
                           <li>{item}</li>
                        )
                    })}
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