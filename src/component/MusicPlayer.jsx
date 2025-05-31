import React, { useState, useRef } from "react";

const MusicPlayer = () => {

    // Sử dụng useRef để giữ tham chiếu đến thẻ audio
    const audioRef = useRef(null);

    // Trạng thái để theo dõi xem nhạc đang phát hay tạm dừng
    const [isPlaying, setIsPlaying] = useState(false);

    // Hàm bật/tắt nhạc
    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause(); // Tạm dừng nhạc
        } else {
            audioRef.current.play().catch((error) => {
                console.error("Lỗi khi phát nhạc:", error);
                alert(
                    "Không thể phát nhạc. Kiểm tra đường dẫn hoặc quyền truy cập."
                );
            }); // Phát nhạc, bắt lỗi nếu có
        }
        setIsPlaying(!isPlaying); // Cập nhật trạng thái
    };

    return (
        <div>
            <div
                id="music-control"
                onClick={toggleMusic}
                className={isPlaying ? "playing" : ""}
            >
                <img
                    src={
                        isPlaying
                            ? "./img/playing.png"
                            : "./img/play.png"
                    }
                    alt="play/pause"
                />
            </div>

            <audio ref={audioRef} loop preload="auto" >
                <source
                    src="/audio/wedding_2.mp3"
                    type="audio/mp3"
                />
                Trình duyệt của bạn không hỗ trợ phần tử audio.
            </audio>
        </div>
    );
};

export default MusicPlayer;
