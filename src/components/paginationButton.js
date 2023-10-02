

const PaginationButton = (label, pageNumber="", name="") => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get('page')?? '';
    const isActive = Number(pageNumber) === Number(page)
    if(pageNumber ==="") {
        return /*html */`
        <button  class="p-2 border bg-gray-200 shadow-md rounded cursor-not-allowed border-none" disabled >
            ${label}
        </button>
    `;
    }

    return /*html */`
        <a href="?name=${name}&page=${pageNumber}"  class="p-2 border border-gray-200 shadow-md rounded ${isActive ? 'bg-neutral-600 text-white': 'bg-white'}" >
            ${label}
        </a>
    `;
}

export default PaginationButton;