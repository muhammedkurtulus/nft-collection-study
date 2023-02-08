pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract nftCollection is ERC721 {
    uint256 private _tokenIds;

    constructor(
        string memory _name, // token name
        string memory _symbol // token symbol
    ) ERC721(_name, _symbol) {}

    //use the mint function to create an NFT
    function mint() public returns (uint256) {
        _tokenIds += 1;
        _mint(msg.sender, _tokenIds);
        return _tokenIds;
    }

    //in the function below include the CID of the JSON folder on IPFS
    function tokenURI(
        uint256 _tokenId
    ) public pure override returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "https://ipfs.io/ipfs/QmSc3eRuVFGeztzax9g3uvQyto6bxfdgSpzrv8p8MMgETV/",
                    Strings.toString(_tokenId),
                    ".json"
                )
            );
    }

    // function _baseURI() internal pure override returns (string memory) {
    //     return
    //         "https://ipfs.io/ipfs/QmSc3eRuVFGeztzax9g3uvQyto6bxfdgSpzrv8p8MMgETV/";
    // }
}
