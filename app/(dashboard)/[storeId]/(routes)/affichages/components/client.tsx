'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { ApiList } from '@/components/ui/api-list';

import { BillboardColumn, columns } from './columns';

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Affichage (${data.length})`}
          description="Gérez les publicités pour votre magasin"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/affichages/nouveau`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Nouveau
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="Appels API pour les affichages" />
      <Separator />
      <ApiList entityName="affichages" entityIdName="affichageId" />
    </>
  );
};
