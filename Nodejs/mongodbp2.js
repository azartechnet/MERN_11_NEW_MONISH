const {MongoClient}=require('mongodb');
var url="mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('EveBatch')
        const collection=db.collection('mycol3');
        //Update
        const cu=await collection.updateOne(
            {"name":"azar1"},{"$set":{"name":"xyz"}}
        )
         console.log(`${cu.modifiedCount} document was updated`);
         //Display

         const store=collection.find()
         const data=await store.toArray()
         console.table(data)
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)