const TotalCard = ({ total }) => (
  <div className="d-flex align-items-center gap-2"
    style={{
      background: "#f1f3f5",
      borderRadius: "25px",
      padding: "8px 15px"
    }}
  >
    <div style={{
      background: "#0d6efd",
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }}>
      👤
    </div>

    <div style={{ fontSize: "13px" }}>
      TOTAL DE TURMAS <br />
      <strong style={{ color: "#0d6efd" }}>{total}</strong>
    </div>
  </div>
);

export default TotalCard;