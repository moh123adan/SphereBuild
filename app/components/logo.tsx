export function Logo() {
    return (
      <div className="flex items-center">
        <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-8 h-8 text-[#1a2634]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
            />
          </svg>
        </div>
        <div className="ml-3">
          <div className="text-yellow-400 font-bold text-xl">SPHERE</div>
          <div className="text-white text-sm">CONSTRUCTIONS</div>
        </div>
      </div>
    )
  }
  
  