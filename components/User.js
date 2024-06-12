const template = document.createElement("template");
template.innerHTML = `
    <style>
        .user-card {
            width: 100%;
            border-radius: 12px;
            background-color: white;
            margin-bottom: 24px;
            overflow: hidden;
            border: 2px solid #67C6E3;
        }
        .id {
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            color: darkred;
            font-weight: bold;
            width: 200px;
            padding: 12px;
            font-size: 1.8rem;
            margin: 0 auto;
            margin-top: 12px;
            border-radius: 8px;
            margin-bottom: 24px;
            background-color: #67C6E3;
        }
        .account-status {
            height: 40px;
            font-size: 2.4rem;
            align-items: center;
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .account-status.active {
            background-color: green;
            color: white;
        }
        .account-status.inactive, .account-status.suspended {
            background-color: red;
            color: white;
        }
        .card-body {
            width: 100%;
            display: flex;
            padding: 0 34px;
            align-items: center;
            margin-bottom: 12px;
            box-sizing: border-box;
            background-color: white;
        }
        .details {
            width: 100%;
            position: relative;
        }
        .detail {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #67C6E3;
            padding: 6px 0;
        }
        .detail .label {
            font-size: 1.2rem;
            font-weight: bold;
            padding-right: 6px;
        }
        .detail  {
            & .value {
                font-size: 1.8rem;
            }
        }
        .detail:last-child {
            border: none;
        }
        .profile-picture {
            width: 100px;
            min-width: 100px;
            height: 100px;
            margin-right: 24px;
        }
        .profile-picture img {
            max-width: 100%;
        }
        @media screen and (max-width: 450px){
            .detail {
                & .value {
                    font-size: 1.4rem;
                }
            }
            .account-status{
                font-size: 1.6rem;
                height: 30px;
            }
            .card-body{
                flex-direction: column;
                padding-left: 12px;
                padding-right: 12px;
                & .profile-picture{
                    margin-right: 0;
                    margin-bottom: 12px;
                }
            }
        }
    </style>

    <div class="user-card">
        <div class="id">
            <span>Employee ID: <slot name="id"/></span>
        </div>
        <div class="card-body">
            <div class="profile-picture">
                <img src="" alt="Profile Picture"/>
            </div>
            <div class="details">
                <div class="detail" id="name">
                    <div class="label">Name:</div>
                    <div class="value"></div>
                </div>
                <div class="detail" id="surname">
                    <div class="label">Surname:</div>
                    <div class="value"></div>
                </div>
                <div class="detail" id="gender">
                    <div class="label">Gender:</div>
                    <div class="value"></div>
                </div>
                <div class="detail" id="role">
                    <div class="label">Role:</div>
                    <div class="value"></div>
                </div>
                <div class="detail" id="email">
                <div class="label">Email:</div>
                <div class="value"></div>
            </div>
                <div class="detail" id="experience">
                    <div class="label">Experience:</div>
                    <div class="value"></div>
                </div>
                
                <div class="detail" id="birthday">
                    <div class="label">Birthday:</div>
                    <div class="value"></div>
                </div>
            </div>
        </div>
        <div class="account-status">
            <slot name="status"/>
        </div>
    </div>
`;

export default class UserCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.updateUserCard();
    }

    attributeChangedCallback() {
        this.updateUserCard();
    }

    updateUserCard() {
        this.setProfilePicture();
        this.setAccountStatus();
        this.setDetails();
    }

    setProfilePicture() {
        const gender = this.getAttribute('gender');
        const imgSrc = gender === 'Male' ? 'assets/images/male.png' : 'assets/images/female.png';
        this.shadowRoot.querySelector('.profile-picture img').src = imgSrc;
    }

    setAccountStatus() {
        const accountStatus = this.getAttribute('accountStatus');
        const accountElement = this.shadowRoot.querySelector('.account-status');
        accountElement.className = `account-status ${accountStatus.toLowerCase()}`;
    }

    setDetails() {
        const details = ['name', 'surname', 'gender', 'role', "email", 'experience', 'birthday'];
        details.forEach(detail => {
            this.shadowRoot.querySelector(`#${detail} .value`).innerHTML = this.getAttribute(detail);
        });
    }
}
