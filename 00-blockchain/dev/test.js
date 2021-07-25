const Blockchain = require("./blockchain")

const bitcoin = new Blockchain()
// bitcoin.createNewBlock(2389, "SF09ASDF90SADF9", "ASDF978ASD89F7s")

// bitcoin.createNewTransaction(11, "FAROOQER2344", 'USMAN6A9DF6')

// bitcoin.createNewBlock(289, "SF0wtrSDF90SADF9", "ASDF978ASDtwer7")

// bitcoin.createNewTransaction(12, "FAROOQER2344", 'USMAN6A9DF6')
// bitcoin.createNewTransaction(10, "FAROOQER2344", 'USMAN6A9DF6')
// bitcoin.createNewTransaction(15, "FAROOQER2344", 'USMAN6A9DF6')

// bitcoin.createNewBlock(239, "SFwrtASDF90SADF9", "ASDF978ASD8wr7d")
// console.log(bitcoin.chain[2])
// console.log(bitcoin.getLastBlock())
const previousBlockHash = "F856AD78F5768A5SDF75S"
const currentBlockData = [
    {
        amount: 10,
        sender: "7D8F5DA6F587DAF",
        recipient: "9768DF096AD06DFADF9"
    },
    {
        amount: 11,
        sender: "7Z8SDF689AD6SF8ZXC",
        recipient: "876ASd68998ASDFADF9"
    },
    {
        amount: 12,
        sender: "63446ASDF765ASDF67",
        recipient: "ASDF8796ASD9F876SADF69"
    }
]

// const nonce = 100;

const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData)
console.log(nonce)
const hash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce)
console.log(hash)
