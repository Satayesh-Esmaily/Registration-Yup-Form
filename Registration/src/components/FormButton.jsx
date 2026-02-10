export default function FormButton({ text, disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full mt-4 py-2 rounded-lg text-sm font-medium transition
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
        }`}
    >
      {text}
    </button>
  );
}
