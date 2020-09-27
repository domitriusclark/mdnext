# Contributing

When contributing to this repository, please first discuss the change you wish to make via [issues](https://github.com/domitriusclark/mdnext/issues).

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Pull Request Process

If you haven't contributed to an open source project, the [first-contributions guide](https://github.com/firstcontributions/first-contributions/blob/master/README.md) is what we'd recommend going through or following as you contribute here. If you need assistance contributing feel free to ask, ideally in the issue that you're taking on. The general process for Pull Requests is:

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch `git checkout -b MY_BRANCH_NAME`.
3. Install yarn: `npm install -g yarn`
4. Install the dependencies for the monorepo with `yarn` in the monorepo root folder
5. Run `yarn workspace TEMPLATE_OR_PACKAGE dev` to start up dev mode and watch for code changes
6. Make the changes needed for the issue, then utilize `git add`, `git commit`, and `git push` to get those changes onto your fork.
7. Open up your fork on github, and there should be a button that allows you to open a Pull Request with the main repository.
8. Add a title and description to your pull request that at a minimum links to the issue and describes the fix you did.
