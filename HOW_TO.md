
###

export PATH=$PATH:/home/w0x7ce/Desktop/node-v18.12.1-linux-x64/bin

### Installation

[INSTALL LATEST LTS NODE](https://github.com/nodejs/release#release-schedule)

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

```bash
sudo apt remove cmdtest
sudo apt update && sudo apt install yarn
```

### Local Development

```
yarn
```

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Mermaid

```bash
yarn add @docusaurus/theme-mermaid
```

### MDX

```bash
yarn add remark-math@3 rehype-katex@4
```

### jq

```bash
curl -O https://get.0install.net/0install.sh && chmod +x 0install.sh
sudo ./0install.sh install local
0install add jq https://apps.0install.net/utils/jq.xml
```

### algolia

```bash
yarn add @docusaurus/theme-search-algolia
```