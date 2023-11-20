import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function formatDate(dateString: string) {
    let date = new Date(dateString)
    let formatado = format(date, 'dd/MM/yyyy', { locale: ptBR })
    return formatado;
}

export const doubleString = (n: number) : string => {
    const text = n.toFixed(2).toString();
    return text.replace('.', ',');
  };
