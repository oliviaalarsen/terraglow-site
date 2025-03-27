// Import hook to access route error details
import { useRouteError } from "react-router-dom";

// ErrorPage component shows a fallback UI when something goes wrong
export default function ErrorPage() {
  const error: any = useRouteError(); // Get error info from React Router

  return (
    <div className="text-danger text-center">
      <h2>💔 oops, something went wrong</h2>
      <p>{error?.message || error?.statusText || "an unexpected error occurred."}</p>
    </div>
  );
}
