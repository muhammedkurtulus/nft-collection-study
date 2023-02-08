const CONTRACT_ADDRESS = "0x55679B475deC71D8B31a73A32b8721e8C44Ba0A3";

async function mintNFT(contractAddress: string) {
  const ExampleNFT = await ethers.getContractFactory("nftCollection1155");
  const [owner] = await ethers.getSigners();
  const tx = await ExampleNFT.attach(contractAddress).mint(0);
  tx.wait();
  console.log("NFT minted to: ", owner.address);
}

mintNFT(CONTRACT_ADDRESS)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
