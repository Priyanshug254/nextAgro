import { useState } from 'react'

export default function DiseasePrediction() {
  const [image, setImage] = useState(null)
  const [prediction, setPrediction] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    setImage(URL.createObjectURL(file))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement ML model prediction logic here
    // For now, we'll just simulate a prediction
    setPrediction({
      disease: 'Leaf Blight',
      confidence: 0.92,
      treatment: 'Apply fungicide XYZ and ensure proper irrigation.'
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Crop Disease Prediction</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2">Upload Crop Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        {image && (
          <div className="mb-4">
            <img src={image} alt="Uploaded crop" className="w-full rounded" />
          </div>
        )}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
          Predict Disease
        </button>
      </form>
      {prediction && (
        <div className="mt-8 bg-green-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Prediction Results</h2>
          <p><strong>Disease:</strong> {prediction.disease}</p>
          <p><strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(2)}%</p>
          <p><strong>Recommended Treatment:</strong> {prediction.treatment}</p>
        </div>
      )}
    </div>
  )
}