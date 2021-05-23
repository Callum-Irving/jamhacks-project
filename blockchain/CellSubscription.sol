pragma solidity >=0.4.22 <0.7.0;

contract storeString {
	uint256 postDetails;

    constructor(uint256 post) public {
        postDetails = post;
    }

    function makePayment() payable public {
    
    }

    function getInformation() public {
        msg.sender.transfer(address(this).balance);
    }

    function isPostCurrent(uint256 monthsElapsed) public view returns (bool) {
        return postDetails * monthsElapsed == address(this).balance;
    }
}