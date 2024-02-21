import StarIcon from "@mui/icons-material/Star";
import { Progress } from "flowbite-react";

const HostReviews = () => {
  return (
    <>
      <div className="relative px-5 md:px-96 min-h-80v">
        <div className="md:p-10 md:bg-white md:flex md:rounded-lg">
          <div className="md:mr-10 md:basis-1/3">
            <div className="flex items-center pb-2">
              <div className="mr-5">
                <h3>Your reviews</h3>
              </div>
              <div>
                <span>last</span>
                <span className="ml-1 font-medium underline">30 days</span>
              </div>
            </div>

            <div className="flex items-center py-2">
              <div className="mr-1">
                <h3>5.0</h3>
              </div>
              <div>
                <StarIcon className="text-orange-400" />
              </div>
              <div>
                <span className="font-medium">overall rating</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between my-2">
                <div className="basis-1/6">
                  <span>5 stars</span>
                </div>
                <div className="basis-4/6">
                  <Progress progress={100} size="sm" color="yellow" />
                </div>
                <div className="basis-1/6 text-end">
                  <span>100%</span>
                </div>
              </div>
              <div className="flex items-center justify-between my-2">
                <div className="basis-1/6">
                  <span>4 stars</span>
                </div>
                <div className="basis-4/6">
                  <Progress progress={0} size="sm" color="yellow" />
                </div>
                <div className="basis-1/6 text-end">
                  <span>0%</span>
                </div>
              </div>
              <div className="flex items-center justify-between my-2">
                <div className="basis-1/6">
                  <span>3 stars</span>
                </div>
                <div className="basis-4/6">
                  <Progress progress={0} size="sm" color="yellow" />
                </div>
                <div className="basis-1/6 text-end">
                  <span>0%</span>
                </div>
              </div>
              <div className="flex items-center justify-between my-2">
                <div className="basis-1/6">
                  <span>2 stars</span>
                </div>
                <div className="basis-4/6">
                  <Progress progress={0} size="sm" color="yellow" />
                </div>
                <div className="basis-1/6 text-end">
                  <span>0%</span>
                </div>
              </div>
              <div className="flex items-center justify-between my-2">
                <div className="basis-1/6">
                  <span>1 star</span>
                </div>
                <div className="basis-4/6">
                  <Progress progress={0} size="sm" color="yellow" />
                </div>
                <div className="basis-1/6 text-end">
                  <span>0%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:basis-2/3">
            <div className="my-4">
              <div className="my-2">
                <h3>Reviews (2)</h3>
              </div>

              <div className="my-2 customer-review">
                <div className="flex my-2 item-center justify-normal review-stars">
                  <StarIcon className="text-orange-400" />
                  <StarIcon className="text-orange-400" />
                  <StarIcon className="text-orange-400" />
                  <StarIcon className="text-orange-400" />
                  <StarIcon className="text-orange-400" />
                </div>
                <div className="text-lg review-title">
                  <span className="mr-2 font-semibold">Elliot</span>
                  <span className="font-semibold text-gray-500 ">
                    December 1, 2022
                  </span>
                </div>
                <div className="review-body">
                  <p>
                    The beach bum is such as awesome van! Such as comfortable
                    trip. We had it for 2 weeks and there was not a single
                    issue. Super clean when we picked it up and the host is very
                    comfortable and understanding. Highly recommend!
                  </p>
                </div>
              </div>
              <div className="my-2 customer-review">
                <div className="flex my-2 item-center justify-normal review-stars">
                  <StarIcon className="text-orange-400" />
                  <StarIcon className="text-orange-400" />
                  <StarIcon className="text-orange-400" />
                  <StarIcon className="text-orange-400" />
                  <StarIcon className="text-orange-400" />
                </div>
                <div className="text-lg review-title">
                  <span className="mr-2 font-semibold">Elliot</span>
                  <span className="font-semibold text-gray-500 ">
                    December 1, 2022
                  </span>
                </div>
                <div className="review-body">
                  <p>
                    The beach bum is such as awesome van! Such as comfortable
                    trip. We had it for 2 weeks and there was not a single
                    issue. Super clean when we picked it up and the host is very
                    comfortable and understanding. Highly recommend!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostReviews;
