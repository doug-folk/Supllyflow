import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function formatDate(dateString: string) {
    let date = new Date(dateString)
    let formatado = format(date, 'dd/MM/yyyy', { locale: ptBR })
    return formatado;
}
