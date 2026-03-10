import React, { useState, useRef, useEffect } from "react";

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isAutoplayAllowed, setIsAutoplayAllowed] = useState(false);

    const playlist = [
        "/audio/Beautiful_In_White.mp3",
        "/audio/Đơn_Giản_Anh_Yêu_Em.mp3",
        "/audio/Em_Đồng_Ý.mp3",
    ];

    // Xử lý autoplay - phát khi có user interaction
    useEffect(() => {
        const handleUserInteraction = async () => {
            if (audioRef.current) {
                try {
                    audioRef.current.play();
                    setIsPlaying(true);
                    console.log("Nhạc bắt đầu phát");
                } catch (error) {
                    console.error("Lỗi phát nhạc:", error);
                }
            }
        };

        // Thêm listener cho click
        document.addEventListener('click', handleUserInteraction, { once: true });

        return () => {
            document.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((error) => {
                console.error("Lỗi khi phát nhạc:", error);
                alert(
                    "Không thể phát nhạc. Kiểm tra đường dẫn hoặc quyền truy cập."
                );
            });
        }
        setIsPlaying(!isPlaying);
    };

    const handleEnded = () => {
        const nextTrack = (currentTrack + 1) % playlist.length;
        setCurrentTrack(nextTrack);
    };

    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.load();
            audioRef.current.play().catch((err) => {
                console.error("Lỗi khi chuyển bài:", err);
            });
        }
    }, [currentTrack]);

    return (
        <div>
            <div
                id="music-control"
                onClick={toggleMusic}
                className={isPlaying ? "playing" : ""}
            >
                <img
                    src={isPlaying ? "./img/playing.png" : "./img/play.png"}
                    alt="play/pause"
                />
            </div>

            <audio
                ref={audioRef}
                onEnded={handleEnded}
                loop={false}
                preload="auto"
                muted={false}
            >
                <source src={playlist[currentTrack]} type="audio/mp3" />
                Trình duyệt của bạn không hỗ trợ phần tử audio.
            </audio>
        </div>
    );
};

export default MusicPlayer;
