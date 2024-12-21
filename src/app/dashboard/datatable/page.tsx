import { payments } from '@/data/payments.data';
import { DataTable } from './dataTable';
import { columns } from './columns';

async function fetchData() {
  return payments;
}

export default async function DatatablePage() {
  const data = await fetchData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
