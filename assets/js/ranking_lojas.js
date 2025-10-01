document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    const rankingTable = document.querySelector('.ranking-table');
    const tableRows = rankingTable.querySelectorAll('tbody tr');

    function filterTable() {
        const searchTerm = searchInput.value.toLowerCase();

        tableRows.forEach(row => {
            const storeNameCell = row.cells[1];
            const storeName = storeNameCell.textContent.toLowerCase();

            if (storeName.includes(searchTerm)) {
                row.style.display = ''; 
            } else {
                row.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('keyup', filterTable);
});