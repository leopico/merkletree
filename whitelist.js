const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const whiteListAddressesLeaves = require("./address.json");
// console.log(whiteListAddressesLeaves);

// const leaves = whiteListAddressesLeaves.map((addr) => keccak256(addr));

// const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
// console.log(`Whitelist merkle tree\n`, merkleTree.toString());

// const rootHash = merkleTree.getHexRoot();
// // console.log(rootHash);

// let addr = "0x04B0360a3D1Ac616c882aF29279ED292978602E1";
// let indexOfArray = whiteListAddressesLeaves.indexOf(addr);
// // console.log(indexOfArray);  //can output index of array

// const claimingAddress = leaves[indexOfArray];
// // console.log(claimingAddress.toString("hex"));

// const hexProof = merkleTree.getHexProof(claimingAddress);
// console.log(hexProof);


const leafNode = addresses.map((x) => keccak256(x));
        const tree = new MerkleTree(leafNode, keccak256, {
          sortPairs: true,
        });
        const buf2hex = (x) => "0x" + x.toString("hex");
        // console.log(buf2hex(tree.getRoot())); //for getting hash root
        const leaf = keccak256(accounts[0]); //hashing for user account
        const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));
