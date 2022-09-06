export const drawRect = (detection, ctx) => {
    detection.forEach((pre) => {
        const [x, y, width, height] = pre["bbox"];
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const fonts = "36px sans-serif";
        const color = "#eaea";
        ctx.strokeStyle = color;
        ctx.font = fonts;
        ctx.fillStyle = color;
        ctx.lineWidth = 4;
        ctx.textBaseline = "top";

        ctx.beginPath();
        ctx.strokeRect(x, y, width, height);
        ctx.stroke();

        const textWidth = ctx.measureText(pre.class).width;
        const textHeight = parseInt(fonts, 10); // base 10
        ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    detection.forEach((prediction) => {
        const x = prediction.bbox[0];
        const y = prediction.bbox[1];
        // Draw the text last to ensure it's on top.
        ctx.fillStyle = "#000000";
        ctx.fillText(prediction.class, x, y);
    });
};
