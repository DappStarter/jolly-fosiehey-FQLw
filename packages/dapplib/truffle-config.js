require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool dash soap coach half cloth equal genius'; 
let testAccounts = [
"0xc01220b26b10a40c57613734174d27e342599d73831adf04e74168a56429c89a",
"0x39c00c7846b248881b29421a2d0fec1955b3f09c87e1f444580b752562b3fb63",
"0xd0f065287f9eb7c2518a7481a2ab7d51a984ed6951c816fef5186435b7606ba3",
"0x1fa4106e9e4a596a2e129bd9833713259f6b70012dba70da14d099a7f85705f7",
"0x8f1520536291de40f971e3147e9d1e9363930a674cccace4294706522c150905",
"0x4aad1a78cb9183a4ad23f049f50e104eb04f64a083e08526b316ddac7e2e5b7c",
"0xcdc85e5783f858d9c592c6abf15db95fe61350946d4ff49a2d8a64ee9f7e7398",
"0x4e2c7a7e708b08a085ef6153119ebf7c60b982a49abb2f88fb7189e9d163e7ab",
"0x2f295f75170555ca3810442ff9516d1953569e7a02c013f27646b4b2f3146893",
"0x382aa2353c0b12ab22b98e855b87023096d24e84f2f101e56e6c02f133c75283"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

