


/* union type | 와 &로 */

let str: 'name' | 'age' | 'address' = 'name';

type CompanyA = {
  companyName: string;
  since: number;
};

const company1: CompanyA & { ceo: string } = {
  companyName: '8b-studio',
  since: 2022,
  ceo: 'tiger'
};


