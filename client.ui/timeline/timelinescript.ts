// Show the modal when the "New Post" button is clicked
document.getElementById('newPostButton')?.addEventListener('click', () => {
    const postModal = document.getElementById('postModal');
    if (postModal) {
        postModal.style.display = 'flex';
    }
});

// Post the content and hide the modal
document.getElementById('createPostButton')?.addEventListener('click', () => {
    const postContentElement = document.getElementById('postContent') as HTMLTextAreaElement;
    const postContent = postContentElement.value.trim();

    if (postContent === "") {
        alert("Please write something before posting.");
        return;
    }

    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.textContent = postContent;

    const timeline = document.getElementById('timeline');
    if (timeline) {
        timeline.prepend(postElement);
    }

    postContentElement.value = '';
    const postModal = document.getElementById('postModal');
    if (postModal) {
        postModal.style.display = 'none';
    }
});

// Close the modal if clicked outside of the modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('postModal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});

// Adding event listeners to the new icons
document.getElementById('profileIcon')?.addEventListener('click', () => {
    alert("Profile icon clicked!");
});

document.getElementById('settingsIcon')?.addEventListener('click', () => {
    alert("Settings icon clicked!");
});

document.getElementById('globeIcon')?.addEventListener('click', () => {
    alert("Globe icon clicked!");
});

document.getElementById('centerImage')?.addEventListener('click', () => {
    alert("Center image clicked!");
});
