// Set múi giờ GMT +7
const timezone = 7;

// Set thời gian mở cửa của các thị trường
const tokyoOpenTime = 9 * 60 * 60 + 30 * 60; // 9:30 AM
const londonOpenTime = 8 * 60 * 60 + 30 * 60; // 8:30 AM
const newYorkOpenTime = 9 * 60 * 60 + 30 * 60; // 9:30 AM

// Tạo hàm đếm ngược
function countdown(clockId, openTime) {
  const clock = document.getElementById(clockId);
  const timeElement = clock.querySelector('.time');
  const countdownElement = clock.querySelector('.countdown');

  const now = new Date();
  const nowTime = now.getTime() + (now.getTimezoneOffset() + timezone) * 60 * 1000;
  const openTimeMs = openTime * 1000;

  const diffTime = openTimeMs - nowTime;
  const days = Math.floor(diffTime / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diffTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((diffTime % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((diffTime % (60 * 1000)) / 1000);

  timeElement.textContent = `${days} ngày: ${hours} giờ: ${minutes} phút: ${seconds} giây`;
  countdownElement.textContent = `Đếm ngược tới phiên giao dịch...`;

  // Cập nhật đồng hồ mỗi giây
  setInterval(() => {
    const now = new Date();
    const nowTime = now.getTime() + (now.getTimezoneOffset() + timezone) * 60 * 1000;
    const diffTime = openTimeMs - nowTime;
    const days = Math.floor(diffTime / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diffTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diffTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diffTime % (60 * 1000)) / 1000);

    timeElement.textContent = `${days} ngày: ${hours} giờ: ${minutes} phút: ${seconds} giây`;
  }, 1000);
}

// Khởi động đồng hồ
countdown('tokyo-clock', tokyoOpenTime);
countdown('london-clock', londonOpenTime);
countdown('new-york-clock', newYorkOpenTime);
