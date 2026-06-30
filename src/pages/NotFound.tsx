import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="text-center">
        <p className="text-lg font-medium text-violet-600">404 Error</p>

        <h1 className="mt-4 text-7xl font-extrabold text-zinc-900">
          Page Not Found
        </h1>

        <p className="mx-auto mt-6 max-w-md text-zinc-600">
          Sorry, we couldn't find the page you're looking for. It may have been
          moved or deleted.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link to="/">
            <Button>Go Home</Button>
          </Link>

          <Link to="/dashboard">
            <Button variant="secondary">Dashboard</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
