const request = require('request');
const fs = require('fs');

const downloadPDF = (url, fileName) =>{
    request.get(url)
       .on('error', (error) => {
            console.log(error);
        })
        .pipe(
                fs.createWriteStream(fileName)).on(
                    'close', ()=>{
                        console.log("File written to " + fileName);
                    }
                )
}

module.exports={ downloadPDF}