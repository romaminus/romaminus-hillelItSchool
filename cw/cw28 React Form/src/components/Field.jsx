function Field({id, label, placeholder, type, ...args}) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        {...args}
      />
    </>
  );
}

export default Field;
