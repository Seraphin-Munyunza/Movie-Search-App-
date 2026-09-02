function BackButton({ onBack }) {
  return (
    <button className="btn btn-outline-info mb-4" onClick={onBack}>
        ← Back
    </button>
  );
}

export default BackButton;