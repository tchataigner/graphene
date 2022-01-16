// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Graphene {
  // ERC721 contract
  address  private _nftContract;

  // Token Id
  uint256 private _tokenId;

  // Cold Stakeholders
  address[] private _coldStakeholders;

  // Is cold stakeholder
  mapping(address => bool) private _isColdStakeholder;

  // Price for cold replicas
  uint256 public constant COLD_PRICE = 1 ether;

  // Hot Stakeholders
  address[] private _hotStakeholder;

  // Hot Stakeholders number of replicas
  mapping(address => uint256) private _stakeholdersHotReplicas;

  // Participants per number of nodes
  mapping(uint256 => uint256) private _sharedNodes;

  // Maxed number of replicas
  uint256 private _maxedNbrReplicas;

  // Price for hot replicas
  uint256 public constant HOT_PRICE = 2 ether;


  /**
   * @dev Initializes the contract for a given token in an ERC721 contract
   */
  constructor(address nftContract_, uint256 tokenId_) {
    _nftContract = nftContract_;
    _tokenId = tokenId_;
  }

  function estimatePricing(bool coldReplicas, uint8 nbrHotReplicas)
  public
  view
  returns (uint256) {
    uint256 pricing = 0;
    if (coldReplicas) {
      pricing = COLD_PRICE / (_coldStakeholders.length + 1);
    }
    for (uint256 i=1; i <= nbrHotReplicas; i++) {
      pricing += HOT_PRICE / (_sharedNodes[i] + 1);
    }
    return pricing;
  }

  function currentPricing(address stakeholder)
  public
  view
  returns (uint256) {
    uint256 pricing = 0;
    if (_isColdStakeholder[stakeholder]) {
      pricing = COLD_PRICE / (_coldStakeholders.length);
    }
    for (uint256 i=1; i <= _stakeholdersHotReplicas[stakeholder]; i++) {
      pricing += HOT_PRICE / (_sharedNodes[i]);
    }
    return pricing;
  }

  function rentStorage(bool coldReplicas, uint8 nbrHotReplicas)
  public {
    if (coldReplicas) {
      _coldStakeholders.push(msg.sender);
      _isColdStakeholder[msg.sender] = true;
    }
    if (nbrHotReplicas > 0) {
      _stakeholdersHotReplicas[msg.sender] = nbrHotReplicas;
      for (uint256 i=1; i <= nbrHotReplicas; i++) {
        _sharedNodes[i] += 1;
      }
    }
  }
}
