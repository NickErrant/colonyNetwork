module.exports = {
    skipFiles: [
      'Migrations.sol',
      'EtherRouter.sol',
      'gnosis',
      'ERC20ExtendedToken.sol',
      'PatriciaTree'
    ],
    compileCommand: '../node_modules/.bin/truffle compile',
    testCommand: '../node_modules/.bin/truffle test --network coverage',
    testrpcOptions: `--port 8555 -i 1999 --acctKeys="./coverageEnv/ganache-accounts.json" --noVMErrorsOnRPCResponse`
};
