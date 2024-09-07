/* eslint-disable react/prop-types */

export const TextArea = ({
  label,
  name,
  required,
  value,
  error,
  placeholder,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="mb-4">
      <label
        className="block text-sm text-[#252B42] font-semibold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        {...props}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        className={`w-full appearance-none rounded-[5px] border placeholder:text-[#737373] text-sm border-[#BDBDBD] bg-[#F9F9F9] py-3 pl-5 pr-3 leading-tight text-[#252B42] focus:outline-none ${
          required && error && "border border-[#DF2916]"
          } ${props.className}`}
        style={{fieldSizing: 'Content'}}
      />
      {required && error && (
        <p className="mt-2 flex items-center gap-3 text-xs text-[#DF2916]">
          {error}
        </p>
      )}
    </div>
  );
};