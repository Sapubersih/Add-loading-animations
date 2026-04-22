const Skeleton = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        background: "#eee",
        marginBottom: "10px",
        borderRadius: "6px",
        animation: "pulse 1.5s infinite",
      }}
    />
  );
};

export default Skeleton;
