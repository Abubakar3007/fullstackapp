import React, { useState } from "react";
import DefaultImage from "../../assets/images/car-image.webp";
import ReviewReply from "./ReviewReply"; // make sure to import

const RatingBox = ({ reviews, userId }) => {
  const [editingReviewId, setEditingReviewId] = useState(null);

  const toggleEdit = (reviewId) => {
    setEditingReviewId(prev => (prev === reviewId ? null : reviewId));
  };

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((data, index) => (
          <div key={index} className="relative mb-5 pb-5 border-b border-[#ededed]">
            <div className="flex mb-4 items-center">
              <img
                src={DefaultImage}
                alt=""
                className="rounded-full w-[60px] h-[60px] object-cover mr-5"
              />
              <div className="flex justify-between -mt-[2px] w-full">
                <div>
                  <a href="#" className="text-[18px] font-medium">
                    {data.user?.username || "Anonymous"}
                  </a>
                  <div className="text-xs text-[#ff7101] space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i
                        key={i}
                        className={i <= data.rating ? "fa-solid fa-star" : "fa-regular fa-star"}
                      ></i>
                    ))}
                  </div>
                </div>
                <span className="text-xs leading-4 text-[#696665]">
                  {new Date(data.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm text-[#696665]">{data.message}</p>
            </div>

            {/* Show Edit button only if review belongs to current user */}
            {userId === data.user?._id && (
              <button
                onClick={() => toggleEdit(data._id)}
                className="text-[#ff7101] text-sm"
              >
                <i className="fa-solid fa-pencil mr-[6px] align-middle"></i>
                Edit
              </button>
            )}

            {/* Show ReviewReply for this review only */}
            {editingReviewId === data._id && (
              <ReviewReply id={data.carId} userId={userId} reviewId={data._id} />
            )}
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500">No reviews yet.</p>
      )}
    </div>
  );
};

export default RatingBox;
