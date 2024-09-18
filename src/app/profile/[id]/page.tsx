export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center py-8 min-h-screen">
      <h1>Profile Page</h1>

      <hr />
      <p className="text-white text-4xl">
        Profile Page
        <span className="p-2 bg-orange-400 text-2xl m-2 rounded-md">{params.id}</span>
      </p>
    </div>
  );
}
