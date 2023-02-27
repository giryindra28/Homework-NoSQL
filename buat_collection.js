
// 1. membuat collections buku
db.createCollection('buku');

// 2. Insert one kedalam collections  //
// dengan informasi nama buku,author,tags buku,harga buku,stock //
db.buku.insertOne({
    buku: "Nanti Kita Cerita Tentang Hari Ini",
    author: "Marchella FP",
    tags: "Self Healing",
    harga: 75000,
    stock: 15
});

// 3. Gunakan insert many untuk bulk insert kedalam collection book //
db.buku.insertMany([
    {
    _id : 1,
    buku: "Dilan: Dia adalah dilanku tahun 1990",
    author: "Pidi Baiq",
    tags: "Romance",
    harga: 55000,
    stock: 4
    },
    {
    _id: 2,
    buku: "Dilan 2: Dia adalah dilanku tahun 1991",
    author: "Pidi Baiq",
    tags: "Romance",
    harga: 250000,
    stock: 2
    },
    {
    _id: 3,
    buku: "Milea: Suara Dari Dilan",
    author: "Pidi Baiq",
    tags: "Romance",
    harga: 75000,
    stock: 10
    },
    {
    _id: 4,
    buku: "Ancika: Dila yang Bersamaku Tahun 1995",
    author: "Pidi Baiq",
    tags: "Romance",
    harga: 500000,
    stock: 3
    }
]);
// 4. Tampilkan buku yang memiliki stock <5 dan harganya > 100000 //
db.buku.find({
    stock: {
        $lt: 5
    },
    harga: {
        $gt: 100000
    }
});
// 5. Berikan contoh penggunaan updateone, update many, deleteone dan delemany // 
db.buku.updateOne({
    _id: 1
},{
    $set: {
        tags: "Action and Romance"
    }
});

db.buku.updateMany({},[
    {
        $set: {
            stock: 25
        }
    }
]);

db.buku.deleteOne({
    _id:1
});

db.buku.deleteMany({
    tags: {
        $regex: "Romance"
    }
})