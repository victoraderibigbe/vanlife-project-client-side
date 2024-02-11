import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { ErrorOutline } from "@mui/icons-material";

const Logout = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <ErrorOutline
              fontSize="large"
              className="mx-auto mb-4 text-yellow-300"
            />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Are you sure you want to logout?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Logout;
