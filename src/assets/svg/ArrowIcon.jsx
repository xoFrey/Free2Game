const ArrowIcon = ({ setIsOpen, className }) => {
  return (
    <svg
      className={className}
      onClick={setIsOpen}
      width="12"
      height="27"
      viewBox="0 0 12 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7L6 22L11 7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
