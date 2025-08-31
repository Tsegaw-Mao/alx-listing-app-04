// components/property/BookingSection.tsx
import { useState, useEffect } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (checkIn && checkOut) {
      const diff =
        (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24);
      setTotal(diff > 0 ? diff * price : 0);
    }
  }, [checkIn, checkOut, price]);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label className="block mb-1 font-medium">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full rounded"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="block mb-1 font-medium">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full rounded"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          min={checkIn}
        />
      </div>

      <div className="mt-4">
        <p>
          Total payment:{" "}
          <strong>{total > 0 ? `$${total.toFixed(2)}` : "$0.00"}</strong>
        </p>
      </div>

      <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
