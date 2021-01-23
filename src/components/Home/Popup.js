import React,{useState} from 'react';
import img from '../../img/modal/modal-image.jpeg'

function Popup() {

    const [modalstate ,setModalState] =  useState(true);

    const handleModal = () =>{
        setModalState(!modalstate);
    }
    return (
      <div>
        

        {/* <!-- Modal --> */}
        <div
          className={
            "modal fade" + (modalstate ? " show d-block" : " d-none")
          }
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="">
                <button
                  type="button"
                //   style={{position:"absolute",right:"8px"}}
                  onClick={handleModal}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                  <img src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Popup
