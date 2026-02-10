import { Link } from "react-router-dom";

export default function AuthFooter({ page }) {
  return (
    <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
      {page === "register" ? (
        <>
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-black dark:text-white font-medium underline"
          >
            Sign In
          </Link>
        </>
      ) : (
        <>
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-black dark:text-white font-medium underline"
          >
            Register
          </Link>
        </>
      )}
    </p>
  );
}
