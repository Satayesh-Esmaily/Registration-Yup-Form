export default function FormInput({
  label,
  type = "text",
  name,
  register,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <input
        type={type}
        {...register(name)}
        className={`w-full rounded-lg border px-3 py-2 text-sm
          bg-white dark:bg-black
          text-gray-900 dark:text-white
          focus:outline-none focus:ring-2
          ${
            error
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 dark:border-gray-700 focus:ring-gray-400"
          }`}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
