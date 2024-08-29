### Thank you for considering to contribute to our seeed-studio files! 

This streamlined contribution process, along with the use of sparse checkout and Lint Markdown, optimizes the workflow for contributors, making it more efficient and user-friendly. This is a simpler approach compared to the instructions in the how-to.md file.

## All IN ONE

```bash
git clone --no-checkout --depth 1 https://github.com/Seeed-Studio/wiki-documents.git
cd wiki-documents
git sparse-checkout init --cone
git sparse-checkout set sidebars.js docs 
git switch docusaurus-version
git pull origin docusaurus-version
```

## STEP BY STEP

1. First, clone the repository using the following command:

   ```
   git clone --no-checkout --depth 1 https://github.com/Seeed-Studio/wiki-documents.git
   ```

   Here, we use two options:
   - `--no-checkout`: Clone the repository without checking out any files, only fetching the repository metadata. This speeds up the cloning process.
   - `--depth 1`: Clone only the latest commit of files and metadata, without fetching the entire history. This further reduces the amount of data downloaded.

2. After cloning, navigate to the repository directory:

   ```
   cd wiki-documents
   ```

3. Next, enable Git's sparse checkout feature:

   ```
   git sparse-checkout init --cone
   ```

   Sparse checkout allows checking out only a subset of files in the repository, rather than the entire repository. The `--cone` option enables the cone mode, which supports more flexible path matching.

4. Then, configure the sparse checkout rules:

   ```
   git sparse-checkout set sidebars.js docs
   ```

   This command tells Git to check out only the `sidebars.js` file and the `docs` directory. `sidebars.js` is the Docusaurus configuration file, and the `docs` directory contains all the Markdown documents.

5. After configuring the sparse checkout rules, ensure you switch to the `docusaurus-version` branch:

   ```
   git switch docusaurus-version
   ```

   This step is necessary because the documentation is developed and maintained on this branch.

6. After switching to the target branch, pull the configured files and directories:

   ```
   git pull origin docusaurus-version
   ```

   This command pulls the latest version of `sidebars.js` and `docs` from the `docusaurus-version` branch of the remote repository.

7. Now, contributors can add new Markdown files in the `docs` directory and modify the `sidebars.js` file to add the paths of the new documents.

8. After adding new documents, use the Lint Markdown tool to check the syntax of the new files:

   ```
   npm install -g @lint-md/cli
   npx @lint-md/cli docs/new-file.md
   ```

   If there are any syntax errors or violations of conventions in the new files, Lint Markdown will provide prompts. Contributors can make modifications based on the prompts until there are no error messages.

9. If contributors want to automatically fix some common syntax errors, they can use the `--fix` option:

   ```
   npx @lint-md/cli docs/new-file.md --fix
   ```

   This command will automatically fix some common formatting issues, such as missing spaces between Chinese and English text, incorrect use of ellipsis, etc.

10. Finally, after completing all modifications, contributors can commit the changes and push to the remote repository:

    ```
    git add .
    git commit -m "Add new document"
    git push origin docusaurus-version
    ```

    With this, the new document is successfully added to the `docusaurus-version` branch of the remote repository.

By using the Lint Markdown tool in steps 8 and 9, we can ensure that the newly added documents adhere to the conventions, improving the overall quality and consistency of the documentation.

This streamlined contribution process, along with the use of sparse checkout and Lint Markdown, optimizes the workflow for contributors, making it more efficient and user-friendly.
