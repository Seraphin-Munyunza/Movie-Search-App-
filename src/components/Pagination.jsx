function Pagination({ page, onPageStep }) {
  return (
    <div className="mt-4">
      <button
        className="btn btn-secondary me-2"
        onClick={() => onPageStep("previous")}
      >
        Previous
      </button>

      <span>Page {page}</span>

      <button
        className="btn btn-secondary ms-2"
        onClick={() => onPageStep("next")}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;