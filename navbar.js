class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            my-navbar {
                display: block;
                position: sticky;
                top: 0;
                z-index: 1000;
                background-color: #ffffff;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
            }

            .navbar-container {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 1100px; /* Membatasi lebar agar tidak terlalu melebar */
                width: 100%;
                margin: 0 auto;   /* Memposisikan navbar tepat di tengah */
                padding: 12px 24px;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            .navbar-brand {
                display: flex;
                align-items: center;
                text-decoration: none;
            }

            .navbar-links {
                display: flex;
                gap: 28px;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .navbar-links a {
                text-decoration: none;
                color: #4a5568;
                font-weight: 600;
                font-size: 15px;
                transition: color 0.2s ease;
            }

            .navbar-links a:hover {
                color: #007bff;
            }

            /* --- Dropdown Styling --- */
            .dropdown {
                position: relative;
            }

            .dropdown-toggle {
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .chevron-icon {
                width: 14px;
                height: 14px;
                fill: none;
                stroke: currentColor;
                stroke-width: 2.2;
                stroke-linecap: round;
                stroke-linejoin: round;
                transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .dropdown-menu {
                position: absolute;
                top: calc(100% + 8px);
                right: 0;
                left: auto;
                background-color: #ffffff;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
                border-radius: 8px;
                border: 1px solid #edf2f7;
                list-style: none;
                padding: 6px 0;
                margin: 0;
                min-width: 170px;
                display: none;
                z-index: 1001;
            }

            .dropdown-menu li a {
                padding: 9px 18px;
                display: block;
                font-weight: 500;
                font-size: 14.5px;
                color: #4a5568;
                white-space: nowrap;
                transition: background-color 0.15s ease, color 0.15s ease;
            }

            .dropdown-menu li a:hover {
                background-color: #f7fafc;
                color: #007bff;
            }

            /* Hover Dropdown Desktop */
            @media (min-width: 769px) {
                .dropdown:hover .dropdown-menu {
                    display: block;
                }

                .dropdown:hover .chevron-icon {
                    transform: rotate(180deg);
                }
            }

            /* --- Tombol Hamburger --- */
            .hamburger-btn {
                display: none;
                flex-direction: column;
                justify-content: space-between;
                width: 24px;
                height: 18px;
                background: transparent;
                border: none;
                cursor: pointer;
                padding: 0;
            }

            .hamburger-btn span {
                width: 100%;
                height: 2.5px;
                background-color: #4a5568;
                border-radius: 2px;
                transition: transform 0.3s ease, opacity 0.3s ease;
            }

            .hamburger-btn.open span:nth-child(1) {
                transform: translateY(7.7px) rotate(45deg);
            }

            .hamburger-btn.open span:nth-child(2) {
                opacity: 0;
            }

            .hamburger-btn.open span:nth-child(3) {
                transform: translateY(-7.7px) rotate(-45deg);
            }

            /* --- Tampilan Mobile --- */
            @media (max-width: 768px) {
                .hamburger-btn {
                    display: flex;
                }

                .navbar-links {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background-color: #ffffff;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                    padding: 20px 0;
                    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.05);
                    border-top: 1px solid #f0f0f0;
                    display: none;
                }

                .navbar-links.active {
                    display: flex;
                }

                .dropdown {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                .dropdown-menu {
                    position: static;
                    box-shadow: none;
                    border: none;
                    background-color: #f8fafc;
                    width: 100%;
                    text-align: center;
                    margin-top: 8px;
                    border-radius: 0;
                }

                .dropdown.open .dropdown-menu {
                    display: block;
                }

                .dropdown.open .chevron-icon {
                    transform: rotate(180deg);
                }
            }
        </style>

        <nav class="navbar-container">
            <a href="index.html" class="navbar-brand">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#007bff">
                    <rect x="3" y="3" width="8" height="8" rx="2.5"/>
                    <rect x="13" y="3" width="8" height="8" rx="2.5"/>
                    <rect x="3" y="13" width="8" height="8" rx="2.5"/>
                    <rect x="13" y="13" width="8" height="8" rx="2.5"/>
                </svg>
            </a>

            <button class="hamburger-btn" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="navbar-links">
                <li><a href="index.html">Home</a></li>
                
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle">
                        Teori
                        <svg class="chevron-icon" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6"/>
                        </svg>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="classfull.html">Classfull IP</a></li>
                        <li><a href="classless.html">Classless IP</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle">
                        Latihan
                        <svg class="chevron-icon" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6"/>
                        </svg>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="latihan-classfull.html">Classfull</a></li>
                        <li><a href="latihan-cidr.html">CIDR</a></li>
                        <li><a href="latihan-vlsm.html">VLSM</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        `;

        const hamburger = this.querySelector('.hamburger-btn');
        const navLinks = this.querySelector('.navbar-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('active');
        });

        const dropdownToggles = this.querySelectorAll('.dropdown-toggle');

        dropdownToggles.forEach((toggle) => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const parentDropdown = toggle.closest('.dropdown');
                parentDropdown.classList.toggle('open');
            });
        });
    }
}

customElements.define('my-navbar', MyNavbar);
