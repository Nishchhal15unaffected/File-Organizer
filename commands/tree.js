let fs=require('fs');
let path=require('path');
function printTree(src,space){
    let isFile=fs.lstatSync(src).isFile();
    if(isFile){
        fileName=path.basename(src);
        console.log(space+"-------"+fileName);
    }else{
        folderName=path.basename(src);
        console.log(space+"_________>"+folderName);
        let all=fs.readdirSync(src);
        for(let i=0;i<all.length;i++){
            let newPath=path.join(src,all[i]);
            printTree(newPath,space+"\t");
        }
    }
}
module.exports={
    printTree:printTree
}