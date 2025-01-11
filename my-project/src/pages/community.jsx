import { useState } from 'react'

const samplePosts = [
  { id: 1, author: 'John Doe', content: 'Just harvested my corn crop. Great yield this year!', likes: 15, comments: 3 },
  { id: 2, author: 'Jane Smith', content: 'Anyone have tips for dealing with aphids on tomato plants?', likes: 8, comments: 7 },
  { id: 3, author: 'Bob Johnson', content: 'Excited to try out the new irrigation system next week.', likes: 12, comments: 2 },
]

export default function Community() {
  const [posts, setPosts] = useState(samplePosts)
  const [newPost, setNewPost] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const post = {
      id: posts.length + 1,
      author: 'Current User',
      content: newPost,
      likes: 0,
      comments: 0,
    }
    setPosts([post, ...posts])
    setNewPost('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Farmer Community</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          rows="3"
          placeholder="Share your thoughts or ask a question..."
          required
        ></textarea>
        <button type="submit" className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Post
        </button>
      </form>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">{post.author}</h2>
            <p className="mb-4">{post.content}</p>
            <div className="flex items-center  text-sm text-gray-500">
              <button className="mr-4 hover:text-blue-500">Like ({post.likes})</button>
              <button className="hover:text-blue-500">Comment ({post.comments})</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}