const Blockchain = require("./blockchain")

const bitcoin = new Blockchain()
bitcoin.createNewBlock(2389, "SF09ASDF90SADF9", "ASDF978ASD89F7")
bitcoin.createNewBlock(289, "SF0wtrSDF90SADF9", "ASDF978ASDtwer7")
bitcoin.createNewBlock(239, "SFwrtASDF90SADF9", "ASDF978ASD8wr7")

console.log(bitcoin)
console.log(bitcoin.getLastBlock())
