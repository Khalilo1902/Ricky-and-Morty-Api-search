const inputSearch = (name) => {

  return /*html */`
  <form class="flex justify-center py-4 gap-2" method="get">
      <input type="text" name="name" class="p-2 border border-gray-300 rounded shadow-md" id="inputSearch" value="${name}"/>
      <button class="bg-green-500 text-white py-2 px-4 rounded shadow-md uppercase" id="searchBtn" >search</button>
  </form>
`
}



export default inputSearch;
