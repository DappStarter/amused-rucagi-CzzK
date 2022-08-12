require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rice stereo history guess end army gesture'; 
let testAccounts = [
"0xa1628fc00fd1417fb530a88e47873f587ad505a1dc915ab08747b03c2fd6d94a",
"0xcee38b67c1ca0f7ca6d5ae7efc93c7094e5461092909b10f06787ff57bfe90cc",
"0x75f8019cddf4bbbb5c84be40d6bb18be9879248bbc936c1130d390ae7cb8b710",
"0xe32865f514fbb81ea91ee3a1763e7c4515a65e451898858f8734432757ebe039",
"0x28fc75db3343deb84ad65307acf8f4a7e1463c78e1407e08225e1e1c60f2dfd8",
"0x938f5723209af83c0e0aa088272634425af8541a284dfb5765284bf25d93a0b0",
"0xfd0cabda3ac6590e12883676c4b101054d2f62482b15066b489543e407a3ee9d",
"0xa71fb870b9775c8009b85969539535cbaa303c09a793b23ed5c2bd3edad3507a",
"0x5a082185601ff90e278e25a0aba6e37177e1c5116fa30570e24f7fae07609804",
"0x8174fa0ba03d478edb356ae0d5f9526991bfe9ceb5c919606e7539a1af9ab61a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


