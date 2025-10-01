document.addEventListener('DOMContentLoaded', function () {
    const filterAll = document.getElementById('filter-all');
    const filterEarned = document.getElementById('filter-earned');
    const filterRedeemed = document.getElementById('filter-redeemed');
    const historyItems = document.querySelectorAll('.history-item');
    const tabs = [filterAll, filterEarned, filterRedeemed];

    function setActiveTab(activeTab) {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        activeTab.classList.add('active');
    }

    filterAll.addEventListener('click', function () {
        setActiveTab(filterAll);
        historyItems.forEach(item => {
            item.style.display = 'flex';
        });
    });

    filterEarned.addEventListener('click', function () {
        setActiveTab(filterEarned);
        historyItems.forEach(item => {
            if (item.classList.contains('earned')) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    filterRedeemed.addEventListener('click', function () {
        setActiveTab(filterRedeemed);
        historyItems.forEach(item => {
            if (item.classList.contains('redeemed') || item.classList.contains('expired')) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});