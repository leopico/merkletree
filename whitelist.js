const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const whiteListAddressesLeaves = require("./address.json");
// console.log(whiteListAddressesLeaves);

const leaves = whiteListAddressesLeaves.map((addr) => keccak256(addr));

const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
console.log(`Whitelist merkle tree\n`, merkleTree.toString());

const rootHash = merkleTree.getHexRoot();
console.log(rootHash);

const claimingAddress = leaves[5];
// console.log(claimingAddress.toString("hex"));

const hexProof = merkleTree.getHexProof(claimingAddress);
console.log(hexProof);
