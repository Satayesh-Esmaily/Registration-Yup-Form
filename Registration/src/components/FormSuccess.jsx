export default function FormSuccess({ show }) {
  if (!show) return null;

  return (
    <p className="mt-4 text-center text-sm font-medium text-green-500">
      Registration Successful!
    </p>
  );
}
