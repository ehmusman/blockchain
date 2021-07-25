const sha256 = require("sha256")
function Blockchain() {
    this.chain = []
    this.pendingTransactions = []
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        // nonce actually comes from a proof of work, in our case nonce is simply just a number
        hash: hash,
        // this hash will be basically the data from our new block. basically we'll pass our new transactions into a hashing function. basically our all transactions will be compressed into a single string of code. and that will be our hash. 
        previousBlockHash: previousBlockHash
        // this is similar to the hash. but this is a hashed string of previous block. and hash is a compressed string of currnt block
    }
    this.pendingTransactions = [];
    this.chain.push(newBlock)

    return newBlock;
}

Blockchain.prototype.getLastBlock = function () {
    return this.chain[this.chain.length - 1]
}

Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    }
    this.pendingTransactions.push(newTransaction)

    return this.getLastBlock()['index'] + 1

}
Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData)

    const hash = sha256(dataAsString)

    return hash
}
// what is the proof of work?
// a proof of work is very important to blockchain technology.
// and that is the reason the bitcoin or any other blockchains are very secure.
// but what is proof of work?
// every blockchain is pretty much a list of block. every single block has to be created and added to the chain. 
// we want to make sure that every block that is added to the chain is legitimate. and has the correct transactions and correct data inside of it.
// every time when we create a new block we first have to make sure that its is a legitmate block by mining it through proof of work. 
// so what is a proof of work method actually do?
// the proof of work method takes in a current block data and previous hash. and through this data that is supplied it is going to generate a specific hash. this specific has in our case is started with four zeros
//  0000ZSDF77VXXZC087VZ0SDF785SDD6547F763F7SADF
// how can we generate it? it will be done by trry and try, by guessing and checking. so we'll generate the hash many many times untill a lucky one time comes. and generate a hash that has four zeros at the beginig. 
// we'll generate different possible hashes by using the same current data and previousBlock hash with different nonce number. 
Blockchain.prototype.proofOfWork = function (previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)
    while (hash.substring(0, 5) !== "00000") {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)
        console.log(hash)
    }
    return nonce
    // our nonce is actually proof of work
}
module.exports = Blockchain