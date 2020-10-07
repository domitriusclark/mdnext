const { exec } = require('child_process');
const fs = require('fs');

async function run() {
  try {
    console.log('Starting the hub-create-repos action');
    const dirs = fs.readdirSync(process.env.GITHUB_WORKSPACE + '/templates');
    console.log(`Found the following templates: ${JSON.stringify(dirs)}`);
    const promises = [];
    for (let dir of dirs) {
      promises.push(
        new Promise((resolve, reject) => {
          console.log('Kicking off creating repo for ', dir);
          exec(
            `gh repo create ${dir} --public --enable-issues=false`,
            {
              timeout: 120,
            },
            (err, stdout, stderr) => {
              if (err) {
                console.error('Failed to create repo for ', dir);
                console.error(err);
                console.error(stderr);
                resolve('failed');
              }
              console.log('Finished creating repo for ', dir);
              resolve('success');
            },
          );
        }),
      );
    }
    console.log('All creations kicked off', promises.length);
    const results = await Promise.all(promises);
    console.log('The await for results has finished');
    if (results.some((result) => result === 'failed')) {
      throw new Error(`Failed to create a repo`);
    }

    console.log('Finished creating repos');
  } catch (error) {
    console.error('Failed in hub-create-repos action');
    console.error(error.message);
    throw new Error('hub-create-repos failed to create a repo');
  }
}

run();
