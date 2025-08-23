export interface RawJob {
  id: number | string;
  externalId?: string;
  title: string;
  company?: string | { display_name: string };
  url?: string;
  redirect_url?: string;
  description: string;
  location?: string | { display_name: string };
  min_salary?: number;
  salary_min?: number;
  max_salary?: number;
  salary_max?: number;
  source?: string;
  createdAt?: string | Date;
  created?: string | Date;
  updatedAt?: string | Date;
  contract_type?: string | null;
  category?: string | { label: string };
}

// lib/types.ts
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
