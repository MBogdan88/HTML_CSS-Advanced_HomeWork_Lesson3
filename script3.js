let videoBtn = document.querySelectorAll("button");
let video = document.querySelectorAll("video");

let videoItem = function (id) {
    return document.getElementById(id)
}

function closeVideo() {
    video.forEach(e => {
            e.className = "hidden"
        })
};
closeVideo();

function hoverButton(e) { 
    for (let i = 0; i < videoBtn.length; i++) {
        videoBtn[i].classList.remove(`active`)
    }
    e.className = `${e.className} active`
}

videoBtn.forEach(event =>
    event.addEventListener("click", e => {
        let btn = e.target.className;
        hoverButton(event)
        let value = 0.08;

        let videoAction = videoItem(btn);
        videoItem("rewaindForward").addEventListener("click", () => {
            videoAction.currentTime += 5;
        });

        videoItem("rewaindBack").addEventListener("click", () => {
            videoAction.currentTime -= 5;
        });

        videoItem("stopButton").addEventListener("click", () => {
            videoAction.pause();
            videoAction.currentTime = 0;
            videoItem("playButton").src = "./img/icons8_play.png";
        });

        videoItem("volumeUp").addEventListener("click", () => {
            videoAction.volume = Math.min(1, videoAction.volume + value);
        });
        videoItem("volumeDown").addEventListener("click", () => {
            videoAction.volume = Math.max(0, videoAction.volume - value);
        });

        videoItem("fullButton").addEventListener("click", () => {
            let elem = videoItem(btn);
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        });

        videoItem("playButton").onclick = function (e) {
            if (videoAction.paused) {
                videoAction.currentTime = localStorage.getItem(btn);
                videoAction.play();
                e.target.src = "./img/icons8-pause.png";

            } else {
                videoAction.pause();
                e.target.src = "./img/icons8_play.png";
                localStorage.setItem(btn, videoAction.currentTime);
            }
        };

        try {
            if (document.getElementById(`${btn}`).classList.value === "hidden" ) {
                closeVideo();
                document.getElementById(`${btn}`).className = "show";
            }
        } catch (e) {
            console.log(`${btn}`);
        }
    })
)
