document.getElementById("startBtn").onclick = async () => {
    const motion = document.getElementById("motionFile").files[0];
    const image = document.getElementById("imageFile").files[0];

    if (!motion || !image) {
        alert("두 파일 모두 업로드하세요.");
        return;
    }

    const formData = new FormData();
    formData.append("motion", motion);
    formData.append("image", image);

    const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        body: formData
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    document.getElementById("resultVideo").src = url;
};
