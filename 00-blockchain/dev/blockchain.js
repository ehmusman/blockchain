function Blockchain() {
    this.chain = []
    this.newTransactions = []
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        // nonce actually comes from a proof of work, in our case nonce is simply just a number
        hash: hash,
        // this hash will be basically the data from our new block. basically we'll pass our new transactions into a hashing function. basically our all transactions will be compressed into a single string of code. and that will be our hash. 
        previousBlockHash: previousBlockHash
        // this is similar to the hash. but this is a hashed string of previous block. and hash is a compressed string of currnt block
    }
    this.newTransactions = [];
    this.chain.push(newBlock)

    return newBlock;
}