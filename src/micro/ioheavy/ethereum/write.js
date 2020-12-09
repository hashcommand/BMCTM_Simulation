var Web3 = require('web3');
var moment = require('moment')
var dateTime = require('node-datetime');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var contract_abi = [{"constant": false,"inputs": [{"name": "_nodeTrust","type": "uint8"},{"name": "_nodeName","type": "uint256"},{"name": "_nodeAddress","type": "address"},{"name": "_nodeSystem","type": "uint256"}],"name": "addDeviceTrust","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_fogName","type": "uint256"}],"name": "addFogNode","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_nodeName","type": "uint256"},{"name": "_nodeSystem","type": "uint256"},{"name": "_fogAddress","type": "address"}],"name": "addNode","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_nodeAddress","type": "address"}],"name": "removeNode","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "sender","type": "address"},{"name": "receiver","type": "address"},{"name": "message","type": "string"}],"name": "sendMessage","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "fogDeviceMapping","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "fogIds","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "fogNodes","outputs": [{"name": "fogName","type": "uint256"},{"name": "fogAddress","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "iotNodes","outputs": [{"name": "nodeName","type": "uint256"},{"name": "nodeSystem","type": "uint256"},{"name": "nodeTrust","type": "uint8"},{"name": "nodeAddress","type": "address"},{"name": "fogAddress","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "nodeIds","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "receiver","type": "address"}],"name": "readMessage","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "totalFogNodes","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "totalIoTDevice","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "trustMapping","outputs": [{"name": "","type": "uint8"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_nodeAddress","type": "address"}],"name": "verifyTrust","outputs": [{"name": "nodeTrust","type": "uint8"}],"payable": false,"stateMutability": "view","type": "function"}];
var num_nodes = process.argv[2];
var contract_address = process.argv[3];

var tx_count = 0;
    
    for(i = 0; i < num_nodes; i++)
    {
        addTrust(i);
    }
   

function addTrust()
    {
        //Make Trust Data
        node_trust = 20;
        node_name = 1;
        node_address = "0x74f1E9db41630d813030DF94ec09A85dA0F9FBf3";
        node_system = "12345";

        //console.time("Time:")
        
        web3.eth.defaultAccount = web3.eth.accounts[i];
        var CoursesContract = web3.eth.contract(contract_abi);
        var Courses = CoursesContract.at(contract_address);
        Courses.addDeviceTrust(node_trust,node_name,node_address,node_system);
        tx_count++;
        
        var dt = dateTime.create();
        var formatted = dt.format('M:S');
            //console.timeEnd("Time:")
            console.log("Time = " + formatted + " Tx Count = " + tx_count);
        }