const { exec } = require('child_process');
const fs = require('fs');

async function run() {
  try {
    console.debug('Starting the hub-create-repos action');
    const dirs = fs.readdirSync(process.env.GITHUB_WORKSPACE + '/templates');
    console.debug(`Found the following templates: ${JSON.stringify(dirs)}`);
    const promises = [];
    for (let dir of dirs) {
      promises.push(
        new Promise((resolve, reject) => {
          exec(
            `gh repo create ${dir} --public --enable-issues=false`,
            (err, stdout, stderr) => {
              if (err) {
                console.error('Failed to create repo');
                console.error(err);
                console.error(stderr);
                resolve('failed');
              }
              resolve('success');
            },
          );
        }),
      );
    }
    const results = await Promise.all(promises);
    if (results.some((result, index) => result === 'failed')) {
      throw new Error(`Failed to create repo for ${dirs[index]}`);
    }

    console.debug('Finished creating repos');
  } catch (error) {
    console.error('Failed in hub-create-repos action');
    console.error(error.message);
    throw new Error('hub-create-repos failed to create a repo');
  }
}

run();
