import { Modal, Label, TextInput, Checkbox, Button } from "flowbite-react"

function ModalFormBody() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          type="password"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="large"
            value="Large input"
          />
        </div>
        <TextInput
          id="large"
          type="text"
          sizing="lg"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">
        Submit
      </Button>
    </form>
  )
}

export type CreateFormComponentProps = {
  modalOpen: boolean,
  onClose: () => void
}

export const CreateFormComponent = (props: CreateFormComponentProps): JSX.Element => { 
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
        { ModalFormBody() }
      </Modal.Body>
    </Modal>
  )
}