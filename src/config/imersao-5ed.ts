export const IMERSAO_5ED_LOTS = {
  'lote-zero': {
    id: 'lote-zero',
    label: 'Lote zero',
    labelUpper: 'LOTE ZERO',
    status: 'Lote zero ativo',
    basicPrice: 'R$ 19,90',
    basicPriceValue: '19,90',
    startsAt: '2026-06-01T00:00:00-03:00',
    endsAt: '2026-07-15T23:59:59-03:00',
  },
  'lote-01': {
    id: 'lote-01',
    label: 'Lote 01',
    labelUpper: 'LOTE 01',
    status: 'Lote 01 ativo',
    basicPrice: 'R$ 24,90',
    basicPriceValue: '24,90',
    startsAt: '2026-07-15T00:00:00-03:00',
    endsAt: '2026-07-21T23:59:59-03:00',
  },
  'lote-02': {
    id: 'lote-02',
    label: 'Últimos Ingressos',
    labelUpper: 'ÚLTIMOS INGRESSOS',
    status: 'Últimos ingressos disponíveis',
    basicPrice: 'R$ 34,90',
    basicPriceValue: '34,90',
    startsAt: '2026-07-22T00:00:00-03:00',
    endsAt: '2026-07-30T23:59:59-03:00',
  },
  'lote-03': {
    id: 'lote-03',
    label: 'Últimos Ingressos',
    labelUpper: 'ÚLTIMOS INGRESSOS',
    status: 'Últimos ingressos disponíveis',
    basicPrice: 'R$ 34,90',
    basicPriceValue: '34,90',
    startsAt: '2026-07-31T00:00:00-03:00',
    endsAt: '2026-08-01T09:00:00-03:00',
  },
} as const;

export type Imersao5edLotId = keyof typeof IMERSAO_5ED_LOTS;

// Altere apenas este ID quando houver uma virada de lote.
export const IMERSAO_5ED_CURRENT_LOT_ID: Imersao5edLotId = 'lote-02';
export const IMERSAO_5ED_CURRENT_LOT = IMERSAO_5ED_LOTS[IMERSAO_5ED_CURRENT_LOT_ID];

export const IMERSAO_5ED_PRICING = {
  basicOriginal: 'R$ 97,00',
  vipOriginal: 'R$ 297,00',
  vipInstallmentValue: 'R$ 15,20',
  vipInstallments: '12x de R$ 15,20',
  vipCash: 'R$ 147,00',
} as const;
