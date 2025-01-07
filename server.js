import { createReadStream } from 'node:fs';
import net from 'node:net'

const server = net.createServer((socket) => {
    socket.on('data', (buff) => {
        socket.write('HTTP/1.1 200 OkAY\nheader:zaremankha  \n\nHii');
        // const readStream = createReadStream("C:\\Users\\admin\\Desktop\\Screen Recording 2024-12-21 233113.mp4");
        // readStream.pipe(socket)
        socket.end();
        // readStream.on('end', () => {
        //     socket.end();
        // });
    });
});

server.listen(4000, '0.0.0.0', () => {
    console.log(`Server started at port 4000.`);
});