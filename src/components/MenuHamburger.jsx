/* eslint-disable react/prop-types */

export const MenuHamburger = ({ handleOpenMenu }) => {
  return (
    <div className="sm:hidden flex items-center min-h-16 ml-6 relative">
      <span
        onClick={handleOpenMenu}
        className="w-4 h-3.5 overflow-hidden flex flex-col justify-between mobile-button"
      >
        <span className="left-0 w-4 h-0.5 bg-white rounded-[1px]"></span>
        <span className="left-0 w-2 h-0.5 bg-white rounded-[1px]"></span>
        <span className="left-0 w-3 h-0.5 bg-white rounded-[1px]"></span>
      </span>
    </div>
  );
};
