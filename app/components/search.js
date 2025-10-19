"use client";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ filter , setFilter }) {
    return (
        <div className="w-full h-11 flex justify-between gap-2 mb-4">
            <input
                className="rounded bg-gray-50 pl-5 h-full md:w-full border border-gray-200"
                type="text"
                placeholder="Search todo..."
            />
            <button className="flex justify-center items-center rounded border border-gray-200 bg-gray-50 text-white h-full w-24">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </button>

            {/* filter */}
            <div className="hidden md:block">
                <select
                    className="border border-gray-200 rounded-md p-2 bg-white text-gray-700 h-full"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="filter">Filter</option>
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="notdone">Not Done</option>
                </select>
            </div>
            <div className="relative block md:hidden p-2 bg-white rounded-md cursor-pointer">
                <FunnelIcon className="w-5 h-5 text-gray-700" />
            </div>
        </div>
    );
}
