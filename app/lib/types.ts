
export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  url: string | null;   // change undefined → null
  source: string;
  externalId: string;
  description: string;
  min_salary: number;
  max_salary: number;
  createdAt: Date;
  updatedAt: Date;
  contract_type: string | null;
  category: string | null;
};
