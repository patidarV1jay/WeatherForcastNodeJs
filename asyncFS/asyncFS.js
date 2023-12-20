// fs.writeFile('asyncWriteFile.txt','It is an async file',{flag:'a'},(err,data) =>{
//    if(err){
//     console.log(err)
//    }
//    fs.appendFile('asyncWriteFile.txt','\nAppending some text using append file async.',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
//    })
// })

// const writefile = async () =>{
// try{
//    const readfile =  await fs.promises.readFile('asyncWriteFile.txt','utf-8')
//    console.log(readfile)
// }
// catch(err){
//     console.log(err)
// }
// }
// writefile()

// const syncRead = fs.readFileSync('asyncWriteFile.txt','utf-8')
// console.log(syncRead,'sync')

const readFile= async()=> {
    return new Promise((resolve, reject) => {
      fs.readFile('asyncWriteFile.txt', 'utf8', function (err, data) {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  readFile().then((some) =>console.log(some)).catch(eror=>console.log("fatal"))