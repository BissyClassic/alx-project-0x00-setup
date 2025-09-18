import Button from "@/components/Button";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Landing Page</h1>
      <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
      <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
      <Button title="Large Rounded-full" size="large" shape="rounded-full" />
    </div>
  );
}
