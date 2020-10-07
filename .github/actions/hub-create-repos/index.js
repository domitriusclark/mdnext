const { exec } = require('child_process');
const fs = require('fs');

async function run() {
  try {
    console.debug('Starting the hub-create-repos action');
    const dirs = fs.readdirSync(process.env.GITHUB_WORKSPACE + '/templates');
    console.debug(`Found the following templates: ${JSON.stringify(dirs)}`)
    for (let dir of dirs) {
      exec(`gh repo create ${dir} --public --enable-issues=false`);
    }
    console.debug('Finished creating repos');
  } catch (error) {
    console.error('Failed in hub-create-repos action');
    console.error(error.message);
  }
}

run();
