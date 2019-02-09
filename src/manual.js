module.exports = {
  printManual: () => {
    console.log('')
    console.log('Modularizer to export your truffle project as a node module')
    console.log('')
    console.log('Usage: truffle run modularize [options] [CONTRACT_NAMES...]')
    console.log('')
    console.log('If CONTRACT_NAMES is ommitted and there\'s no setting in truffle-config.js,')
    console.log('this will modularize all contracts in the built/contracts directory')
    console.log('')
    console.log('Options:')
    console.log('')
    console.log('   -o, --output <path>   Path to write modularized js file. default path is src/index.js')
    console.log('   -t, --target <path>   Path to read built artifacts of contracts. default path is \'build/contracts\'')
    console.log('   -a, --all             It will modularize all contracts')
    console.log('')
    console.log('You can store your custom settings in truffle-config.js')
    console.log('')
    console.log('{')
    console.log('  ...,')
    console.log('  modularizer:')
    console.log('    {')
    console.log('      output: "src/index.js",')
    console.log('      target: "build/contracts",')
    console.log('      includeOnly: [')
    console.log('        "FirstContractName",')
    console.log('        "SecondContractName"')
    console.log('      ], // if you don\'t configure includeOnly property, it will save all contracts')
    console.log('      networks: [')
    console.log('        1,')
    console.log('        2')
    console.log('      ] // if you don\'t configure networks property, it will save all networks')
    console.log('    },')
    console.log('  ...')
    console.log('}')
  }
}
