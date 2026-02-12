// Mobile Menu Logic
        const btn = document.getElementById('menu-btn');
        const nav = document.getElementById('menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('open');
            nav.classList.toggle('flex');
            nav.classList.toggle('hidden');
        });

        // Email Validation Logic (Matches image_4df7bc.png)
        const form = document.getElementById('newsletter-form');
        const input = document.getElementById('email-input');
        const errorMsg = document.getElementById('error-msg');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailValue = input.value;
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!re.test(emailValue)) {
                errorMsg.classList.remove('hidden');
                input.classList.add('border-brightRed', 'text-brightRed');
            } else {
                errorMsg.classList.add('hidden');
                input.classList.remove('border-brightRed', 'text-brightRed');
               
            }
        });