import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, error, isLoading } = useQuery({
    queryKey: ["searchResults", searchQuery], // queryKey is an array
    queryFn: async () => {
      const response = await fetch("/api/users/search-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchQuery }),
      });
      const result = await response.json();
      // console.log('API response:', result);
      if (result && typeof result === "object" && !Array.isArray(result)) {
        return Object.values(result);
      }
      return result;
    },
    enabled: !!searchQuery, // only fetch when searchQuery is not empty
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  console.log(data);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="flex items-center relative">
        <input
        placeholder="Search"
          type="search"
          value={searchQuery}
          onChange={handleSearch}
          className="rounded-full outline-blue-700 bg-transparent border-b border-stone-700 px-4 w-full py-3"
        />
        {searchQuery ? "" : <BiSearch className="cursor-pointer hover:text-zinc-500 text-2xl absolute right-2" />}
      </div>
      {Array.isArray(data) ? (
        data.map((user) => (
          <ul key={user._id} className="cursor-pointer">
            {
              <div className="flex items-center mb-4">
                <li>
                  <Link to={`/profile/${user.username}`}>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user?.profileImg || "/avatar-placeholder.png"}
                      alt=""
                    />
                  </Link>
                </li>
                <div className="flex flex-col justify-center ml-1">
                  <Link to={`/profile/${user.username}`}>
                    <li>{user?.fullName}</li>
                    <li className="text-zinc-600">@{user?.username}</li>
                  </Link>
                </div>
              </div>
            }
          </ul>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchBox;
