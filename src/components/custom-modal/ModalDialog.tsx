export default function ModalDialog ({id, modalHeader,modalBody, modalFooter, onClick}) {
 return (
  <div className='modal' id={id || "modalId"}>
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          {modalHeader ? modalHeader : (<h2>Modal Header</h2>)}
          <button onClick={onClick} className='modal-close'>X</button>
        </div>
        <div className='modal-body'>
          {modalBody ? modalBody : (
            <p>Modal Body Content</p>
          )}
        </div>
        {modalFooter? modalFooter : (
          <div className="modal-footer">Modal Footer</div>
        )}
      </div>
    </div>
  </div>
 );
}