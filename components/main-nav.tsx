'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: 'Accueil',
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/affichages`,
      label: 'Affichages',
      active: pathname === `/${params.storeId}/affichages`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: 'Catégories',
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/tailles`,
      label: 'Tailles',
      active: pathname === `/${params.storeId}/tailles`,
    },
    {
      href: `/${params.storeId}/couleurs`,
      label: 'Couleurs',
      active: pathname === `/${params.storeId}/couleurs`,
    },
    {
      href: `/${params.storeId}/parametres`,
      label: 'Paramètres',
      active: pathname === `/${params.storeId}/parametres`,
    },
  ];

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-black dark:text-white'
              : 'text-muted-foreground'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
