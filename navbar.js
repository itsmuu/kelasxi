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
            }
        </style>

        <nav class="navbar-container">
            <!-- Brand & Icon 4 Kotak Biru -->
            <a href="index.html" class="navbar-brand">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#007bff">
                    <rect x="3" y="3" width="8" height="8" rx="2.5"/>
                    <rect x="13" y="3" width="8" height="8" rx="2.5"/>
                    <rect x="3" y="13" width="8" height="8" rx="2.5"/>
                    <rect x="13" y="13" width="8" height="8" rx="2.5"/>
                </svg>
            </a>

            <!-- Tombol Hamburger Garis 3 -->
            <button class="hamburger-btn" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <!-- Menu Navigation -->
            <ul class="navbar-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="teori.html">Teori</a></li>
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
    }
}

customElements.define('my-navbar', MyNavbar);