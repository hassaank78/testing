import net from "node:net";
import { open } from "node:fs/promises";


const server = net.createServer(async (socket) => {

    const fileHandle = await open(
        "C:\\Users\\admin\\Desktop\\Screen Recording 2024-12-21 233113.mp4"
    );
    const { size } = await fileHandle.stat();

    socket.write("HTTP/1.1 200 Theek haiii!\n");
    socket.write(`Content-Length: ${size}\n`);
    socket.write(`Content-Type: video/mp4\n`);
    socket.write(`Content-Disposition: attachment; filename=suckdick.mp4ug`)
    socket.write("sd34567yb un\nHii");

    const readStream = fileHandle.createReadStream();
    readStream.pipe(socket);
});

server.listen(4000, "0.0.0.0", () => {
  console.log("server started!");
});
