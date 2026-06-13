import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

/**
 * Fetches a public API resource, rendering `fallback` immediately so the
 * page never flashes blank and stays SEO-safe even if the API/DB is down.
 * When the request succeeds, the live data replaces the fallback.
 */
export function useResource<T>(
  path: string,
  fallback: T
): { data: T; loading: boolean } {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    api<T>(path)
      .then((d) => {
        if (alive && d != null && (!Array.isArray(d) || d.length > 0)) setData(d);
      })
      .catch(() => {
        /* keep fallback */
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [path]);

  return { data, loading };
}
