const ExitButton = ({ setFold }) => {
  return (
    <svg
      onClick={setFold}
      width="54"
      height="54"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 25L48.5 47.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M26 47.5L48.5 25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ExitButton;
