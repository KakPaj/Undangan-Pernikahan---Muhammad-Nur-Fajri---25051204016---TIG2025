document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.15
    });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    const attendanceStatus = document.getElementById('attendanceStatus');
    const paxContainer = document.getElementById('paxContainer');
    const guestPax = document.getElementById('guestPax');
    const rsvpForm = document.getElementById('rsvpForm');

    if (attendanceStatus) {
        attendanceStatus.addEventListener('change', function() {
            if (this.value === 'hadir') {
                paxContainer.style.display = 'block'; 
                guestPax.setAttribute('required', 'required'); 
            } else {
                paxContainer.style.display = 'none'; 
                guestPax.removeAttribute('required'); 
                guestPax.value = ''; 
            }
        });
    }

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const rsvpModal = new bootstrap.Modal(document.getElementById('rsvpModal'));
            rsvpModal.show();
            rsvpForm.reset();
            paxContainer.style.display = 'none';
            guestPax.removeAttribute('required');
        });
    }
});

function openInvitation() {
    const coverSection = document.getElementById('cover-section');
    const mainContentCollapse = document.getElementById('mainContentCollapse');
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        bgMusic.play().catch(err => console.log("Autoplay diblokir browser: ", err));
    }

    coverSection.classList.remove('show');
    setTimeout(() => {
        coverSection.classList.add('d-none');
        const bsCollapse = new bootstrap.Collapse(mainContentCollapse, {
            toggle: false
        });
        bsCollapse.show();
    }, 350);
}