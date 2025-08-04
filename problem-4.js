/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";

if (fileName.includes('#')|| fileName.includes('.pdf') || fileName.includes('.docx')){
    output = 'Store';

}
else{
    output = 'Delete';
}
console.log(output);