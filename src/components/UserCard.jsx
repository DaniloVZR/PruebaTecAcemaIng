export const UserCard = ({ id, image, name, lastname, email, phone, ciudad, country }) => {
  return (
    <div className="bg-gray-400 p-2 rounded-lg">
      <img src={image} alt="" />
      <h1><strong>Fullname:</strong> {name} {lastname}</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Email:</strong>{email}</p>
      <p><strong>Phone Number:</strong>{phone}</p>
      <p><strong>Location:</strong> {ciudad} - {country}</p>
      <div className="flex gap-2 w-full">
        <button className="flex-1 cursor-pointer bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</button>
        <button className="flex-1 cursor-pointer bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
      </div>
    </div>
  )
}
