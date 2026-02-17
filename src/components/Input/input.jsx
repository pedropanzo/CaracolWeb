export function Input({
  label,
  type = "text",
  className = "",
  ...props
}) {
  return (
    <div className="mb-3 w-100">
      {label && <label className="form-label">{label}</label>}

      <input
        type={type}
        className={`form-control w-100 ${className}`}
        {...props}
      />
    </div>
  );
}
