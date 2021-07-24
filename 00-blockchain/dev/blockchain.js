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
module.exports = Blockchain