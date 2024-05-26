function getData(dataid,getnextData){
    setTimeout(()=>{
        console.log("data ",dataid);
        if(getnextData){
            getnextData()
        }
    } , 2000);
}

getData(101,()=>{
    getData(102,()=>{
        getData(103 , ()=>{
            getData(104)
        })
    })
});
