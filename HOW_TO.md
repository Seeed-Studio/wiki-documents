### Thank you for considering to contribute to our seeed-studio files! 

You can check these steps to set up your own files management platform:

1. Fork this repository into your GitHub.
2. Clone the repository you forked to your coding device.
3. Make your modifications, changing existed files or add new files. ---- for detailed local deployment / installation please check below instruction.
4. Commit your modifications and push to your Github repository.
5. Create a PR from the branch in your forked to seeed-studio's wiki-documents main branch.


###

export PATH=$PATH:/home/w0x7ce/Desktop/node-v18.12.1-linux-x64/bin

## Local Installation

[INSTALL LATEST LTS NODE](https://github.com/nodejs/release#release-schedule)

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

```bash
sudo apt remove cmdtest
sudo apt update && sudo apt install yarn
```

### Auto Install

```bash
yarn
```
This command will help you install all the dependences in package.json


```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```bash title='Signed'
Signed-off-by: tianrking <tian.r.king@gmail.com>
```

## Custom Install & Plugin Install

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

### Math

```bash
yarn add remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0
```

### plugin-content-docs

```bash
yarn add @docusaurus/plugin-content-docs
```

### plugin-pwa

```bash
yarn add @docusaurus/plugin-debug
yarn add @docusaurus/plugin-pwa
```

### Git 

#### Cache

```bash
git config --global http.postBuffer 524288000
```

#### Speed

```bash
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999
```

#### depth

```bash
git clone --depth=1 http://xxx.git
git fetch --unshallow
```

#### gitignore

```bash
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```


## Develop

### Offical Function

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Custom Deployment (We Used)

#### SSH KEY

[GENERATE SSH KEY](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

[Add SSH KEY](https://github.com/settings/keys)

[Github Actions](https://github.com/{$USER}/{Workspace}/settings/secrets/actions)

### Problems

1. [ERROR] Error: ENOSPC: System limit for number of file watchers reached

 - insert the new value into the system config

    ```bash
    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

    ```

 - check that the new value was applied

    ```bash
    cat /proc/sys/fs/inotify/max_user_watches
    ```

 - config variable name (not runnable)

    ```bash
    fs.inotify.max_user_watches=524288
    ```
