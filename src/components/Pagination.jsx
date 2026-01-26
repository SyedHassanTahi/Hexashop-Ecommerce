const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {

    return (
        <div className="flex justify-center gap-2 items-center pt-5">
            {/* Prev */}
            <button
                disabled={currentPage === 1}
                onClick={() => {
                    setCurrentPage(currentPage - 1);
                }}
                className="px-4 py-2 border disabled:opacity-50"
            >
                &lt;
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                    <button
                        key={page}
                        onClick={() => {
                            setCurrentPage(page);
                        }}
                        className={`px-4 py-2 border ${
                            currentPage === page
                                ? "bg-[#2a2a2a] text-white"
                                : "bg-white text-black hover:bg-[#2a2a2a] hover:text-white"
                        }`}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => {
                    setCurrentPage(currentPage + 1);
                }}
                className="px-4 py-2 border disabled:opacity-50"
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
