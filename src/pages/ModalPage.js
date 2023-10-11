import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Agree
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>here's some important information you need to agree on</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem nostrud occaecat occaecat Lorem incididunt cillum minim labore
        aute amet ut proident. Nisi irure laboris deserunt fugiat eu consectetur
        culpa quis commodo magna magna ex deserunt laboris. Aliqua cillum
        voluptate aute occaecat laboris duis anim est. Labore nisi ullamco amet
        dolor excepteur esse mollit. Laboris officia anim amet ipsum non
        pariatur do mollit sunt exercitation. Mollit quis adipisicing
        adipisicing dolor mollit sint voluptate est quis minim culpa. Minim
        officia in tempor occaecat culpa anim qui esse eiusmod reprehenderit
        eiusmod aliqua laboris et. Pariatur eiusmod laborum ullamco anim est
        deserunt cillum minim enim ut sunt enim. Reprehenderit laboris irure
        excepteur labore eiusmod adipisicing sint ea qui ullamco quis aliqua. In
        non sint laboris ipsum minim dolore aute ex non ad cillum.Magna
        reprehenderit ipsum voluptate mollit exercitation proident labore
        cillum. Pariatur exercitation non nisi esse quis nulla. Lorem in nulla
        fugiat non non esse ex excepteur non exercitation aliquip aliqua aliquip
        eiusmod. Ex qui incididunt dolor nisi deserunt dolore nulla irure sint
        ullamco. Sint sunt mollit voluptate aliquip magna amet laborum quis
        ullamco deserunt.Et nisi exercitation exercitation reprehenderit ea
        Lorem do mollit ut aliquip Lorem est proident eiusmod. Sint nisi mollit
        nostrud esse anim sunt aliquip fugiat enim adipisicing duis adipisicing
        irure. Duis id cupidatat tempor dolor duis dolore ut fugiat pariatur
        aliqua dolor. Laboris tempor consectetur exercitation fugiat labore do
        nostrud irure est incididunt sunt. Elit ut duis quis ipsum. Est anim
        incididunt mollit eu laborum magna laborum sit pariatur exercitation non
        tempor cillum.Dolor nisi eu proident fugiat ullamco laboris minim mollit
        do. Excepteur dolore veniam nostrud culpa et excepteur in sit eiusmod
        reprehenderit. Aliqua consequat fugiat duis reprehenderit aliquip mollit
        in. Aliqua irure sunt non aliquip sit do. Eu excepteur ad labore ad.
      </p>
    </div>
  );
}
export default ModalPage;
