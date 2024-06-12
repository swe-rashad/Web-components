class EmployeeManager {

    
    constructor() {
        this.employeeListElement = document.querySelector('.employee-list');
        this.emptyStateElement = document.querySelector('.content-box .empty-state');
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => this.showUsers());
    }


    showEmptyState() {
        this.emptyStateElement.classList.add("show");
    }

    clearEmployeeList() {
        this.employeeListElement.innerHTML = '';
        this.emptyStateElement.classList.remove("show");
    }

    

    async showUsers(search = '') {
        try {
            const response = await fetch("mocks/employeeList.json");
            const data = await response.json();
            
            const filteredUsers = data.filter(user => user.name.startsWith(search));

            if (filteredUsers.length === 0) {
                this.showEmptyState();
                return;
            }

            filteredUsers.forEach(user => {
                this.employeeListElement.innerHTML += this.createUserCard(user);
            });
        } catch (error) {
            console.error("Error fetching user data:", error);
            this.showEmptyState();
        }
    }

    async searchUsers(event) {
        const search = event?.target?.value || '';
        this.clearEmployeeList();
        await this.showUsers(search);
    }

  

    createUserCard(user) {
        return `
            <user-card 
                name="${user.name}" 
                surname="${user.surname}" 
                gender="${user.gender}"
                email="${user.email}"
                accountStatus="${user.account_status}"
                role="${user.role} 🖥️"
                experience="${user.experience}"
                birthday="${user.birthday} 🗓️"
            >
                <span slot="id">${user.id}</span>
                <span slot="status">${user.account_status}</span>
            </user-card>
        `;
    }
}

const employeeManager = new EmployeeManager();
employeeManager.init();

// Attach search event handler to the search input field (assuming it has an id 'searchInput')
document.getElementById('searchInput').addEventListener('change', (event) => employeeManager.searchUsers(event));
