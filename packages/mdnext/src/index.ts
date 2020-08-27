/* eslint-disable object-curly-spacing */
import { Command, flags } from '@oclif/command'
const { prompt } = require("enquirer")
const path = require("path")
const fs = require("fs")
const util = require("util")
const degit = require('degit');


class Mycli extends Command {

  static description = 'Creating your new MDNEXT project'
  // Default to using flags over args whenever possible

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    projectName: flags.string({
      char: 'p',
      description: 'Your project name',
    }),
    template: flags.string({
      char: 't',
      description: 'The template you need'
    }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Mycli)

    // PROJECT NAME 
    if (typeof flags.projectName === 'undefined') {
      flags.projectName = await prompt({
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        required: true
      })
        .then(({ projectName, }: { projectName: string }) => projectName)
        .catch(console.error)
    }

    // TEMPLATE SELECT
    if (typeof flags.template === 'undefined') {
      //joining path of directory 
      const directoryPath = path.join(__dirname, '../templates');
      const readdir = util.promisify(fs.readdir);
      //passsing directoryPath and callback function
      const templates = await readdir(directoryPath);

      flags.template = await prompt({
        type: 'select',
        name: 'template',
        choices: templates,
        message: 'Select which template to use',
        required: true
      })
        .then(({ template, }: { template: string }) => template)
        .catch(console.error)
    }

    this.log(`Creating your MDNEXT project 🥳`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    const projectName = flags.projectName
    const template = flags.template

    const emitter = degit(`domitriusclark/${template}`, {
      cache: true,
      force: true,
      verbose: true,
    });

    emitter.clone(`${projectName}`).then(() => {
      console.log('done');
    });

  }
}

export = Mycli
