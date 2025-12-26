import {
  Button,
  Modal,
  ModalBody,
  ModalContainer,
  ModalTrigger
} from "@/components/ui";
import {
  TaskForm
} from "@/features/tasks";
const ModalTaskForm = () => {
  return (
    <Modal>
      <ModalTrigger>
        <Button>Agregar tarea</Button>
      </ModalTrigger>
      <ModalContainer>
        <ModalBody>
          <TaskForm />
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
}

export { ModalTaskForm }