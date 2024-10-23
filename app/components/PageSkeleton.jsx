import React from "react";

const PageSkeleton = () => {
  return (
    <div className="flex gap-x-3">
      <div className="w-64">
        <div className="bg-gray-200 animate-pulse h-screen p-4 rounded-lg">
          <div className="space-y-4">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-6" />

            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-300 rounded" />
                <div className="h-4 bg-gray-300 rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-4 m-2">
        <div className="w-full animate-pulse">
          <div className="h-16 bg-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div className="h-6 bg-gray-300 rounded w-32" />
              <div className="flex space-x-4">
                <div className="h-8 w-8 bg-gray-300 rounded-full" />
                <div className="h-8 w-8 bg-gray-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full animate-pulse">
          <div className="bg-gray-200 rounded-lg p-6 space-y-6">
            <div className="space-y-4">
              <div className="h-6 bg-gray-300 rounded w-1/4 mb-6" />

              {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-1/6" />
                  <div className="h-10 bg-gray-300 rounded w-full" />
                </div>
              ))}

              <div className="flex space-x-4 pt-4">
                <div className="h-10 bg-gray-300 rounded w-24" />
                <div className="h-10 bg-gray-300 rounded w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
