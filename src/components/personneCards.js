const PersonCard = (person) => {

    return /*html */ `
        
        <div class="flex flex-col items-center w-1/4 bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="${person.image}" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <a href="/person/${person.id}" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${person.name}</a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${person.status}</p>
            </div>
</div>

    `
}

export default PersonCard;