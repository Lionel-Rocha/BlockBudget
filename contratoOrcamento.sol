// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract contratoOrcamento {

    struct Budget {
        bytes data;
        uint256 value;
        address payable owner;
        bool paid;
    }

    Budget[] public budgets;
    mapping(address => uint256[]) public addressToBudgetIds;

    event BudgetStored(uint256 indexed id, address indexed owner, uint256 value);
    event BudgetPaid(uint256 indexed id, address indexed payer, uint256 value);

    function storeBudget(bytes memory _data, uint256 _value) public {
        budgets.push(Budget({
            data: _data,
            value: _value,
            owner: payable(msg.sender),
            paid: false
        }));
        addressToBudgetIds[msg.sender].push(budgets.length - 1); 
        emit BudgetStored(budgets.length - 1, msg.sender, _value);
    }

    function payBudget(uint256 _id) public payable {
        require(_id < budgets.length, "Invalid budget ID");
        Budget storage budget = budgets[_id];
        require(msg.value == budget.value, "Incorrect value sent");
        require(!budget.paid, "Budget already paid");

        budget.owner.transfer(msg.value);
        budget.paid = true;

        emit BudgetPaid(_id, msg.sender, msg.value);
    }

    function getBudget(uint256 _id) public view returns (bytes memory, uint256, address, bool) {
        require(_id < budgets.length, "Invalid budget ID");
        Budget storage budget = budgets[_id];
        return (budget.data, budget.value, budget.owner, budget.paid);
    }

    function getBudgetsByAddress(address _owner) public view returns (uint256[] memory) {
        return addressToBudgetIds[_owner];
    }

    function getBudgetLength() public view returns(uint256){
        return budgets.length;
    }
}
