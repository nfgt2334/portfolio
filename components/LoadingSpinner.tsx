export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50 dark:border-blue-400"></div>
    </div>
  )
}
