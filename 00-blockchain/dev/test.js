const Blockchain = require("./blockchain")

const bitcoin = new Blockchain()
bitcoin.createNewBlock(2389, "SF09ASDF90SADF9", "ASDF978ASD89F7s")

bitcoin.createNewTransaction(11, "FAROOQER2344", 'USMAN6A9DF6')

bitcoin.createNewBlock(289, "SF0wtrSDF90SADF9", "ASDF978ASDtwer7")

bitcoin.createNewTransaction(12, "FAROOQER2344", 'USMAN6A9DF6')
bitcoin.createNewTransaction(10, "FAROOQER2344", 'USMAN6A9DF6')
bitcoin.createNewTransaction(15, "FAROOQER2344", 'USMAN6A9DF6')

bitcoin.createNewBlock(239, "SFwrtASDF90SADF9", "ASDF978ASD8wr7d")
console.log(bitcoin.chain[2])
console.log(bitcoin.getLastBlock())
