const conectToDatabase = () => {
    const dummyPromisse = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        }, 1000);
    })
    return dummyPromisse;
}
export default conectToDatabase; 