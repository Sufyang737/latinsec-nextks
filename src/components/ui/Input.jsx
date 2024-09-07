/* eslint-disable react/prop-types */

export const Input = ({
  label,
  name,
  type,
  required,
  value,
  error,
  placeholder,
  pattern,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    onChange(e);
  };

  const handleKeyDown = (e) => {
    if (name === 'phone' && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="mb-4">
      <label
        className="block font-semibold text-sm text-[#252B42] mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...props}
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        pattern={pattern}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        className={`w-full appearance-none rounded-[5px] border placeholder:text-[#737373] text-sm border-[#BDBDBD] bg-[#F9F9F9] py-3 pl-5 pr-3 leading-tight text-[#252B42] focus:outline-none ${
          required && error && 'border border-[#DF2916]'
        } ${props.className}`}
      />
      {required && error && (
        <p className="mt-2 flex items-center gap-3 text-xs text-[#DF2916]">
          {error}
        </p>
      )}
    </div>
  );
};
