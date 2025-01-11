import { useState } from 'react';

const sampleEquipment = [
  { id: 1, name: 'Tractor', owner: 'Ram Charan', price: 1000, type: 'Agriculture', image: './tractor.jpg' },
  { id: 2, name: 'Harvester', owner: 'Ramu', price: 750, type: 'Harvesting', image: './harvester.png' },
  { id: 3, name: 'Seeder', owner: 'Satveer', price: 500, type: 'Seeding', image: '/seeder.png' },
];

export default function EquipmentRental() {
  const [equipment, setEquipment] = useState(sampleEquipment);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    price: '',
    type: '',
    image: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEquipment = { id: Date.now(), ...formData }; // Add unique ID
    setEquipment([...equipment, newEquipment]); // Update equipment list
    setShowForm(false); // Hide form after submission
    setFormData({ name: '', owner: '', price: '', type: '', image: '' }); // Reset form
  };

  // Handle equipment deletion
  const handleDelete = (id) => {
    const updatedEquipment = equipment.filter((item) => item.id !== id); // Remove item by ID
    setEquipment(updatedEquipment);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Equipment Rental</h1>

      {/* Equipment List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipment.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-58 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="mb-2">Owner: {item.owner}</p>
            <p className="mb-2">Type: {item.type}</p>
            <p className="mb-4">Price: Rupees {item.price}/day</p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Rent Now
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* List Equipment Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">List Your Equipment</h2>
        <p className="mb-4">
          Have equipment you'd like to rent out? List it here and earn extra income!
        </p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'List Equipment'}
        </button>

        {/* Form for Listing Equipment */}
        {showForm && (
          <form onSubmit={handleSubmit} className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Equipment Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Owner Name</label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Price (per day)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Type of Equipment</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
