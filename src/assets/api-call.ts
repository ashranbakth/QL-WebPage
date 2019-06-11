export interface InterestRate {
    name: string;
    year: number;
    interest: number;
};

export const interestRateCollection: InterestRate[] = [
    {
        name: 'FHA Conventional',
        year: 30,
        interest: 4.15,
    },
    {
        name: 'VA Conventional',
        year: 75,
        interest: 3.85,
    },
    {
        name: 'FHA Variable ARM',
        year: 30,
        interest: 3.99,
    },
    {
        name: 'Fannie Mae HELOC',
        year: 30,
        interest: 4.75,
    },
    {
        name: 'Freddie Mac Conventional',
        year: 30,
        interest: 5.75,
    },
    {
        name: 'VA ARM',
        year: 30,
        interest: 4.05,
    },
];