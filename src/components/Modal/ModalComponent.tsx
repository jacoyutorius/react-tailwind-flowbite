import { Modal } from "flowbite-react"
import { CreateFormComponent } from "../CreateForm"

export type ModalComponentProps = {
  modalOpen: boolean,
  onClose: () => void
}

export const ModalComponent = (props: ModalComponentProps): JSX.Element => {  
  return (
    <Modal
      show={ props.modalOpen }
      onClose={ props.onClose }
      size="4xl"
    >
      <Modal.Header>
        Terms of Service
      </Modal.Header>
      <Modal.Body>
        <CreateFormComponent />
      </Modal.Body>
    </Modal>
  )
}