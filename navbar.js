class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Target langsung tag <my-navbar> agar sticky bekerja */
            my-navbar {
                display: block;
                position: sticky;
                top: 0;
                z-index: 1000;
            }

            .navbar-container {
                position: relative;
                background-color: #ffffff;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px 28px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            .navbar-brand {
                display: flex;
                align-items: center;
                text-decoration: none;
            }

            .navbar-links {
                display: flex;
                gap: 24px;
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
                gap: 4px;
            }

            .dropdown-menu {
                position: absolute;
                top: 100%;
                left: 0;
                background-color: #ffffff;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border-radius: 6px;
                list-style: none;
                padding: 8px 0;
                margin: 8px 0 0 0;
                min-width: 160px;
                display: none;
                z-index: 1001;
            }

            .dropdown-menu li a {
                padding: 8px 16px;
                display: block;
                font-weight: 500;
                white-space: nowrap;
            }

            .dropdown-menu li a:hover {
                background-color: #f7fafc;
            }

            /* Panah Indikator Dropdown */
            .arrow {
                font-size: 10px;
                transition: transform 0.2s ease;
            }

            /* Hover Dropdown untuk Desktop */
            @media (min-width: 769px) {
                .dropdown:hover .dropdown-menu {
                    display: block;
                }

                .dropdown:hover .arrow {
                    transform: rotate(180deg);
                }
            }

            /* --- Tombol Hamburger (Ikon Garis 3) --- */
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

            /* Animasi Berubah Menjadi X (Silang) */
            .hamburger-btn.open span:nth-child(1) {
                transform: translateY(7.7px) rotate(45deg);
            }

            .hamburger-btn.open span:nth-child(2) {
                opacity: 0;
            }

            .hamburger-btn.open span:nth-child(3) {
                transform: translateY(-7.7px) rotate(-45deg);
            }

            /* --- Tampilan untuk layar HP / Mobile --- */
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

                /* Menyesuaikan Dropdown di Mobile */
                .dropdown {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                .dropdown-menu {
                    position: static;
                    box-shadow: none;
                    background-color: #f8fafc;
                    width: 100%;
                    text-align: center;
                    margin-top: 8px;
                    border-radius: 0;
                }

                .dropdown.open .dropdown-menu {
                    display: block;
                }

                .dropdown.open .arrow {
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
                        Teori <span class="arrow">▼</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="classfull.html">Classfull IP</a></li>
                        <li><a href="classless.html">Classless IP</a></li>
                    </ul>
                </li>

                <li><a href="subnetting.html">Subnetting</a></li>
            </ul>
        </nav>
        `;

        // Interaktivitas Klik Hamburger
        const hamburger = this.querySelector('.hamburger-btn');
        const navLinks = this.querySelector('.navbar-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('active');
        });

        // Interaktivitas Klik Dropdown (Khusus Mobile / Touch Screen)
        const dropdownToggle = this.querySelector('.dropdown-toggle');
        const dropdown = this.querySelector('.dropdown');

        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah perpindahan halaman langsung
            dropdown.classList.toggle('open');
        });
    }
}

customElements.define('my-navbar', MyNavbar);
