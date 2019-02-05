const fs = require('fs');

const ROOT_PATH = './mockups/paths';
const PORT = 3010;

const dirs = fs.readdirSync(ROOT_PATH);

const subjects = {};

const jsonServer = require('json-server');
const server = jsonServer.create();

server.use(jsonServer.defaults());

console.log(' --- Start loading mockups --- ');

dirs.forEach((dir) => {
    subjects[dir] = {};
    const keys = fs.readdirSync(`${ROOT_PATH}/${dir}`);

    keys.forEach((filename) => {
        const buffer = fs.readFileSync(`${ROOT_PATH}/${dir}/${filename}`);
        subjects[dir][filename] = buffer.toString();
        console.log(`"${ROOT_PATH}/${dir}/${filename}" loaded.`);
    });

});

console.log(' --- End loading mockups --- ');
console.log(' --- Start creating routes --- ');

for (const subjectKey in subjects) {
    const subject = subjects[subjectKey];
    server.get(`/api/v1/query/${subjectKey}`, (__req, res) => res.json({
        message: ':)',
    }));

    for (const serviceKey in subject) {
        const path = `/${subjectKey}/${serviceKey.slice(0, serviceKey.length - 5)}`;
        const flatResponse = subject[serviceKey];

        try {
            JSON.parse(flatResponse);
        } catch (__err) {
            throw new Error(`Validation error at "./${subjectKey}/${serviceKey}" - JSON is not valid.`);
        }

        console.log(`Created route for "${path}".`);

        server.get(`/api/v1/query${path}`, (__req, res) => {
            res.json(JSON.parse(subject[serviceKey]));
        });
    }
}
console.log(' --- End creating routes ---');
console.log(`Mock server is running on http://localhost:${PORT}/`);

server.listen(PORT);
