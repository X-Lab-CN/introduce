new Typed('#typewriter', { strings: ['上海工程技术大学熊玉洁老师', '2025届硕士研究生招生简章'], typeSpeed: 60, loop: true, backSpeed: 10, backDelay: 1500 });
new Typed('#typewriter2', { strings: ['欢迎各位同学联系我们，有意向请点击上述链接进行联系'], typeSpeed: 60, loop: true, backSpeed: 10, backDelay: 1500 });
if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    alert('检测到当前设备可能为移动端，建议使用电脑访问！');
    window.close();
}

const video = document.getElementById('video');
const videoBtn = document.getElementById('videoBtn');
const videoWrapper = document.getElementById('videoWrapper')
videoBtn.addEventListener('click', function (event) {
    event.preventDefault();
    videoWrapper.style.display = 'block';
});

videoWrapper.addEventListener('click', function (event) {
    if (event.target === this) {
        videoWrapper.style.display = 'none';
        video.pause();
    }
});

