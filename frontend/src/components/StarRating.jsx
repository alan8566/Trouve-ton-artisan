function StarRating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div>
      {stars.map((filled, i) => (
        <span key={i} style={{ color: filled ? "#f5c518" : "#ccc" }}>★</span>
      ))}
    </div>
  );
}

export default StarRating;