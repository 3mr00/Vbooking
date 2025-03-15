// pages/404.tsx
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page Not Found !!!</p>
      <div className="mt-6">
        <Link href="/" passHref>
          <Button variant="default">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
