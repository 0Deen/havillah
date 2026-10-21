import fs from "node:fs"; import path from "node:path";
const root=path.resolve("public"); let files=0; function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else{files++;if(/\.jfif$/i.test(p))console.error("JFIF must not be included:",p)}}} walk(root); console.log(`Public asset files: ${files}`);
