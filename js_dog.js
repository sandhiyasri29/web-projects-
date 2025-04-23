let isLiked = false;

function onClickLikeButton() {
    const puppyImage = document.getElementById("puppyImage");
    const likeIcon = document.getElementById("likeIcon");
    const likeButton = document.getElementById("likeButton");

    if (isLiked) {
        // Unliked
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIcon.style.color = "#cbd2d9";
        likeButton.style.backgroundColor = "#cbd2d9";
        likeButton.style.color = "#9aa5b1";
    } else {
        // Liked
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIcon.style.color = "#0967d2";
        likeButton.style.backgroundColor = "#0967d2";
        likeButton.style.color = "#ffffff";
    }

    isLiked = !isLiked;
}
