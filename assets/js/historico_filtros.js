document.addEventListener('DOMContentLoaded', function () {
    const filterAll = document.getElementById('filter-all');
    const filterEarned = document.getElementById('filter-earned');
    const filterRedeemed = document.getElementById('filter-redeemed');
    const historyItems = document.querySelectorAll('.history-item');
    const emptyState = document.getElementById('empty-history-state');
    const tabs = [filterAll, filterEarned, filterRedeemed];

    function checkEmptyState() {
        let visibleItems = 0;
        historyItems.forEach(item => {
            if (item.style.display !== 'none') {
                visibleItems++;
            }
        });

        if (visibleItems === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
        }
    }

    function setActiveTab(activeTab) {
        tabs.forEach(tab => tab.classList.remove('active'));
        activeTab.classList.add('active');
    }

    filterAll.addEventListener('click', function () {
        setActiveTab(filterAll);
        historyItems.forEach(item => {
            item.style.display = 'flex';
        });
        checkEmptyState(); 
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
        checkEmptyState(); 
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
        checkEmptyState(); 
    });

    checkEmptyState();
});