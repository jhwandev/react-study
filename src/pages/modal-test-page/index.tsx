export default function ModalTestPage() {
  return (
    <div data-page="modal-test-page">
      <div>
        <h3>Title</h3>
        <p>Content</p>
        <button
          onClick={() => {
            alert('YES');
          }}
        >
          YES
        </button>
        <button
          onClick={() => {
            alert('NO');
          }}
        >
          NO
        </button>
      </div>
    </div>
  );
}
