const { exec } = require('child_process');
const fs = require("fs")

async function run() {
  try {
    const dirs = fs.readdirSync(process.env.GITHUB_WORKSPACE + '/templates')
    console.log(dirs);
    for (let dir of dirs) {
      exec(`gh repo create ${dir} --public --enable-issues=false`)
    }
  } catch (error) {
    console.log(error.message)
  }
}

run()