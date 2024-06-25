import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div id="error-page" className="flex col gap-m center align-center m-auto p-4">
      <h1>Oh my, We can't make one of those...</h1>
      <p>Sorry, page not found.</p>
      <a href="\">Go Back</a>
    </div>
  );
};

export default ErrorPage;
