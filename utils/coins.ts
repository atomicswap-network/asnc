import { Network } from 'bitcoinjs-lib'

type CoinJsonOfBip32 = {
  public: string | number
  private: string | number
}

type CoinJson = {
  messagePrefix: string
  bech32: string
  bip32: CoinJsonOfBip32
  pubKeyHash: string | number
  scriptHash: string | number
  wif: string | number
}

export function convertJsonToNetworks(json: CoinJson): Network {
  json.bip32.public = Number(json.bip32.public)
  json.bip32.private = Number(json.bip32.private)
  json.pubKeyHash = Number(json.pubKeyHash)
  json.scriptHash = Number(json.scriptHash)
  json.wif = Number(json.wif)
  return json as Network
}
