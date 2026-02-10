export default function FormSuccess({ show, message }) {
  if (!show) return null;

  return (
    <p className="mt-4 text-green-600 dark:text-green-400 font-medium text-center">
      {message}
    </p>
  );
}
