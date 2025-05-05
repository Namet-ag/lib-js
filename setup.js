const FS = require("fs");

FS.copyFileSync(".npmignore", "client/.npmignore");
FS.copyFileSync("README.md", "client/README.md");

const packageJson = JSON.parse(FS.readFileSync("client/package.json", "utf-8"));

packageJson.author = "eyezah";

const BAD_KEYWORDS = [
    "openapi-client",
    "openapi-generator"
];

for (let keyword of BAD_KEYWORDS) {
    const index = packageJson.keywords.indexOf(keyword);
    if (index >= 0) {
        packageJson.keywords.splice(index, 1);
    }
}

packageJson.repository.url = "https://github.com/namet-ag/lib-js.git";

packageJson.license = "MIT";

FS.writeFileSync("client/package.json", JSON.stringify(packageJson, null, 2));