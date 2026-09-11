import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { ArrowRight, Loader2, CheckCircle2, AlertCircle, FileCode2 } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { DEMO_CONTRACT_ADDRESS, DEMO_CONTRACT_ABI } from '../web3/config'

export default function Contracts() {
  const { t } = useTranslation()
  usePageMeta({
    title: 'Contracts',
    description: 'Read and write to a real smart contract deployed on Sepolia testnet — live, no mocks.',
  })

  const { isConnected } = useAccount()
  const [newValue, setNewValue] = useState('42')

  const { data: currentValue, refetch } = useReadContract({
    address: DEMO_CONTRACT_ADDRESS,
    abi: DEMO_CONTRACT_ABI,
    functionName: 'retrieve',
  })

  const { writeContract, data: txHash, isPending: isWriting, error: writeError } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  })

  const heroRef = useReveal<HTMLDivElement>()
  const panelRef = useReveal<HTMLDivElement>()

  function handleWrite(e: React.FormEvent) {
    e.preventDefault()
    const num = BigInt(newValue || '0')
    writeContract({
      address: DEMO_CONTRACT_ADDRESS,
      abi: DEMO_CONTRACT_ABI,
      functionName: 'store',
      args: [num],
    })
  }

  if (isConfirmed) {
    refetch()
  }

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-16">
        <p className="kicker mb-6">
          <span className="kicker-dot" />
          {t('contracts_script')}
        </p>
        <h1 className="page-title mb-8">{t('contracts_page_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          {t('contracts_intro')}
        </p>
      </div>

      <div ref={panelRef} className="reveal grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 md:p-8">
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark mb-4">
              {t('contracts_contract_label')}
            </p>
            <p className="font-mono text-sm break-all text-ink dark:text-ink-dark mb-4">
              {DEMO_CONTRACT_ADDRESS}
            </p>
            <a
              href={`https://sepolia.etherscan.io/address/${DEMO_CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              View on Etherscan
              <ArrowRight size={13} />
            </a>
          </div>

          <div className="rounded-surface bg-[#bef264] dark:bg-[#4d7c0f] text-[#1a2e05] dark:text-[#ecfccb] p-8 md:p-10">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-button bg-white/30 dark:bg-black/20 mb-5">
              <FileCode2 size={20} strokeWidth={1.75} />
            </div>
            <p className="font-mono text-2xs uppercase tracking-[0.14em] mb-3 text-[#365314] dark:text-[#d9f99d]">
              {t('contracts_read_title')}
            </p>
            <p className="font-sans text-sm mb-4 text-[#365314] dark:text-[#d9f99d]">
              {t('contracts_current_value')}
            </p>
            <p className="font-display text-5xl md:text-6xl font-semibold tracking-tight">
              {currentValue !== undefined ? currentValue.toString() : '—'}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleWrite}
            className="rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-8 md:p-10 h-full"
          >
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark mb-6">
              {t('contracts_write_title')}
            </p>

            {!isConnected && (
              <div className="mb-6 rounded-button bg-orange/10 dark:bg-orange-dark/10 border border-orange/30 dark:border-orange-dark/30 px-4 py-3 font-sans text-sm text-orange dark:text-orange-dark inline-flex items-center gap-2">
                <AlertCircle size={14} />
                {t('contracts_connect_first')}
              </div>
            )}

            <label className="block mb-6">
              <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
                {t('contracts_new_value')}
              </span>
              <input
                type="number"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                min="0"
                className="w-full rounded-button border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark px-4 py-3 font-mono text-base text-ink dark:text-ink-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 transition-colors"
              />
            </label>

            <button
              type="submit"
              disabled={!isConnected || isWriting || isConfirming}
              className="btn-accent disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isWriting || isConfirming ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  {isConfirming ? t('contracts_tx_pending') : t('contracts_set_button')}
                </>
              ) : (
                <>
                  {t('contracts_set_button')}
                  <ArrowRight size={15} />
                </>
              )}
            </button>

            {isConfirmed && (
              <p className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-lemon dark:text-lemon-dark">
                <CheckCircle2 size={15} />
                {t('contracts_tx_success')}
              </p>
            )}

            {writeError && (
              <p className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-orange dark:text-orange-dark">
                <AlertCircle size={15} />
                {t('contracts_tx_error')}: {writeError.message.slice(0, 100)}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
