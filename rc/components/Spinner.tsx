const Spinner = () => {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "4px solid #ccc",
        borderTop: "4px solid #333",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin: "20px auto",
      }}
    />
  );
};

export default Spinner;
