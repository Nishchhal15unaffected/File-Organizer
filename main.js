
let tree=require('./commands/tree');
let help=require('./commands/help');
let organize=require('./commands/organize');
let inputarr=process.argv.slice(2);
let path=inputarr[1];
if(inputarr[0]=="tree"){
    tree.printTree(path," ");
}else if(inputarr[0]=="help"){
    help.helper();
}else if(inputarr[0]=="organize"){
    organize.organizer(path)
}
