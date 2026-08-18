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
                max-width: 1100px;
                width: 100%;
                margin: 0 auto;
                padding: 8px 24px;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            .navbar-brand {
                display: flex;
                align-items: center;
                text-decoration: none;
                padding: 4px 0;
            }

            .navbar-links {
                display: flex;
                gap: 16px;
                list-style: none;
                margin: 0;
                padding: 0;
                align-items: center;
            }

            .navbar-links a {
                text-decoration: none;
                color: #4a5568;
                font-weight: 600;
                font-size: 15px;
                transition: color 0.2s ease, background-color 0.2s ease;
            }

            /* Area klik lebih luas untuk tautan biasa */
            .navbar-links > li > a:not(.dropdown-toggle) {
                padding: 8px 12px;
                border-radius: 6px;
                display: inline-block;
            }

            .navbar-links a:hover {
                color: #007bff;
            }

            /* --- Dropdown Styling --- */
            .dropdown {
                position: relative;
            }

            /* Memperbesar area sentuh/klik tombol dropdown */
            .dropdown-toggle {
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 8px 12px;
                border-radius: 6px;
                user-select: none;
            }

            .dropdown-toggle:hover,
            .dropdown.open .dropdown-toggle {
                background-color: #f1f5f9;
                color: #007bff;
            }

            .chevron-icon {
                width: 14px;
                height: 14px;
                fill: none;
                stroke: currentColor;
                stroke-width: 2.2;
                stroke-linecap: round;
                stroke-linejoin: round;
                transition: transform 0.2s ease;
                pointer-events: none;
            }

            /* Container dropdown menu dengan bridge area tanpa celah kosong */
            .dropdown-menu {
                position: absolute;
                top: 100%;
                right: 0;
                left: auto;
                background-color: #ffffff;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
                border-radius: 8px;
                border: 1px solid #edf2f7;
                list-style: none;
                padding: 6px 0;
                margin: 4px 0 0 0;
                min-width: 170px;
                display: none;
                z-index: 1001;
            }

            .dropdown-menu li a {
                padding: 10px 18px;
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

            /* Buka dropdown saat di-hover ATAU saat kelas .open aktif (di-klik) */
            .dropdown:hover .dropdown-menu,
            .dropdown.open .dropdown-menu {
                display: block;
            }

            .dropdown:hover .chevron-icon,
            .dropdown.open .chevron-icon {
                transform: rotate(180deg);
            }

            /* --- Tombol Hamburger --- */
            .hamburger-btn {
                display: none;
                flex-direction: column;
                justify-content: space-between;
                width: 28px;
                height: 20px;
                background: transparent;
                border: none;
                cursor: pointer;
                padding: 2px;
            }

            .hamburger-btn span {
                width: 100%;
                height: 2.5px;
                background-color: #4a5568;
                border-radius: 2px;
                transition: transform 0.3s ease, opacity 0.3s ease;
            }

            .hamburger-btn.open span:nth-child(1) {
                transform: translateY(6.5px) rotate(45deg);
            }

            .hamburger-btn.open span:nth-child(2) {
                opacity: 0;
            }

            .hamburger-btn.open span:nth-child(3) {
                transform: translateY(-6.5px) rotate(-45deg);
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
                    align-items: stretch;
                    gap: 4px;
                    padding: 12px 16px;
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
                    border-top: 1px solid #f0f0f0;
                    display: none;
                    box-sizing: border-box;
                }

                .navbar-links.active {
                    display: flex;
                }

                .dropdown {
                    width: 100%;
                }

                .dropdown-toggle {
                    justify-content: space-between;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 10px 14px;
                }

                .dropdown-menu {
                    position: static;
                    box-shadow: none;
                    border: none;
                    background-color: #f8fafc;
                    width: 100%;
                    margin-top: 4px;
                    border-radius: 6px;
                }

                .dropdown-menu li a {
                    padding: 10px 20px;
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
        const dropdowns = this.querySelectorAll('.dropdown');

        // Toggle Hamburger Menu (Mobile)
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('active');
        });

        // Toggle Dropdown Menu
        dropdowns.forEach((dropdown) => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Tutup dropdown lain yang sedang terbuka
                dropdowns.forEach((d) => {
                    if (d !== dropdown) d.classList.remove('open');
                });

                // Toggle dropdown yang diklik
                dropdown.classList.toggle('open');
            });
        });

        // Fitur: Tutup dropdown jika pengguna mengklik area luar navbar
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                dropdowns.forEach((d) => d.classList.remove('open'));
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('open');
                    navLinks.classList.remove('active');
                }
            }
        });
    }
}

customElements.define('my-navbar', MyNavbar);
