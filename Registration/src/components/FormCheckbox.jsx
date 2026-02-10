export default function FormCheckbox({
  label,
  name,
  register,
  error,
  showError,
}) {
  return (
    <div className="mb-4">
      <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <input
          type="checkbox"
          {...register(name)}
          className="w-4 h-4 accent-black dark:accent-white"
        />
        {label}
      </label>

      {error && showError && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
