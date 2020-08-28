/* eslint-disable object-curly-spacing */
import { Command, flags } from '@oclif/command'
const fetch = require("node-fetch");
const { prompt } = require("enquirer")
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
      const url = "https://api.github.com/repos/domitriusclark/mdnext/contents/templates"

      const dirNames: string[] = [];
      const getData = async (url: string) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        } catch (error) {
          console.log(error)
        }
      };

      const dirs: any = await getData(url);

      dirs.map((dir: any) => dirNames.push(dir.name));

      flags.template = await prompt({
        type: 'select',
        name: 'template',
        choices: dirNames,
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
      cache: false,
      force: true,
      verbose: true,
    });

    emitter.clone(`${projectName}`).then(() => {
      console.log('done');
    });

  }
}

export = Mycli
