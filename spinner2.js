const spinnerFrames = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r|', '\r/', '\r-', '\r\\', '\r|', '\n'];
let delay = 0;

for (const frame of spinnerFrames) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, delay += 200);
}
