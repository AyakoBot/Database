import fs from 'fs/promises';

import { glob } from 'glob';

const paths = await glob('../Service/src/**/*.prisma');

const dynContent = (await Promise.all(paths.map((path) => fs.readFile(path, 'utf-8'))))
 .map((content) => content.split('//#endregion')[1].trim())
 .join('\n\n');

const [baseContent] = (await fs.readFile('./prisma/schema.prisma', 'utf-8')).split(
 '//#region Models',
);

const finishedContent = `${baseContent.trim()}

//#region Models

${dynContent.trim()}

//#endregion`;

fs.writeFile('./prisma/schema.prisma', finishedContent);
