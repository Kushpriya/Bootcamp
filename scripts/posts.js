import { request } from "./request.js";

fetch('../app/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

document.addEventListener("DOMContentLoaded", function() {
    request('https://jsonplaceholder.typicode.com/posts', 'GET')
        .then(response => {
            if (response.success) {
                const posts = response.data;
                const postContainer = document.getElementById('postContainer');
                posts.forEach(post => {
                    const postCard = document.createElement('div');
                    postCard.classList.add('post-card');
                    postCard.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        <div class="details" style="display: none;">
                            <p><strong>Title:</strong> ${post.title}</p>
                            <p><strong>Body:</strong> ${post.body}</p>
                        </div>
                        <button class="read-more" data-id="${post.id}">Read More</button>
                    `;
                    postContainer.appendChild(postCard);
                });

                document.querySelectorAll('.read-more').forEach(button => {
                    button.addEventListener('click', function() {
                        const postId = this.getAttribute('data-id');
                        window.location.href = `../app/post.html?id=${postId}`;
                    });
                });
            } else {
                console.log("Error:", response.message);
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});
