'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { ApiList } from '@/components/ui/api-list';

import { ProductColumn, columns } from './columns';

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Produits (${data.length})`}
          description="Gérez les produits pour votre magasin"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/produits/nouveau`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Nouveau
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Appels API pour les produits" />
      <Separator />
      <ApiList entityName="produits" entityIdName="produitId" />
    </>
  );
};
