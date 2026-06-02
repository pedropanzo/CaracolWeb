const FilterTurmas = () => {
  return (
    <div
      style={{
        background: "#f1f3f5",
        borderRadius: "30px",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}
    >
      <span style={{ fontSize: "13px" }}>Ano lectivo:</span>

      <select className="form-select form-select-sm" style={{ width: "120px" }}>
        <option>2024/2025</option>
      </select>
    </div>
  );
};

export default FilterTurmas;