class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Cukup di html saja — kalau body ikut diberi overflow-x:hidden,
               body akan jadi scroll container sendiri dan merusak
               position: sticky pada navbar */
            html {
                overflow-x: hidden;
            }

            my-navbar {
                display: block;
                position: sticky;
                top: 0;
                z-index: 1000;
                width: 100%;
            }

            .navbar-container {
                position: relative;
                background-color: #ffffff;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px 24px;
                font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                box-sizing: border-box;
                width: 100%;
            }

            .navbar-brand {
                display: flex;
                align-items: center;
                text-decoration: none;
                z-index: 1001;
            }

            /* --- Desktop Nav Links --- */
            .navbar-links {
                display: flex;
                align-items: center;
                gap: 16px;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .navbar-links li {
                position: relative;
            }

            .navbar-links a, .dropdown-trigger {
                position: relative;
                text-decoration: none;
                color: #4a5568;
                font-weight: 600;
                font-size: 15px;
                padding: 8px 14px;
                display: flex;
                align-items: center;
                gap: 6px;
                border: none;
                background: transparent;
                cursor: pointer;
                transition: color 0.2s ease, background-color 0.2s ease;
                border-radius: 6px;
                box-sizing: border-box;
            }

            .navbar-links a:hover, .dropdown-trigger:hover {
                color: #2563eb;
                background-color: #eff6ff;
            }

            /* --- Efek Underline Gradien Saat Hover --- */
            .navbar-links a::after,
            .dropdown-trigger::after {
                content: "";
                position: absolute;
                left: 14px;
                right: 14px;
                bottom: 4px;
                height: 2.5px;
                border-radius: 2px;
                background: linear-gradient(90deg, #2563eb, #06b6d4);
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 0.25s ease;
                pointer-events: none;
            }

            @media (hover: hover) and (pointer: fine) {
                .navbar-links a:hover::after,
                .dropdown-trigger:hover::after {
                    transform: scaleX(1);
                }
            }

            /* Underline tetap aktif saat dropdown sedang terbuka */
            .dropdown-item.open .dropdown-trigger::after {
                transform: scaleX(1);
            }

            /* Ikon Panah Dropdown */
            .arrow-icon {
                width: 12px;
                height: 12px;
                fill: currentColor;
                transition: transform 0.25s ease;
            }

            /* --- Dropdown Menu Styling --- */
            .dropdown-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: auto;
                background-color: #ffffff;
                min-width: 170px;
                max-width: calc(100vw - 32px);
                box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
                border-radius: 8px;
                border: 1px solid #e2e8f0;
                padding: 8px 0;
                list-style: none;
                z-index: 1005;
                margin-top: 4px;
            }

            /* Dropdown terakhir (paling kanan) dibuka rata kanan supaya tidak keluar layar */
            .navbar-links li.dropdown-item:last-of-type .dropdown-menu {
                left: auto;
                right: 0;
            }

            .dropdown-menu a {
                padding: 10px 16px;
                font-size: 14px;
                font-weight: 500;
                color: #334155;
                display: block;
                border-radius: 0;
                white-space: nowrap;
            }

            .dropdown-menu a::after {
                display: none;
            }

            .dropdown-menu a:hover {
                background-color: #f1f5f9;
                color: #2563eb;
            }

            /* Buka Dropdown Saat Memiliki Kelas .open */
            .dropdown-item.open .dropdown-menu {
                display: block;
            }

            .dropdown-item.open .arrow-icon {
                transform: rotate(180deg);
            }

            /* --- Tombol Hamburger Garis 3 --- */
            .hamburger-btn {
                display: none;
                flex-direction: column;
                justify-content: space-between;
                width: 28px;
                height: 20px;
                background: transparent;
                border: none;
                cursor: pointer;
                padding: 0;
                z-index: 1001;
            }

            .hamburger-btn span {
                width: 100%;
                height: 3px;
                background-color: #334155;
                border-radius: 2px;
                transition: transform 0.3s ease, opacity 0.3s ease;
            }

            .hamburger-btn.open span:nth-child(1) {
                transform: translateY(8.5px) rotate(45deg);
            }

            .hamburger-btn.open span:nth-child(2) {
                opacity: 0;
            }

            .hamburger-btn.open span:nth-child(3) {
                transform: translateY(-8.5px) rotate(-45deg);
            }

            /* =========================================
               --- TAMPILAN RESPONSIVE MOBILE (HP) ---
               ========================================= */
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
                    align-items: stretch;
                    gap: 0;
                    padding: 12px 16px;
                    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
                    border-top: 1px solid #f1f5f9;
                    display: none;
                    box-sizing: border-box;
                }

                .navbar-links.active {
                    display: flex;
                }

                .navbar-links li {
                    width: 100%;
                }

                /* Menambah area ketukan jempol di HP agar tidak meleset */
                .navbar-links a, .dropdown-trigger {
                    width: 100%;
                    padding: 14px 16px;
                    font-size: 16px;
                    justify-content: space-between;
                    border-bottom: 1px solid #f8fafc;
                }

                .navbar-links a::after,
                .dropdown-trigger::after {
                    display: none;
                }

                /* Tampilan Accordion Dropdown di HP */
                .dropdown-menu {
                    position: static;
                    display: none;
                    box-shadow: none;
                    border: none;
                    background-color: #f8fafc;
                    border-radius: 8px;
                    margin: 4px 0 8px 0;
                    padding: 4px 0;
                    max-width: none;
                }

                .navbar-links li.dropdown-item:last-of-type .dropdown-menu {
                    left: auto;
                    right: auto;
                }

                .dropdown-menu a {
                    padding: 12px 24px;
                    font-size: 15px;
                    border-bottom: none;
                }

                .dropdown-item.open .dropdown-menu {
                    display: block;
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

                <li class="dropdown-item">
                    <button class="dropdown-trigger">
                        <span>Teori</span>
                        <svg class="arrow-icon" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                        </svg>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="classfull.html">Classfull IP</a></li>
                        <li><a href="classless.html">Classless IP</a></li>
                    </ul>
                </li>

                <li class="dropdown-item">
                    <button class="dropdown-trigger">
                        <span>Latihan</span>
                        <svg class="arrow-icon" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                        </svg>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="latihan-classfull.html">Classfull</a></li>
                        <li><a href="./subnetting.html">CIDR</a></li>
                        <li><a href="latihan-vlsm.html">VLSM</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        `;

        // Interactive JavaScript Logic
        const hamburger = this.querySelector('.hamburger-btn');
        const navLinks = this.querySelector('.navbar-links');
        const dropdownItems = this.querySelectorAll('.dropdown-item');

        // Toggle Hamburger Menu (Buka/Tutup Navigasi Mobile)
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('active');
        });

        // Toggle Dropdown (Teori & Latihan)
        dropdownItems.forEach((item) => {
            const trigger = item.querySelector('.dropdown-trigger');

            trigger.addEventListener('click', (e) => {
                e.stopPropagation();

                // Tutup dropdown lain yang sedang terbuka
                dropdownItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                    }
                });

                // Buka / Tutup dropdown yang diklik
                item.classList.toggle('open');
            });
        });

        // Menutup menu jika mengklik di luar area navbar
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('open');
                dropdownItems.forEach((item) => item.classList.remove('open'));
            }
        });
    }
}

customElements.define('my-navbar', MyNavbar);
