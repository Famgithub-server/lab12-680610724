export default function Modal() {
  return (
    <div className="modal fade" id="todoModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Todo List</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title Todo"
            />
            <textarea
              className="form-control"
              placeholder="description..."
            ></textarea>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              id="closeModal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
