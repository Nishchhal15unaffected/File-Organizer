let path=require("path");
let fs=require('fs');
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function organizer(src){
    let checkPath= path.join(src,"media");
let isMainModulePresent = fs.existsSync(checkPath);
if (!isMainModulePresent) {
for(key in types){
let folderPath=path.join(src,key);
fs.mkdirSync(folderPath);
}   
let Otherf=path.join(src,"others");
fs.mkdirSync(Otherf)
}
 let allentities=fs.readdirSync(src);
    for(let i=0;i<allentities.length;i++){
        e=allentities[i];
        fullPath=path.join(src,e);
        let statsofPath=fs.lstatSync(fullPath);
        if(statsofPath.isFile()){
            let folder="other";
            let ex=path.basename(fullPath);
            let extension=path.extname(fullPath);
            let nex=extension.split(".")[1];
            for(let key in types){
                for(idx in types[key]){
                    if(types[key][idx]==nex){
                        folder=key;
                    }
                }
            }
            let de=path.join(src,folder);
            let desti=path.join(de,ex)
            fs.copyFileSync(fullPath,desti);
            console.log(" coppied Your "+ex+" File in "+folder+" folder");
        }
    }
 
}    
module.exports={
    organizer:organizer
}