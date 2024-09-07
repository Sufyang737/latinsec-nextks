/* eslint-disable react/prop-types */

const CommonSvg = ({
  title,
  strokeWidth = 1.5,
  children,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    strokeWidth={strokeWidth}
    aria-labelledby={title}
    {...props}
  >
    {title && <title id={title}>{title}</title>}
    {children}
  </svg>
);

export const NavArrowIcon = ({
  title,
  strokeWidth,
  ...props
}) => (
  <CommonSvg title={title} strokeWidth={strokeWidth} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6 9 6 6 6-6"
    />
  </CommonSvg>
);