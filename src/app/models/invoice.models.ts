export interface Invoice {
  invoice_id: string;
  items: number;
  company_name: string;
  company_nit: number;
  company_category: string;
  due_date: string;
  amount: number;
  legal_representative_name: string;
  legal_representative_position: string;
  status: string;
}
