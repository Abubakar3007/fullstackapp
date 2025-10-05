import React, { useState } from 'react'
import axios from 'axios';
const ReviewReply = ({ id, userId }) => {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const handleRating = (e) => {
        const selectedRating = parseInt(e.target.dataset.rating, 10);
        setRating(selectedRating);
    };

    const reviewSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/api/car/${id}/review`, {
                rating,
                message,
                userId,
            });
            alert("Review added successfully");
            setMessage('');
            setRating(0);
            window.location.reload();
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={reviewSubmitHandler} method="post" id="tfcl_review_form">
                <div className="mb-4">
                    <label
                        className="text-sm font-medium mb-2 block"
                        htmlFor="review"
                    >
                        Review
                    </label>
                    <textarea
                        id="review"
                        name="review"
                        placeholder="Your Message:"
                        className="rounded-[14px] border border-[#ededed] bg-white text-sm h-[130px] w-full outline-none p-4"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <div className="flex mb-5">
                    <div className="rating-box">
                        <label className="text-sm font-medium mb-2">Rating</label>
                        <div className="text-xs text-[#ff7101] space-x-1 mt-1 [&>i]:cursor-pointer">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <i
                                    key={star}
                                    className={`${star <= rating ? 'fa-solid' : 'fa-regular'} fa-star`}
                                    data-rating={star}
                                    onClick={handleRating}
                                ></i>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="text-base font-medium bg-[#ff7101] px-4 max-w-[150px] w-full rounded-[10px] text-white h-11"
                >
                    Post Comment
                </button>
            </form>
        </div>
    )
}

export default ReviewReply
