export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Reuel Blogs</h1>
      <p className="text-lg max-w-md">
        Select a section from the navigation above to start reading.
      </p>
    </div>
  )
}
