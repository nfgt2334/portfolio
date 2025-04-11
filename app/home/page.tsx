import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div className="grid grid-cols-4 gap-4">
        <Link
          href="/profile"
          className="p-6 border rounded-lg shadow-sm hover:shadow-xl transition-shadow hover:bg-white hover:bg-opacity-10"
        >
          <p className="text-gray-600">Profile</p>
        </Link>
        <Link
          href="/skils"
          className="p-6 border rounded-lg shadow-sm hover:shadow-xl transition-shadow hover:bg-white hover:bg-opacity-10"
        >
          Skils
        </Link>
        <Link
          href="/works"
          className="p-6 border rounded-lg shadow-sm hover:shadow-xl transition-shadow hover:bg-white hover:bg-opacity-10"
        >
          Works
        </Link>
        <Link
          href="/contact"
          className="p-6 border rounded-lg shadow-sm hover:shadow-xl transition-shadow hover:bg-white hover:bg-opacity-10"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
