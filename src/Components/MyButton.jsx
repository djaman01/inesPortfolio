const MyButton = ({ label, fullWidth }) => {
  return (
    //${fullWidth && 'w-full'} veut dire que si le components a un props fullWidth activé, alors on lui donne le style w-full
    <button
      className={`montserrat-medium flex h-14 items-center justify-center gap-2 rounded-full border-2 px-7 py-4 text-xl leading-none text-white ${fullWidth && "w-full"}`}
    >
      {label}
    </button>
  );
};

export default MyButton;
