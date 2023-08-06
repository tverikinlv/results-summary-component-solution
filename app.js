async function getDashboardData(url = 'https://tverikinlv.github.io/results-summary-component-solution/data.json') {
    const response = await fetch(url);
    const data = response.json();

    return data;
}

class DashboardDetailItem {
    constructor(data, container = '.dashboard-details__list') {
        this.data = data;
        this.container = document.querySelector(container);
        this.createMarkup();
    }

    createMarkup() {
        this.container.insertAdjacentHTML('beforeend', 
            `<li class="dashboard-details__list-item dashboard-details__list-item--${this.data.category.toLowerCase()}">
                <img src="${this.data.icon}" alt="Reaction icon">
                <span class="dashboard-details__category">${this.data.category}</span>
                <span class="dashboard-details__score">${this.data.score}</span>
                <span class="dashboard-details__max-score">&nbsp; / 100</span>
            </li>`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getDashboardData()
        .then(data => {data.map((el) => new DashboardDetailItem(el))});
})