pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Cap is ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Cap", "CAP") {}

    function currentTokenId() public view returns (uint256) {
        return _tokenIds.current();
    }

    function mint(address to, string memory ipfsHash)
    public
    returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        ERC721._mint(to, newItemId);
        ERC721URIStorage._setTokenURI(newItemId, ipfsHash);

        return newItemId;
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        ERC721._burn(tokenId);
        ERC721URIStorage._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return ERC721URIStorage.tokenURI(tokenId);
    }
}
