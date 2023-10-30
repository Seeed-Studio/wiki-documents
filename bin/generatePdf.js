const fs = require('fs');
const path = require('path');
const { mdToPdf } = require('md-to-pdf');


const outputFolder = path.join(__dirname, '../static/pdf/');
if (fs.existsSync(outputFolder)) {
    fs.rmdirSync(outputFolder, { recursive: true });
}
fs.mkdirSync(outputFolder, { recursive: true });
async function traverseDirectories(dir) {
    const files = fs.readdirSync(dir);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filePath = path.join(dir, file);
        if (file.endsWith('.md')) {
            await generatePdf(filePath, file);
        } else if (fs.lstatSync(filePath).isDirectory()) {
            await traverseDirectories(filePath);
        }
    }
}

async function generatePdf(filePath, file) {
    const date = new Date('2023-06-20');
    const dateString = date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    let fileContent = fs.readFileSync(filePath, 'utf-8');
    fileContent = `${fileContent}\n\nLast updated on: ${dateString}`
    const relativeFilePath = filePath.replace(path.join(__dirname, '../docs/'), '');
    //   const pdfPath = path.join(__dirname, '../static/pdf', relativeFilePath.replace('.md', '.pdf'));
    const pdfPath = path.join(__dirname, '../static/pdf', file.replace('.md', '.pdf'));
    const pdf = await mdToPdf({ content: fileContent }).catch(console.error);
    if (pdf) {
        fs.mkdirSync(path.dirname(pdfPath), { recursive: true });
        fs.writeFileSync(pdfPath, pdf.content);
        console.log(`Generated ${pdfPath}`);
    }
}

traverseDirectories(path.join(__dirname, '../docs/'));