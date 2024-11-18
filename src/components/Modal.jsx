import expert from "../assets/data-strategy.png"
const Modal = ({ setShowModal }) => {
    return (
        <div className="modal modal-open">
            <div className="modal-box flex flex-col items-center justify-center">
                <img src={expert} className="w-24 h-24" alt="" />

                <h3 className="font-bold text-3xl text-center">Contact Our Expert</h3>
                <p className="py-4 px-6">Our experts are available for consultation between 10:00 AM and 8:00 PM. </p>
                <form>
                    {/* Add form fields for name, email, message, etc. */}
                    <div className="modal-action">
                       
                        <button className="btn bg-green-500 w-full" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;