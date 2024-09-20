# tpl_node_lib
Node library Template for new TS libraries.

## Development
For local development, we are using yalc to link the library to the project.

In current library project, use the following commands:
```shell
    yarn build
    yalc publish (--private) (--push to replace the existing)
```

In desired projects, use the following commands:
```shell
    yalc add @euronews-tech/LIBRARY_NAME
```
Or to update the library: 
```shell
    yalc update @euronews-tech/LIBRARY_NAME
```

## Prepare the release

The library use the semantic versioning, and use standard-version to manage it.

Run the following command to increment the version of the library and generate the changelogs from the commit messages.

```shell
$ yarn release
```

If you have change only fixes and want to increment the minor version instead of the fix version run the command :

```shell
# assuming the curent release is 1.0.0
$ yarn release -- --release-as minor
# Or
$ yarn release -- --release-as 1.1.0
```

Read the doc of the standard-version to see other available commands.

Then in your Github repository, go to the releases tab, and create a new release with the tag generated in the previous command.

## Publish the release

In your Github repository, go to Github Actions, and run the workflow `CD - Push to Code Artifact` with the following parameters:
- versiontags: the version of the library previously generated in the release
- nodeversion: the version of node to use (18)
