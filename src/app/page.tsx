import NewReleases from "./components/new-releases";

export default function Home() {
  return (
    <main className="dark text-foreground bg-background grid grid-cols-4 gap-4 p-24">
      <NewReleases />
    </main>
  );
}
