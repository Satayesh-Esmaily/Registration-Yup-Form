export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 rounded-2xl bg-white dark:bg-black shadow-lg border border-gray-200 dark:border-gray-800">
        {children}
      </div>
    </div>
  );
}
