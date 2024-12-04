function Modal({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <div className="modal fade" id={id} tabIndex={-1} aria-labelledby={`${id}Label`}>
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal