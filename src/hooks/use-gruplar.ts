import { useEffect, useState } from "react";
import {
  GRUPLAR,
  gruplariDinle,
  type GrupBilgi,
} from "@/lib/talebeler";

export function useGruplar(): GrupBilgi[] {
  const [gruplar, setGruplar] = useState<GrupBilgi[]>(GRUPLAR);
  useEffect(() => gruplariDinle(setGruplar), []);
  return gruplar;
}
