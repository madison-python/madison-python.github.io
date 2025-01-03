MadPy Website
=============

[![Build Status](https://github.com/madison-python/madison-python.github.io/actions/workflows/gh-pages.yml/badge.svg?branch=source)](https://github.com/madison-python/madison-python.github.io/actions)

This repository contains source code for the MadPy website


## Setup

The website is built using the static website generator [Lektor](https://github.com/lektor/lektor), which can be installed using `uv`:

```bash
uv tool install Lektor
```


## Usage

To serve the website locally:

```bash
lektor server
```

To build the website locally:

```bash
lektor build --output-path </path/to/build/directory>
```


## Deployment

This website is hosted using GitHub Pages. Note that for organization pages, the build website must [live in the `master` branch](https://help.github.com/en/articles/user-organization-and-project-pages#user-and-organization-pages-sites) of the repository. Because of this, we use the `source` branch of `madison-python.github.io` for development and use GitHub Actions to automatically deploy our built website to the `master` branch.


## License

[MIT License](LICENSE)
