import React, { useEffect, useState } from "react";
import RatingBox from './RatingBox'
import ReviewReply from './ReviewReply'
import axios from "axios";

const Review = ({ id, userId }) => {

  // const [car, setCar] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        // 2️⃣ Fetch reviews
        const reviewRes = await axios.get(`http://localhost:5000/api/car/${id}/review`);
        setReviews(reviewRes.data);


      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, [id]);

  // update rating stats
  const totalReviews = reviews.length;
  let averageRating = 0;

  if (reviews.length > 0) {
    const sum = reviews.reduce((acc, r) => acc + Number(r.rating), 0);
    averageRating = sum / reviews.length;
  }


  return (
    <div>
      <h3 className='text-2xl font-medium mb-3'>Car User Reviews & Rating</h3>
      {/* overll rating */}
      <div className="flex items-center gap-5">
        <div className="text-[70px] font-bold flex items-center gap-3 text-[#ff7101]">
          <i className="fa-solid fa-star w-[68px] h-[68px] bg-[rgba(255,113,1,0.06)] grid place-items-center rounded-full text-[30px] text-[#ff7101]"></i>
          {/* {car?.averageRating} */}
          {averageRating.toFixed(1)}
        </div>
        <div>
          <p>Overall Rating</p>
          <p>Base on <b> {totalReviews} Reviews </b></p>
        </div>
      </div>
      {/* rating box */}
      <div>
        <h4 className='font-medium mb-8'>{totalReviews} Rating and Reviews</h4>
        <RatingBox reviews={reviews} userId={userId} />
      </div>
      {/* Reply box */}
      <div>
        <h4 className='text-xl font-medium mb-6'>Leave reply</h4>
        <ReviewReply id={id} userId={userId} />
      </div>
    </div>
  )
}

export default Review