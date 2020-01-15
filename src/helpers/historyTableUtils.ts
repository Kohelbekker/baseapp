export const depositColorMapping = {
    accepted: 'var(--green)',
    collected: 'var(--green)',
    submitted: '',
    canceled: 'var(--color-red)',
    rejected: 'var(--color-red)',
};

export const withdrawColorMapping = {
    prepared: '',
    submitted: '',
    canceled: 'var(--color-red)',
    accepted: 'var(--green)',
    suspected: '',
    rejected: 'var(--color-red)',
    processing: '',
    succeed: 'var(--green)',
    failed: 'var(--color-red)',
    confirming: '',
};

export const tradesColorMapping = {
    sell: {
        color: 'var(--color-red)',
        text: 'Sell',
    },
    buy: {
        color: 'var(--green)',
        text: 'Buy',
    },
};

export const setDepositStatusColor = (status: string): string => depositColorMapping[status];

export const setWithdrawStatusColor = (status: string): string => withdrawColorMapping[status];

export const setTradesType = (type: string) => tradesColorMapping[type] || { color: '', text: '' };
