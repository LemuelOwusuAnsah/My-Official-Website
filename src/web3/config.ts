import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors'

const WC_PROJECT_ID = 'demo'

export const wagmiConfig = createConfig({
  chains: [sepolia, mainnet],
  connectors: [
    injected({ shimDisconnect: true }),
    coinbaseWallet({ appName: 'Lemuel Owusu-Ansah' }),
    ...(WC_PROJECT_ID !== 'demo'
      ? [walletConnect({ projectId: WC_PROJECT_ID, showQrModal: true })]
      : []),
  ],
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
  },
})

export const SEPOLIA_CHAIN_ID = sepolia.id
export const MAINNET_CHAIN_ID = mainnet.id

export const CHAIN_NAMES: Record<number, string> = {
  [sepolia.id]: 'Sepolia Testnet',
  [mainnet.id]: 'Ethereum Mainnet',
}

export const DEMO_CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3' as const

export const DEMO_CONTRACT_ABI = [
  {
    inputs: [],
    name: 'retrieve',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'num', type: 'uint256' }],
    name: 'store',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
