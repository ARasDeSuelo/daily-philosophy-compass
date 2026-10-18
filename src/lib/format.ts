import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

export const formatDate = (iso: string) => format(parseISO(iso), "d 'de' MMMM 'de' yyyy", { locale: es });
