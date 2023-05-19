import { Anchor } from '@/app/route-group/components/Anchor';
import { ROUTES } from '@/app/route-group/routes';

export function Nav() {
  return (
    <ul>
      <span className="font-semibold">list group</span>
      {ROUTES.listGroup.map((route) => (
        <li key={route.href}>
          <Anchor href={route.href}>&gt; {route.name}</Anchor>
        </li>
      ))}

      <span className="font-semibold">showcase group</span>
      {ROUTES.showcaseGroup.map((route) => (
        <li key={route.href}>
          <Anchor href={route.href}>&gt; {route.name}</Anchor>
        </li>
      ))}
    </ul>
  );
}
