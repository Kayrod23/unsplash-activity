const ImageCard = ({ img }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-rose-500">
      <img className="w-80 h-64 object-cover" src={img.urls.regular} alt={img.id} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Camera used: {img.exif.model}</div>
        <p className="text-gray-600 text-base">Photographer: {img.user.name}</p>
      </div>
    </div>
  );
};

export default ImageCard;
