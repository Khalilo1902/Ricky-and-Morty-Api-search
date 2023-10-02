import PaginationButton from "../components/paginationButton";

export const renderPagination = (info, name="", page="") => {
    const currentPage = page ?  Number(page) : 1;
    const pageCount = Number(info.pages)
    const nextPage = info.next ? currentPage + 1 : '' ;
    const prevPage = info.prev ? currentPage - 1 : '';


    let pageNUmbers=displayPageNUmbers(pageCount, currentPage, name);
    


    document.querySelector('#paginator').innerHTML =  pageCount > 1 ? /* html */`
        <div class=" flex justify-center gap-1 py-4 text-xl">

            ${PaginationButton('prev', prevPage, name)}
            ${pageNUmbers}
            ${PaginationButton('next', nextPage, name)}
        </div>
    `: '';
}

const displayPageNUmbers = (pageCount, currentPage, name="") => {
    let pageNumbers = [];
    if(pageCount <= 5) {
        return Array(5).fill().map((_, index) => PaginationButton(index+1, index+1, name)).join('');
    }

    if(currentPage <3) {
        pageNumbers = [...Array(3).fill().map((_, index) => PaginationButton(index+1, index+1, name))]
        pageNumbers.push('<div>...</div>')
        pageNumbers.push(PaginationButton(pageCount, pageCount, name))
        return pageNumbers.join('');
    }


    if(currentPage > pageCount - 2) {
        pageNumbers.push(PaginationButton('1', 1, name))
        pageNumbers.push('<div>...</div>')
        pageNumbers = [...pageNumbers, ...Array(3).fill().map((_, index) => PaginationButton(pageCount + index- 2, pageCount + index- 2, name))]

        return pageNumbers.join('');
    }

    pageNumbers.push(PaginationButton('1', 1, name))
    if(currentPage !== 3) {
        pageNumbers.push('<div>...</div>')
    }
    pageNumbers.push(PaginationButton(currentPage - 1, currentPage - 1, name))
    pageNumbers.push(PaginationButton(currentPage, currentPage, name))
    pageNumbers.push(PaginationButton(currentPage + 1, currentPage + 1, name))
    if(currentPage !== pageCount - 2) {
        pageNumbers.push('<div>...</div>')
    }
    pageNumbers.push(PaginationButton(pageCount, pageCount, name))

    return pageNumbers.join('');
}