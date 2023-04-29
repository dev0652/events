import { format } from "date-fns";

export const formatEventStart = start => {
    return format(Date.parse(start), 'dd MMMM yyy, HH:mm');
}