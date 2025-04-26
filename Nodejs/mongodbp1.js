const {MongoClient}=require('mongodb')
const url='mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client=new MongoClient(url)

async function run()
{
    try
    {
        const db=client.db('EveBatch');
        const collection=db.collection('mycol3');
        var obj={name:"azar1",age:37,email:"azar1@gmail.com"}
        await collection.insertOne(obj);
        console.log("DataInserted..");
    }
    finally
    {
         await client.close();
    }
}
run().catch(console.error)