import { bytes } from '@zilliqa-js/util'

export enum Network {
  MainNet = 'MainNet',
  TestNet = 'TestNet',
}
type Networks = keyof typeof Network

export const APIS: { [key in Networks]: string } = {
  [Network.MainNet]: 'https://api.zilliqa.com',
  [Network.TestNet]: 'https://dev-api.zilliqa.com',
}

export const WSS: { [key in Networks]: string } = {
  [Network.MainNet]: 'wss://api-ws.zilliqa.com',
  [Network.TestNet]: 'wss://dev-ws.zilliqa.com',
}

export const CONTRACTS: { [key in Networks]: string } = {
  [Network.MainNet]: 'zil188lp0yk2hgvumv5clcxvr7q7zfplrackrf0ymf',
  [Network.TestNet]: 'zil1h5l6q593qvdufjgmfzdvk8tntavgtpzjmecl8g',
}

export const ARK_CONTRACTS: { [key in Networks]: string } = {
  [Network.MainNet]: '',
  [Network.TestNet]: 'zil1sgf3zpgt6qeflg053pxjwx9s9pxclx3p7s06gp',
}

export const WHITELISTED_TOKENS: { [key in Networks]: string[] } = {
  [Network.MainNet]: [
    "zil1gvr0jgwfsfmxsyx0xsnhtlte4gks6r3yk8x5fn", // wZIL
    "zil12htx8pdfwk39e47fhd7t3vd3rftyxeuf9px354", // PELE
    "zil1p5suryq6q647usxczale29cu3336hhp376c627", // ZWAP
    "zil1zu72vac254htqpg3mtywdcfm84l3dfd9qzww8t", // XSGD
    "zil14pzuzq6v6pmmmrfjhczywguu0e97djepxt8g3e", // gZIL
    'zil1sxx29cshups269ahh5qjffyr58mxjv9ft78jqy', // zUSDT
    'zil1wha8mzaxhm22dpm5cav2tepuldnr8kwkvmqtjq', // zWBTC
    'zil19j33tapjje2xzng7svslnsjjjgge930jx0w09v', // zETH
  ],
  [Network.TestNet]: [],
}

export enum ILOState {
  Uninitialized = 'Uninitialized',
  Pending = 'Pending',
  Active = 'Active',
  Failed = 'Failed',
  Completed = 'Completed',
}

export const CHAIN_VERSIONS: { [key in Networks]: number } = {
  [Network.MainNet]: bytes.pack(1, 1),
  [Network.TestNet]: bytes.pack(333, 1),
}

export const BASIS = 10000

export const ZIL_HASH = '0x0000000000000000000000000000000000000000'

export const PELE_HASH: { [key in Networks]: string } = {
  [Network.MainNet]: '0x55d66385a975A25Cd7c9bB7Cb8b1B11A56436789',
  [Network.TestNet]: '0xf9f02a18a524d2416cdb1e296a0ab485c07c0f78',
}