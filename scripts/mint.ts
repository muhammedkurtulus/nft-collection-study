const CONTRACT_ADDRESS = "0xB9288D48006EcC73e5E526A19b65B6fd9D4223EE";
// const META_DATA_URL = "ipfs://QmSc3eRuVFGeztzax9g3uvQyto6bxfdgSpzrv8p8MMgETV";

// async function mintNFT(contractAddress: string, metaDataURL: string) {
async function mintNFT(contractAddress: string) {
  for (let i = 0; i < 4; i++) {
    const ExampleNFT = await ethers.getContractFactory("nftCollection");
    const [owner] = await ethers.getSigners();
    const tx = await ExampleNFT.attach(contractAddress).mint();
    tx.wait();
    console.log("NFT minted to: ", owner.address);
  }
}

// mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
mintNFT(CONTRACT_ADDRESS)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
